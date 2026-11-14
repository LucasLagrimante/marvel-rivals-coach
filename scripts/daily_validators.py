from __future__ import annotations

import argparse
import json
import re
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from html.parser import HTMLParser
from pathlib import Path
from typing import Callable, Iterator
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen


class RankingsParseError(ValueError):
    """Erro ao ler a estrutura gerada de rankings.ts."""


def _balanced_content(source: str, start: int, opening: str, closing: str) -> tuple[str, int]:
    if start >= len(source) or source[start] != opening:
        raise RankingsParseError(f"esperava {opening!r} no índice {start}")

    depth = 0
    quote: str | None = None
    line_comment = False
    block_comment = False
    index = start

    while index < len(source):
        char = source[index]
        following = source[index + 1] if index + 1 < len(source) else ""

        if line_comment:
            if char == "\n":
                line_comment = False
            index += 1
            continue
        if block_comment:
            if char == "*" and following == "/":
                block_comment = False
                index += 2
            else:
                index += 1
            continue
        if quote:
            if char == "\\":
                index += 2
            else:
                if char == quote:
                    quote = None
                index += 1
            continue
        if char == "/" and following == "/":
            line_comment = True
            index += 2
            continue
        if char == "/" and following == "*":
            block_comment = True
            index += 2
            continue
        if char in {"'", '"', "`"}:
            quote = char
            index += 1
            continue
        if char == opening:
            depth += 1
        elif char == closing:
            depth -= 1
            if depth == 0:
                return source[start + 1 : index], index + 1
        index += 1

    raise RankingsParseError(f"delimitador {opening!r} sem fechamento correspondente")


def _object_blocks(array_content: str) -> Iterator[str]:
    index = 0
    while index < len(array_content):
        while index < len(array_content) and (array_content[index].isspace() or array_content[index] == ","):
            index += 1
        if index == len(array_content):
            return
        if array_content[index] != "{":
            raise RankingsParseError(f"item inesperado no array, índice {index}")
        block, index = _balanced_content(array_content, index, "{", "}")
        yield block


def _array_property(source: str, property_name: str) -> str:
    match = re.search(rf"\b{re.escape(property_name)}\s*:\s*\[", source)
    if not match:
        raise RankingsParseError(f"propriedade {property_name!r} não encontrada")
    start = source.find("[", match.start())
    content, _ = _balanced_content(source, start, "[", "]")
    return content


def _string_field(source: str, field: str, *, required: bool = True) -> str | None:
    match = re.search(rf"\b{re.escape(field)}\s*:\s*'((?:\\.|[^'\\])*)'", source)
    if not match:
        if required:
            raise RankingsParseError(f"campo de texto obrigatório ausente: {field}")
        return None
    return match.group(1).replace("\\'", "'").replace("\\\\", "\\")


def _number_field(source: str, field: str, *, required: bool = True) -> int | float | None:
    match = re.search(rf"\b{re.escape(field)}\s*:\s*(-?\d+(?:\.\d+)?)\b", source)
    if not match:
        if required:
            raise RankingsParseError(f"campo numérico obrigatório ausente: {field}")
        return None
    value = match.group(1)
    return float(value) if "." in value else int(value)


def _parse_entry(block: str) -> dict:
    portrait = re.search(
        r"\bportraitUrl\s*:\s*publicAsset\(\s*'((?:\\.|[^'\\])*)'\s*\)",
        block,
    )
    if not portrait:
        raise RankingsParseError("campo portraitUrl/publicAsset ausente em uma entrada")

    return {
        "rank": _number_field(block, "rank"),
        "slug": _string_field(block, "slug"),
        "name": _string_field(block, "name"),
        "gameName": _string_field(block, "gameName"),
        "tier": _string_field(block, "tier"),
        "rating": _number_field(block, "rating"),
        "winRate": _number_field(block, "winRate"),
        "pickRate": _number_field(block, "pickRate"),
        "matches": _number_field(block, "matches"),
        "guideId": _string_field(block, "guideId", required=False),
        "portraitUrl": portrait.group(1).replace("\\'", "'").replace("\\\\", "\\"),
    }


