"""
Gera o ranking de personagens a partir do Counterwatch e fixa os dados no app.

O app roda no GitHub Pages (estático), então o ranking não é buscado em runtime:
este script baixa os dados agregados de partidas ranqueadas, normaliza para o
formato do app e grava `src/data/rankings.ts`. Rode o script quando quiser
publicar um snapshot novo.

Fonte dos dados:
  https://www.counterwatch.gg/stats/marvel-rivals/tier-list
  (Marvel Rivals Standard, todos os ranks — atualizado diariamente pelo site)

O que o script faz:
  1. Baixa a página do tier list e extrai o payload embutido (Next.js RSC).
  2. Monta o ranking por categoria (Vanguarda / Duelista / Estrategista),
     ordenado pela taxa de vitória ajustada por amostra (shrunk win rate).
  3. Calcula o rating 0–100 do app: rating = 50 + (winRateAjustada − 50) × 4.
  4. Liga cada personagem ao guia do app quando existir (id do herói).
  5. Baixa os retratos para `public/rankings/<slug>.webp` quando o herói não
     tem asset local em `public/heroes/select/`.
  6. Grava `src/data/rankings.ts` com os dados tipados.

Exemplos:
  python scripts/update_rankings.py
  python scripts/update_rankings.py --skip-images
  python scripts/update_rankings.py --html /tmp/counterwatch.html
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE_URL = "https://www.counterwatch.gg/stats/marvel-rivals/tier-list"
SOURCE_NAME = "Counterwatch"
OUTPUT_PATH = ROOT / "src" / "data" / "rankings.ts"
RANKING_IMAGE_DIR = ROOT / "public" / "rankings"
SELECT_IMAGE_DIR = ROOT / "public" / "heroes" / "select"
HERO_DIR = ROOT / "src" / "data" / "heroes"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
HEADERS = {
    "User-Agent": UA,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9,pt-BR;q=0.8",
}

ROLE_ORDER = ("vanguard", "duelist", "strategist")
ROLE_MAP = {
    "Vanguard": "vanguard",
    "Duelist": "duelist",
    "Strategist": "strategist",
}
ROLE_LABELS = {
    "vanguard": "Vanguarda",
    "duelist": "Duelista",
    "strategist": "Estrategista",
}
RATING_FACTOR = 4
MIN_MATCH_LENGTH = 4

# Heróis do source cujo nome não casa automaticamente com nome/aliases do app.
GUIDE_OVERRIDES = {
    "gorr the god butcher": "gorr",
}


def fetch_html(url: str) -> str:
    request = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(request, timeout=45) as response:
        return response.read().decode("utf-8", errors="replace")


def normalize_name(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = "".join(char for char in value if not unicodedata.combining(char))
    value = value.replace("&", " and ")
    value = re.sub(r"\([^)]*\)", " ", value)
    value = re.sub(r"[^a-zA-Z0-9]+", " ", value)
    return " ".join(value.lower().split())


def slugify(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = "".join(char for char in value if not unicodedata.combining(char))
    value = re.sub(r"\([^)]*\)", " ", value)
    value = re.sub(r"[^a-zA-Z0-9]+", "-", value)
    return value.strip("-").lower()


def load_app_heroes() -> list[dict]:
    """Lê id, nome e aliases de cada arquivo de herói do app."""
    heroes = []
    for path in sorted(HERO_DIR.glob("*.ts")):
        if path.name == "index.ts":
            continue

        content = path.read_text(encoding="utf-8")
        hero_id = re.search(r"^\s*id:\s*'([^']+)'", content, flags=re.M)
        name = re.search(r"^\s*name:\s*'([^']+)'", content, flags=re.M)
        aliases = re.search(r"aliases:\s*\[(.*?)\]", content, flags=re.S)
        if not hero_id or not name:
            continue

        alias_values = re.findall(r"'([^']*)'", aliases.group(1)) if aliases else []
        heroes.append(
            {
                "id": hero_id.group(1),
                "name": name.group(1),
                "candidates": [name.group(1), hero_id.group(1).replace("-", " "), *alias_values],
            }
        )
    return heroes


def match_guide(app_heroes: list[dict], display_name: str) -> dict | None:
    normalized = normalize_name(display_name)
    if normalized in GUIDE_OVERRIDES:
        wanted = GUIDE_OVERRIDES[normalized]
        return next((hero for hero in app_heroes if hero["id"] == wanted), None)

    first_token = normalized.split()[0] if normalized else ""
    best: tuple[int, dict] | None = None

    for hero in app_heroes:
        for candidate in hero["candidates"]:
            normalized_candidate = normalize_name(candidate)
            if not normalized_candidate:
                continue
            if normalized_candidate == normalized:
                return hero
            if len(normalized_candidate) < MIN_MATCH_LENGTH:
                continue
            # Correspondência parcial exige o mesmo primeiro token: evita casar
            # "Storm" com "Sue Storm" (alias) ao ligar o nome da fonte ao guia.
            if normalized_candidate.split()[0] != first_token:
                continue
            if normalized_candidate in normalized or normalized in normalized_candidate:
                if best is None or len(normalized_candidate) > best[0]:
                    best = (len(normalized_candidate), hero)

    return best[1] if best else None


def find_local_portrait(hero_id: str) -> str | None:
    """Retorna o caminho público do asset local de seleção, se existir."""
    wanted = asset_tokens(hero_id)
    if not wanted:
        return None

    for path in sorted(SELECT_IMAGE_DIR.glob("*.png")):
        if asset_tokens(path.stem) == wanted:
            return f"heroes/select/{path.name}"
    return None


def asset_tokens(value: str) -> set[str]:
    tokens = normalize_name(value.replace("-", " ").replace("_", " ")).split()
    return {token for token in tokens if token not in {"and", "e"}}


def extract_page_payload(html: str) -> str:
    chunks = re.findall(r'self\.__next_f\.push\(\[1,"(.*?)"\]\)', html, flags=re.S)
    return "".join(json.loads(f'"{chunk}"') for chunk in chunks)


def extract_hero_rows(payload: str) -> list[dict]:
    decoder = json.JSONDecoder()
    rows: dict[int, dict] = {}

    for match in re.finditer(r'\{"heroId"', payload):
        try:
            row, _ = decoder.raw_decode(payload, match.start())
        except json.JSONDecodeError:
            continue
        if not isinstance(row, dict) or "shrunkWinRate" not in row:
            continue
        rows[row["heroId"]] = row

    return list(rows.values())


def extract_meta(html: str) -> dict:
    plain = re.sub(r"<!-- -->", "", html)
    season = re.search(r"Season\s+(\d+)", plain)
    updated = re.search(r"updated\s+([A-Z][a-z]{2}\s+\d{1,2},\s+\d{4})", plain)
    scope = re.search(r"Marvel Rivals (Standard|Conquest),\s*([a-z ]+ranks)", plain)

    updated_iso = ""
    if updated:
        updated_iso = datetime.strptime(updated.group(1), "%b %d, %Y").strftime("%Y-%m-%d")

    scope_text = "Standard, todos os ranks"
    if scope:
        rank_label = {"all ranks": "todos os ranks"}.get(scope.group(2), scope.group(2))
        scope_text = f"{scope.group(1)}, {rank_label}"

    return {
        "season": f"Season {season.group(1)}" if season else "Temporada atual",
        "scope": scope_text,
        "updatedAt": updated_iso,
    }


def compute_rating(shrunk_win_rate: float) -> int:
    rating = 50 + (shrunk_win_rate * 100 - 50) * RATING_FACTOR
    return max(0, min(100, round(rating)))


def download_portrait(row: dict, slug: str, force: bool) -> str | None:
    RANKING_IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    out_path = RANKING_IMAGE_DIR / f"{slug}.webp"

    if out_path.exists() and not force:
        return f"rankings/{out_path.name}"

    request = urllib.request.Request(row["imageUrl"], headers=HEADERS)
    try:
        with urllib.request.urlopen(request, timeout=35) as response:
            out_path.write_bytes(response.read())
    except Exception as exc:  # noqa: BLE001 - script de manutenção, reporta e segue
        print(f"  falha ao baixar retrato de {row['displayName']}: {exc}")
        return None

    return f"rankings/{out_path.name}"


def build_entry(row: dict, rank: int, app_heroes: list[dict], skip_images: bool, force_images: bool, slug: str | None = None) -> dict:
    display_name = row["displayName"]
    guide = match_guide(app_heroes, display_name)
    slug = slug or slugify(display_name)

    portrait_url = None
    if not skip_images:
        if guide:
            portrait_url = find_local_portrait(guide["id"])
        if not portrait_url:
            portrait_url = download_portrait(row, slug, force_images)
    if not portrait_url:
        portrait_url = row["imageUrl"]

    entry = {
        "rank": rank,
        "slug": slug,
        "name": guide["name"] if guide else display_name,
        "gameName": display_name,
        "tier": row["tier"],
        "rating": compute_rating(row["shrunkWinRate"]),
        "winRate": round(row["winRate"] * 100, 1),
        "pickRate": round(row["pickrate"] * 100, 1),
        "matches": round(row["totalMatches"]),
        "portraitUrl": portrait_url,
    }
    if guide:
        entry["guideId"] = guide["id"]
    return entry


def build_categories(rows: list[dict], app_heroes: list[dict], skip_images: bool, force_images: bool) -> list[dict]:
    categories = []

    used_slugs: set[str] = set()
    for role_key in ROLE_ORDER:
        role_rows = [row for row in rows if ROLE_MAP.get(row["roleName"]) == role_key]
        role_rows.sort(
            key=lambda row: (-row["shrunkWinRate"], -row["pickrate"], row["displayName"].lower())
        )

        entries = []
        for index, row in enumerate(role_rows):
            base_slug = slugify(row["displayName"])
            slug = base_slug
            if slug in used_slugs:
                slug = f"{base_slug}-{role_key}"
            used_slugs.add(slug)
            entries.append(build_entry(row, index + 1, app_heroes, skip_images, force_images, slug))
        categories.append({"role": role_key, "entries": entries})

    return categories


def ts_string(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace("'", "\\'")
    return f"'{escaped}'"


def render_ts(data: dict) -> str:
    lines = [
        "// Arquivo gerado por scripts/update_rankings.py — não editar manualmente.",
        f"// Fonte: {data['source']['name']} ({data['source']['url']})",
        "import type { RankingsData } from '../types'",
        "",
        "const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`",
        "",
        "export const rankings: RankingsData = {",
        f"  season: {ts_string(data['season'])},",
        f"  scope: {ts_string(data['scope'])},",
        f"  updatedAt: {ts_string(data['updatedAt'])},",
        f"  fetchedAt: {ts_string(data['fetchedAt'])},",
        "  source: {",
        f"    name: {ts_string(data['source']['name'])},",
        f"    url: {ts_string(data['source']['url'])},",
        "  },",
        "  categories: [",
    ]

    for category in data["categories"]:
        lines.append("    {")
        lines.append(f"      role: {ts_string(category['role'])},")
        lines.append("      entries: [")
        for entry in category["entries"]:
            lines.append("        {")
            lines.append(f"          rank: {entry['rank']},")
            lines.append(f"          slug: {ts_string(entry['slug'])},")
            lines.append(f"          name: {ts_string(entry['name'])},")
            lines.append(f"          gameName: {ts_string(entry['gameName'])},")
            lines.append(f"          tier: {ts_string(entry['tier'])},")
            lines.append(f"          rating: {entry['rating']},")
            lines.append(f"          winRate: {entry['winRate']},")
            lines.append(f"          pickRate: {entry['pickRate']},")
            lines.append(f"          matches: {entry['matches']},")
            if entry.get("guideId"):
                lines.append(f"          guideId: {ts_string(entry['guideId'])},")
            lines.append(f"          portraitUrl: publicAsset({ts_string(entry['portraitUrl'])}),")
            lines.append("        },")
        lines.append("      ],")
        lines.append("    },")

    lines.append("  ],")
    lines.append("}")
    lines.append("")
    return "\n".join(lines)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Atualiza o ranking de personagens fixado no app.")
    parser.add_argument("--skip-images", action="store_true", help="Não baixa retratos; usa a URL remota da fonte.")
    parser.add_argument("--force-images", action="store_true", help="Baixa os retratos de novo mesmo se já existirem.")
    parser.add_argument("--html", help="Usa um HTML local da fonte em vez de baixar a página.")
    parser.add_argument("--output", default=str(OUTPUT_PATH), help="Caminho do arquivo .ts gerado.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    print("Baixando tier list do Counterwatch..." if not args.html else f"Lendo HTML local: {args.html}")
    html = Path(args.html).read_text(encoding="utf-8") if args.html else fetch_html(SOURCE_URL)

    payload = extract_page_payload(html)
    rows = extract_hero_rows(payload)
    if not rows:
        print("Nenhum personagem encontrado no payload. A fonte pode ter mudado de formato.")
        return 1

    meta = extract_meta(html)
    app_heroes = load_app_heroes()
    categories = build_categories(rows, app_heroes, args.skip_images, args.force_images)

    data = {
        "season": meta["season"],
        "scope": meta["scope"],
        "updatedAt": meta["updatedAt"],
        "fetchedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "source": {"name": SOURCE_NAME, "url": SOURCE_URL},
        "categories": categories,
    }

    output_path = Path(args.output)
    output_path.write_text(render_ts(data), encoding="utf-8")

    linked = sum(1 for category in categories for entry in category["entries"] if entry.get("guideId"))
    total = sum(len(category["entries"]) for category in categories)
    print(f"{meta['season']} · {meta['scope']} · atualizado em {meta['updatedAt'] or 'desconhecido'}")
    for category in categories:
        top = category["entries"][0]
        print(f"  {ROLE_LABELS[category['role']]}: {len(category['entries'])} heróis | #1 {top['name']} ({top['rating']})")
    print(f"{linked} de {total} personagens ligados a guias do app:")
    for category in categories:
        for entry in category["entries"]:
            if entry.get("guideId"):
                print(f"  {entry['gameName']} -> {entry['guideId']} ({entry['name']})")
    print(f"Arquivo gerado: {output_path.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