def parse_rankings_ts(source: str) -> list[dict]:
    """Lê categorias/entradas de rankings.ts sem depender de regex aninhada."""
    categories_content = _array_property(source, "categories")
    categories = []

    for category_block in _object_blocks(categories_content):
        role = _string_field(category_block, "role")
        entries_content = _array_property(category_block, "entries")
        entries = [_parse_entry(block) for block in _object_blocks(entries_content)]
        categories.append({"role": role, "entries": entries})

    if not categories:
        raise RankingsParseError("categories existe, mas não contém categorias")
    return categories


def compare_rankings(before: list[dict], after: list[dict]) -> list[dict]:
    """Compara entradas por role/slug e retorna apenas mudanças observáveis."""
    fields = ("rank", "tier", "rating", "winRate", "pickRate", "matches")
    def index_entries(categories: list[dict], label: str) -> dict[tuple[str, str], dict]:
        indexed: dict[tuple[str, str], dict] = {}
        for category in categories:
            for entry in category["entries"]:
                key = (category["role"], entry["slug"])
                if key in indexed:
                    raise RankingsParseError(f"{label}: entrada duplicada para {key[0]}/{key[1]}")
                indexed[key] = entry
        return indexed

    before_map = index_entries(before, "snapshot anterior")
    after_map = index_entries(after, "snapshot atual")
    keys = list(dict.fromkeys([*before_map, *after_map]))
    changes = []

    for role, slug in keys:
        old_entry = before_map.get((role, slug))
        new_entry = after_map.get((role, slug))
        if old_entry is None:
            kind = "added"
            changed_fields = {field: [None, new_entry.get(field)] for field in fields if field in new_entry}
        elif new_entry is None:
            kind = "removed"
            changed_fields = {field: [old_entry.get(field), None] for field in fields if field in old_entry}
        else:
            changed_fields = {
                field: [old_entry.get(field), new_entry.get(field)]
                for field in fields
                if old_entry.get(field) != new_entry.get(field)
            }
            if not changed_fields:
                continue
            kind = "changed"
        changes.append({
            "role": role,
            "slug": slug,
            "name": (new_entry or old_entry).get("name") or (new_entry or old_entry).get("gameName") or slug,
            "kind": kind,
            "fields": changed_fields,
        })
    return changes


EXPECTED_ROLES = ("vanguard", "duelist", "strategist")
EXPECTED_ROLE_COUNTS = {"vanguard": 15, "duelist": 28, "strategist": 13}
ROLE_LABELS = {"vanguard": "Vanguarda", "duelist": "Duelista", "strategist": "Estrategista"}


def validate_rankings_categories(categories: list[dict], project_root: Path) -> list[str]:
    """Audita estrutura, links, assets e role dos três blocos do ranking."""
    problems: list[str] = []
    roles = [category["role"] for category in categories]
    if roles != list(EXPECTED_ROLES):
        problems.append(f"roles esperadas {list(EXPECTED_ROLES)}, recebidas {roles}")

    for category in categories:
        role = category["role"]
        entries = category["entries"]
        expected_count = EXPECTED_ROLE_COUNTS.get(role)
        if expected_count is not None and len(entries) != expected_count:
            problems.append(
                f"{ROLE_LABELS.get(role, role)}: esperados {expected_count} herois, recebidos {len(entries)}"
            )
        if not entries:
            problems.append(f"{ROLE_LABELS.get(role, role)}: categoria vazia")
        ranks = [entry["rank"] for entry in entries]
        if ranks != list(range(1, len(entries) + 1)):
            problems.append(f"{ROLE_LABELS.get(role, role)}: ranks não são contínuos: {ranks}")
        slugs = [entry["slug"] for entry in entries]
        if len(slugs) != len(set(slugs)):
            problems.append(f"{ROLE_LABELS.get(role, role)}: slugs duplicados")

        for entry in entries:
            label = f"{ROLE_LABELS.get(role, role)} #{entry['rank']} {entry['slug']}"
            for field in ("rating", "winRate", "pickRate"):
                value = entry[field]
                if not 0 <= value <= 100:
                    problems.append(f"{label}: {field} fora de 0–100: {value}")
            if entry["matches"] <= 0:
                problems.append(f"{label}: matches deve ser positivo")
            if entry["tier"] not in {"S", "A", "B", "C", "D", "F"}:
                problems.append(f"{label}: tier desconhecido {entry['tier']!r}")

            guide_id = entry.get("guideId")
            if not guide_id:
                problems.append(f"{label}: guideId ausente; todo registro deve apontar para um guia local")
            else:
                guide_path = project_root / "src" / "data" / "heroes" / f"{guide_id}.ts"
                if not guide_path.exists():
                    problems.append(f"{label}: guia inexistente ({guide_id})")
                else:
                    guide_text = guide_path.read_text(encoding="utf-8")
                    match = re.search(r"\broles\s*:\s*\[([^\]]*)\]", guide_text)
                    if not match:
                        problems.append(f"{label}: guia sem campo roles ({guide_id})")
                    else:
                        guide_roles = {value.lower() for value in re.findall(r"['\"]([^'\"]+)['\"]", match.group(1))}
                        if role not in guide_roles:
                            problems.append(f"{label}: role do ranking ausente no guia {guide_id} ({sorted(guide_roles)})")

            portrait = entry["portraitUrl"]
            if not portrait.startswith(("http://", "https://")):
                portrait_path = project_root / "public" / portrait.lstrip("/")
                if not portrait_path.is_file():
                    problems.append(f"{label}: retrato inexistente ({portrait})")
    return problems


class RosterParseError(ValueError):
    """Erro ao ler o roster embutido na página oficial."""


OFFICIAL_ROSTER_URL = "https://www.marvelrivals.com/heroes/"
_ROLE_TAGS = {
    "VANGUARD": "vanguard",
    "DUELIST": "duelist",
    "STRATEGIST": "strategist",
}
_VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


class _OfficialRosterParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.stack: list[str] = []
        self.roster_depth: int | None = None
        self.found_roster = False
        self.entries: list[dict[str, object]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        classes = (attributes.get("class") or "").split()
        if tag == "div" and "heroesNewsLists" in classes and self.roster_depth is None:
            self.found_roster = True
            self.roster_depth = len(self.stack) + 1

        if self.roster_depth is not None and tag == "a":
            name = (attributes.get("data-name") or "").strip()
            raw_roles = (attributes.get("data-tag") or "").split()
            unknown_roles = [role for role in raw_roles if role.upper() not in _ROLE_TAGS]
            href = (attributes.get("href") or "").strip()
            hero_id = (attributes.get("data-id") or "").strip()
            if not name or unknown_roles or (not raw_roles and (not href or not hero_id)):
                raise RosterParseError(
                    f"entrada oficial incompleta ou roles desconhecidas: {name!r}, {raw_roles!r}"
                )
            roles = [_ROLE_TAGS[role.upper()] for role in raw_roles]
            self.entries.append({"name": name, "roles": roles, "href": href, "id": hero_id})

        if tag not in _VOID_TAGS:
            self.stack.append(tag)

    def handle_endtag(self, tag: str) -> None:
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index] == tag:
                if self.roster_depth == index + 1:
                    self.roster_depth = None
                del self.stack[index:]
                return


_HERO_HREF_RE = re.compile(r"\./[A-Za-z0-9_-]+/index\.html")


def _merge_roster_entries(entries: list[dict[str, object]]) -> list[dict[str, object]]:
    """Une as duas âncoras por herói que a lista oficial passou a publicar.

    Desde a Temporada 11 a lista oculta traz dois `a` por herói com o mesmo
    `data-id`: um com `data-tag` e `href="javascript:;"`, outro com o link
    `./<id>/index.html` e sem `data-tag`. Sem a união, o roster sai duplicado e
    o herói com mais de uma variante (Deadpool) aparece só com a role do
    primeiro card.
    """
    merged: list[dict[str, object]] = []
    index_by_key: dict[str, int] = {}
    for entry in entries:
        hero_id = str(entry.get("id") or "").strip()
        key = hero_id or " ".join(str(entry["name"]).casefold().split())
        if not key or key not in index_by_key:
            if key:
                index_by_key[key] = len(merged)
            merged.append(
                {
                    "name": entry["name"],
                    "roles": list(entry["roles"]),
                    "href": entry["href"],
                    "id": entry["id"],
                }
            )
            continue
        target = merged[index_by_key[key]]
        for role in entry["roles"]:
            if role not in target["roles"]:
                target["roles"].append(role)
        if not _HERO_HREF_RE.fullmatch(str(target.get("href") or "")) and _HERO_HREF_RE.fullmatch(
            str(entry.get("href") or "")
        ):
            target["href"] = entry["href"]
    return merged


def _parse_official_roster_entries(html: str) -> list[dict[str, object]]:
    parser = _OfficialRosterParser()
    parser.feed(html)
    parser.close()
    if not parser.found_roster:
        raise RosterParseError("contêiner oficial heroesNewsLists não encontrado")
    if not parser.entries:
        raise RosterParseError("contêiner heroesNewsLists existe, mas não contém heróis")
    return _merge_roster_entries(parser.entries)


def _resolve_official_roster(
    entries: list[dict[str, object]],
    role_lookup: Callable[[dict[str, object]], list[str]] | None = None,
) -> list[dict[str, object]]:
    resolved: list[dict[str, object]] = []
    valid_roles = set(_ROLE_TAGS.values())
    for entry in entries:
        name = str(entry["name"])
        roles = list(entry["roles"])
        if role_lookup is not None:
            # A lista oculta marca só a variante do card; a ficha oficial expõe
            # todas as roles do herói (Deadpool tem três). A união evita que um
            # herói multi-role seja auditado como se tivesse uma role só.
            roles = role_lookup(entry)
        elif not roles:
            raise RosterParseError(
                f"entrada oficial incompleta ou roles desconhecidas: {name!r}, []"
            )
        normalized_roles = [str(role).lower() for role in roles]
        if not normalized_roles or any(role not in valid_roles for role in normalized_roles):
            raise RosterParseError(
                f"roles oficiais inválidas para {name!r}: {normalized_roles!r}"
            )
        resolved.append({"name": name, "roles": normalized_roles})
    return resolved


def parse_official_roster(
    html: str,
    role_lookup: Callable[[dict[str, object]], list[str]] | None = None,
) -> list[dict[str, object]]:
    """Lê a lista oculta e, se necessário, resolve roles no dado oficial do herói."""
    return _resolve_official_roster(_parse_official_roster_entries(html), role_lookup)


def _fetch_official_hero_roles(entry: dict[str, object]) -> list[str]:
    href = str(entry.get("href") or "")
    hero_id = str(entry.get("id") or "")
    if not re.fullmatch(r"\./[A-Za-z0-9_-]+/index\.html", href) or not hero_id:
        raise RosterParseError(f"link oficial de herói inválido para {entry.get('name')!r}: {href!r}")

    page_url = urljoin(OFFICIAL_ROSTER_URL, href)
    parsed_url = urlparse(page_url)
    if parsed_url.hostname != "www.marvelrivals.com" or not parsed_url.path.startswith("/heroes/"):
        raise RosterParseError(f"URL oficial de herói fora do domínio esperado: {page_url}")

    request = Request(
        page_url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; MarvelRivalsCoach/1.0)"},
    )
    with urlopen(request, timeout=20) as response:
        html = response.read().decode("utf-8", errors="replace")

    marker = "window.__HERO_DATA__"
    marker_at = html.find(marker)
    equals_at = html.find("=", marker_at + len(marker)) if marker_at >= 0 else -1
    if equals_at < 0:
        raise RosterParseError(f"dados oficiais do herói ausentes para {entry.get('name')!r}")
    try:
        data, _ = json.JSONDecoder().raw_decode(html[equals_at + 1 :].lstrip())
    except json.JSONDecodeError as error:
        raise RosterParseError(f"JSON oficial inválido para {entry.get('name')!r}: {error}") from error
    if not isinstance(data, dict) or data.get("id") != hero_id:
        raise RosterParseError(f"ID da página oficial não corresponde a {entry.get('name')!r} ({hero_id})")

    jobs = data.get("jobs")
    if not isinstance(jobs, list) or not jobs or any(
        not isinstance(role, str) or role.lower() not in set(_ROLE_TAGS.values()) for role in jobs
    ):
        raise RosterParseError(f"roles ausentes/desconhecidas na ficha oficial de {entry.get('name')!r}: {jobs!r}")
    return [role.lower() for role in jobs]


def fetch_official_roster() -> list[dict[str, object]]:
    request = Request(
        OFFICIAL_ROSTER_URL,
        headers={"User-Agent": "Mozilla/5.0 (compatible; MarvelRivalsCoach/1.0)"},
    )
    with urlopen(request, timeout=30) as response:
        html = response.read().decode("utf-8", errors="replace")
    entries = _parse_official_roster_entries(html)
    fetchable = [
        entry
        for entry in entries
        if str(entry.get("id") or "") and _HERO_HREF_RE.fullmatch(str(entry.get("href") or ""))
    ]
    roles_by_id: dict[str, list[str]] = {}
    fetch_errors: dict[str, Exception] = {}
    if fetchable:
        with ThreadPoolExecutor(max_workers=min(8, len(fetchable))) as executor:
            futures = {
                executor.submit(_fetch_official_hero_roles, entry): entry for entry in fetchable
            }
            for future in as_completed(futures):
                entry = futures[future]
                key = str(entry["id"])
                try:
                    roles_by_id[key] = future.result()
                except Exception as error:  # noqa: BLE001 - falha por herói é registrada abaixo
                    fetch_errors[key] = error

    def role_lookup(entry: dict[str, object]) -> list[str]:
        key = str(entry.get("id") or "")
        roles = list(entry["roles"])
        for role in roles_by_id.get(key, []):
            if role not in roles:
                roles.append(role)
        if roles:
            return roles
        if key in fetch_errors:
            raise RosterParseError(
                f"ficha oficial ilegível para {entry.get('name')!r}: {fetch_errors[key]}"
            )
        raise RosterParseError(f"roles oficiais ausentes para {entry.get('name')!r}")

    return _resolve_official_roster(entries, role_lookup=role_lookup)

def audit_official_roster(
    roster: list[dict[str, str]],
    app_heroes: list[dict],
    project_root: Path,
    matcher: Callable[[list[dict], str], dict | None],
) -> list[str]:
    """Compara nomes/roles oficiais com os arquivos de guia locais."""
    problems: list[str] = []
    normalized_names = [" ".join(entry["name"].casefold().split()) for entry in roster]
    duplicates = sorted({name for name in normalized_names if normalized_names.count(name) > 1})
    if duplicates:
        problems.append(f"Nomes duplicados no roster oficial: {duplicates}")

    matched_ids: set[str] = set()
    for entry in roster:
        name = entry["name"]
        guide = matcher(app_heroes, name)
        if not guide:
            problems.append(f"Herói oficial sem guia local correspondente: {name}")
            continue

        guide_id = guide["id"]
        if guide_id in matched_ids:
            problems.append(f"Mais de um herói oficial foi associado ao guia {guide_id}")
        matched_ids.add(guide_id)

        guide_path = project_root / "src" / "data" / "heroes" / f"{guide_id}.ts"
        if not guide_path.exists():
            problems.append(f"Roster mapeou {name} para arquivo inexistente: {guide_path.name}")
            continue

        text = guide_path.read_text(encoding="utf-8")
        role_match = re.search(r"\broles\s*:\s*\[([^\]]*)\]", text)
        if not role_match:
            problems.append(f"Guia {guide_id} não declara roles")
            continue
        local_roles = {role.lower() for role in re.findall(r"['\"]([^'\"]+)['\"]", role_match.group(1))}
        official_roles = {role.lower() for role in entry.get("roles", [])}
        if official_roles != local_roles:
            problems.append(
                f"{name}: roles oficiais {sorted(official_roles)} divergem do guia {sorted(local_roles)}"
            )

    local_ids = {hero["id"] for hero in app_heroes}
    for guide_id in sorted(local_ids - matched_ids):
        problems.append(f"Guia local ausente do roster oficial: {guide_id}")
    return problems


PROJECT_ROOT = Path(__file__).resolve().parents[1]


def _validate_rankings_paths(paths: list[Path]) -> int:
    snapshots: list[tuple[Path, list[dict]]] = []
    failed = False
    for path in paths:
        resolved = path if path.is_absolute() else PROJECT_ROOT / path
        try:
            categories = parse_rankings_ts(resolved.read_text(encoding="utf-8"))
        except (OSError, RankingsParseError) as error:
            print(f"[FALHA] {resolved}: {error}", file=sys.stderr)
            failed = True
            continue
        problems = validate_rankings_categories(categories, PROJECT_ROOT)
        if problems:
            print(f"[FALHA] {resolved}: {len(problems)} problema(s)")
            for problem in problems:
                print(f"  - {problem}")
            failed = True
        else:
            count = sum(len(category["entries"]) for category in categories)
            print(f"[OK] {resolved.name}: 3 roles, {count} entradas, guias/assets/metricas validos")
        snapshots.append((resolved, categories))

    if failed or len(snapshots) != len(paths):
        return 1

    for (before_path, before), (after_path, after) in zip(snapshots, snapshots[1:]):
        changes = compare_rankings(before, after)
        moved = sum("rank" in change["fields"] for change in changes)
        added = sum(change["kind"] == "added" for change in changes)
        removed = sum(change["kind"] == "removed" for change in changes)
        print(
            f"[OK] {before_path.name} -> {after_path.name}: "
            f"{len(changes)} mudancas, {moved} posicoes alteradas, {added} entradas novas, {removed} removidas"
        )
        for change in changes[:12]:
            label = ROLE_LABELS.get(change["role"], change["role"])
            details = "; ".join(
                f"{field} {values[0]}→{values[1]}"
                for field, values in change["fields"].items()
            )
            print(f"  {label} — {change['name']}: {change['kind']} ({details})")
        if len(changes) > 12:
            print(f"  ... e mais {len(changes) - 12} mudancas")
    return 0


def _validate_official_roster() -> int:
    try:
        roster = fetch_official_roster()
        from update_rankings import load_app_heroes, match_guide

        app_heroes = load_app_heroes()
        problems = audit_official_roster(roster, app_heroes, PROJECT_ROOT, match_guide)
    except Exception as error:
        print(f"[FALHA] consulta/auditoria do roster oficial: {type(error).__name__}: {error}", file=sys.stderr)
        return 1

    if problems:
        print(f"[FALHA] roster oficial: {len(problems)} problema(s)")
        for problem in problems:
            print(f"  - {problem}")
        return 1
    print(f"[OK] roster oficial: {len(roster)} herois conferidos contra {len(app_heroes)} guias locais")
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Validadores das checagens diarias do Marvel Rivals Coach")
    subparsers = parser.add_subparsers(dest="command", required=True)
    rankings_parser = subparsers.add_parser("rankings", help="audita snapshot(s) e compara-os em ordem")
    rankings_parser.add_argument("snapshots", nargs="+", type=Path)
    subparsers.add_parser("roster", help="confere o roster oficial contra nomes/roles dos guias locais")
    arguments = parser.parse_args(argv)

    if arguments.command == "rankings":
        return _validate_rankings_paths(arguments.snapshots)
    return _validate_official_roster()


if __name__ == "__main__":
    raise SystemExit(main())
