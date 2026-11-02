"""
Baixa os assets oficiais de Team-Up da página Team-Up do site de Marvel Rivals.

Cada Team-Up tem duas imagens oficiais na página:
  - ícone da habilidade (150x150) — `iconImg` no bundle;
  - retrato do herói parceiro (50x40) — `headerImg` no bundle.

A página é um app JS. O script baixa o HTML, localiza o bundle `teamup_<hash>.js`,
extrai o mapa módulo → arquivo de imagem e os dados dos 53 heróis, e salva:

  public/teamups/<slug>-<opcao>-icon.png      (ícone da habilidade)
  public/teamups/<slug>-<opcao>-partner.png   (retrato do parceiro)

Exemplos:
  python scripts/download_teamup_assets.py --only magneto magik
  python scripts/download_teamup_assets.py --force
"""

from __future__ import annotations

import argparse
import re
import urllib.request
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "teamups"
PAGE_URL = "https://www.marvelrivals.com/heroes/teamup.html"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
HEADERS = {"User-Agent": UA, "Referer": "https://www.marvelrivals.com/"}

# slug do app → (enName no bundle oficial, [(slug da opção, nome oficial ou None)])
HEROES: dict[str, tuple[str, list[tuple[str, str | None]]]] = {
    "deadpool": ("DEADPOOL", [("hel-yeah-honey", None), ("gumbo-chimichangas", "GUMBO CHIMICHANGAS")]),
    "black-cat": ("BLACK CAT", [("feline-alliance", "FELINE ALLIANCE"), ("binding-ties", "BINDING TIES")]),
    "magneto": ("MAGNETO", [("metallic-chaos", "METALLIC CHAOS"), ("magnetic-resonance", "MAGNETIC RESONANCE")]),
    "spider-man": ("SPIDER-MAN", [("symbiote-bond", "SYMBIOTE BOND"), ("parker-power-up", "PARKER POWER-UP")]),
    "cloak-dagger": ("CLOAK&DAGGER", [("oblivion-shroud", "OBLIVION SHROUD"), ("frozen-haven", "FROZEN HAVEN")]),
    "magik": ("MAGIK", [("chain-of-cyttorak", "CHAIN OF CYTTORAK"), ("void-pentagram", "VOID PENTAGRAM")]),
    "daredevil": ("DAREDEVIL", [("comprehensive-defense", "COMPREHENSIVE DEFENSE"), ("devilish-affair", "DEVILISH AFFAIR")]),
    "elsa-bloodstone": ("ELSA BLOODSTONE", [("prehistoric-trap", "PREHISTORIC TRAP"), ("loudmouth-mercs", "LOUDMOUTH MERCS")]),
    "devil-dinosaur": ("DEVIL DINOSAUR", [("primal-punishment", "PRIMAL PUNISHMENT"), ("surf-and-turf", "SURF & TURF")]),
    "invisible-woman": ("INVISIBLE WOMAN", [("united-siblings", "UNITED SIBLINGS"), ("first-family", "FIRST FAMILY")]),
    "cyclops": ("CYCLOPS", [("slim-and-red", "SLIM AND RED"), ("kinetic-kin", "KINETIC KIN")]),
    "gorr": ("Gorr", [("ragnarok", "RAGNARÖK"), ("hive-mind", "HIVE MIND")]),
    "adam-warlock": ("ADAM WARLOCK", [("cosmic-cyclone", "COSMIC CYCLONE"), ("flawless-design", "FLAWLESS DESIGN")]),
    "black-panther": ("BLACK PANTHER", [("damisa-yao", "DAMISA-YAO"), ("dimensional-shortcut", "DIMENSIONAL SHORTCUT")]),
    "black-widow": ("BLACK WIDOW", [("allied-agents", "ALLIED AGENTS"), ("biting-bullet", "BURNING BULLETS")]),
    "angela": (
        "ANGELA",
        [
            ("asgardians-of-the-galaxy", "ASGARDIANS OF THE GALAXY"),
            ("odins-unacknowledged", "ODIN'S UNACKNOWLEDGED"),
        ],
    ),
    "blade": ("BLADE", [("blade-of-khonshu", "BLADE OF KHONSHU"), ("lunar-force", "BLEED FOR BATTLE")]),
    "captain-america": ("CAPTAIN AMERICA", [("stars-aligned", "STARS ALIGNED"), ("voltaic-union", "VOLTAIC UNION")]),
    "doctor-strange": ("DOCTOR STRANGE", [("gamma-maelstrom", "GAMMA MAELSTROM"), ("psionic-vortex", "PSIONIC VORTEX")]),
    "emma-frost": ("EMMA FROST", [("mind-link", "SPIRIT BREAKER"), ("hellfire-honor", "ICED OUT DIAMOND")]),
    "gambit": ("GAMBIT", [("favorable-odds", "FAVORABLE ODDS"), ("pair-of-threes", "SPARKLING STAFF")]),
    "groot": ("GROOT", [("wild-wall", "WILD WALL"), ("bubble-buddies", "BUBBLE BUDDIES")]),
    "hawkeye": ("HAWKEYE", [("senbonzakura-strike", "SENBONZAKURA STRIKE"), ("moonlit-slash", "MOONLIT SLASH")]),
    "hulk": ("HULK", [("savage-slam", "SAVAGE SLAM"), ("gamma-fastball", "GAMMA FASTBALL")]),
    "iron-fist": ("IRON FIST", [("iron-stone", "IRON & STONE"), ("kumiho-palm", "KUMIHO PALM")]),
    "human-torch": (
        "HUMAN TORCH",
        [("fiery-sparks", "FIERY SPARKS"), ("storming-ignition", "STORMING IGNITION")],
    ),
    "iron-man": (
        "IRON MAN",
        [("gamma-charge", "GAMMA CHARGE"), ("thunder-overdrive", "THUNDER OVERDRIVE")]),
    "hela": ("HELA", [("hel-tendrils", "Hel Tendrils"), ("deep-wrath", "DEEP WRATH")]),
    "jeff-the-land-shark": (
        "JEFFTHE LAND SHARK",
        [
            ("guardian-of-the-deep", "GUARDIAN OF THE DEEP"),
            ("mr-pools-interdimensional-toy-box", "MR. POOL'S INTERDIMENSIONAL TOY BOX"),
        ],
    ),
    "jubilee": ("Jubilation Lee", [("hellfire-sparks", "HELLFIRE SPARKS"), ("vampiric-kin", "VAMPIRIC KIN")]),
    "loki": ("LOKI", [("villains-illusion", "VILLAIN'S ILLUSION"), ("vibrant-vitality", "VIBRANT VITALITY")]),
    "luna-snow": ("LUNA SNOW", [("atlas-bond", "ATLAS BOND"), ("duality-dance", "DUALITY DANCE")]),
    "mantis": ("MANTIS", [("star-blossom", "STAR BLOSSOM"), ("vitality-pact", "VITALITY PACT")]),
    "mister-fantastic": (
        "MISTER FANTASTIC",
        [("fantastic-amplifier", "FANTASTIC AMPLIFIER"), ("clobberin-research-dept", "CLOBBERIN' RESEARCH DEPT.")],
    ),
    "moon-knight": (
        "MOON KNIGHT",
        [("luminous-moon", "LUMINOUS MOON"), ("blood-moon", "BLOOD MOON")],
    ),
    "namor": (
        "NAMOR",
        [("gamma-monstro", "GAMMA MONSTRO"), ("chilling-charisma", "CHILLING CHARISMA")],
    ),
    "peni-parker": (
        "PENI PARKER",
        [("vibranium-mech", "VIBRANIUM MECH"), ("rocket-network", "ROCKET NETWORK")],
    ),
    "phoenix": (
        "PHOENIX",
        [("circle-of-life", "CIRCLE OF LIFE"), ("telekinetic-beatdown", "TELEKINETIC BEATDOWN")],
    ),
    "psylocke": (
        "PSYLOCKE",
        [("mental-projection", "MENTAL PROJECTION"), ("light-and-dark-darts", "LIGHT & DARK DARTS")],
    ),
    "rocket-raccoon": (
        "ROCKET RACCOON",
        [("mammalian-bond", "MAMMALIAN BOND"), ("planet-x-pals", "PLANET X PALS")],
    ),
    "rogue": ("ROGUE", [("mr-mrs-x", "MR. & MRS. X"), ("explosive-entanglement", "EXPLOSIVE ENTANGLEMENT")]),
    "scarlet-witch": (
        "SCARLET WITCH",
        [("sorcerers-supreme", "SORCERERS SUPREME"), ("hex-fireworks", "HEX FIREWORKS")],
    ),
    "squirrel-girl": (
        "SQUIRREL GIRL",
        [("squirrel-missile", "SQUIRREL MISSILE"), ("esu-alumnus", "ESU ALUMNUS")],
    ),
    "star-lord": (
        "STAR-LORD",
        [("flora-munitions", "FLORA MUNITIONS"), ("star-soul", "STAR-SOUL")],
    ),
    "storm": (
        "STORM",
        [("gods-of-thunder", "GOD OF THUNDER"), ("jaws-of-fate", "JAWS OF FATE")],
    ),
    "the-hood": (
        "THE HOOD",
        [("chaos-collision", "CHAOS COLLISION"), ("no-moons-shadow", "NO MOON'S SHADOW")],
    ),
    "the-punisher": (
        "THE PUNISHER",
        [("bestial-hunt", "BESTIAL HUNT"), ("ammo-overload", "AMMO OVERLOAD")],
    ),
    "the-thing": (
        "THE THING",
        [("two-in-one", "TWO IN ONE"), ("unbreakable-forces", "UNBREAKABLE FORCES")],
    ),
    "thor": (
        "THOR",
        [("ragnarok-rebirth", "RAGNAROK REBIRTH"), ("divine-armory", "DIVINE ARMORY")],
    ),
    "ultron": (
        "ULTRON",
        [("stark-protocol", "STARK PROTOCOL"), ("spdr-sync", "SP//DR SYNC")],
    ),
    "venom": (
        "VENOM",
        [("blood-leech", "BLOOD LEECH"), ("abyssal-flames", "ABYSSAL FLAMES")],
    ),
    "white-fox": (
        "WHITE FOX",
        [("lucky-loan", "LUCKY LOAN"), ("psionic-fox", "PSIONIC FOX")],
    ),
    "wolverine": ("WOLVERINE", [("blast-slash", "BLAST SLASH"), ("pair-of-threes", "PAIR OF THREES")]),
    "winter-soldier": ("WINTER SOLDIER", [("timeless-veterans", "TIMELESS VETERANS"), ("expert-instinct", "EXPERT INSTINCT")]),
}


def fetch(url: str) -> bytes:
    request = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(request, timeout=40) as response:
        return response.read()


def fetch_text(url: str) -> str:
    return fetch(url).decode("utf-8", errors="replace")


def load_bundle() -> tuple[str, str]:
    """Retorna (texto do bundle, URL base dos assets)."""
    page = fetch_text(PAGE_URL)
    match = re.search(r'src="(https://[^"]*js/heroes/teamup_[0-9a-f]+\.js)"', page)
    if not match:
        raise SystemExit("Bundle teamup_*.js não encontrado na página oficial.")
    bundle = fetch_text(match.group(1))

    base = re.search(r'\.p\s*=\s*"([^"]*)"', bundle)
    if not base:
        raise SystemExit("Public path dos assets não encontrado no bundle.")
    return bundle, base.group(1)


def unescape(value: str) -> str:
    value = re.sub(r"\\u([0-9a-fA-F]{4})", lambda match: chr(int(match.group(1), 16)), value)
    value = re.sub(r"\\x([0-9a-fA-F]{2})", lambda match: chr(int(match.group(1), 16)), value)
    return re.sub(r"\\([\\\"'])", r"\1", value)


def _quoted_field(source: str, field: str) -> str | None:
    match = re.search(
        rf"""\b{re.escape(field)}\s*:\s*(['"])((?:\\.|(?!\1).)*)\1""",
        source,
        re.S,
    )
    return unescape(match.group(2)) if match else None


def parse_heroes(bundle: str) -> dict[str, list[dict]]:
    # The official bundle changed from numeric requires to named n.cw helpers.
    # Keep support for both formats so audits/downloads survive bundle rotations.
    # The official bundle has used both named helpers and two minifier shapes:
    # `n.cw(function(e,a){const t=n.p+"img/...";e.exports=t})` and
    # `n.cw(e=>{const a=n.p+"img/...";e.exports=a})`.
    helper_pattern = (
        r'([A-Za-z_$][\w$]*)=n\.cw\('
        r'(?:function\(e,a\)\{const t=n\.p\+|e=>\{const [A-Za-z_$][\w$]*=n\.p\+)'
        r'"(img/[^"]+)";e\.exports=(?:t|[A-Za-z_$][\w$]*)\}\)'
    )
    mods = dict(re.findall(helper_pattern, bundle))
    mods.update(re.findall(r'(\d+):\(e,n,a\)=>\{e\.exports=a\.p\+"(img/[^"]+)"\}', bundle))

    start = bundle.index("[{id:1,cnName:")
    parts = re.split(r"(?=\{id:\d+,cnName:)", bundle[start + 1 :])
    entries = [part for part in parts if part.startswith("{id:")]

    heroes: dict[str, list[dict]] = {}
    for entry in entries:
        en_name = re.search(r'enName:"([^"]*)"', entry)
        if not en_name:
            continue
        headers = []
        for header in re.finditer(
            r"\{headerImg:(?:([A-Za-z_$][\w$]*)\(\)|a\((\d+)\)),iconImg:(?:([A-Za-z_$][\w$]*)\(\)|a\((\d+)\))(.*?)\}(?=,\{headerImg:|\]\})",
            entry,
            re.S,
        ):
            body = header.group(0)
            name = _quoted_field(body, "xSkillName_en")
            key = _quoted_field(body, "Key_en")
            base_effect = _quoted_field(body, "baseEffect_en")
            enhanced_effect = _quoted_field(body, "enhancedEffect_en")
            partner = None
            if enhanced_effect:
                who = re.search(
                    r"\bteam(?:ing|s)? up(?:\s+with)?\s+([A-Z][A-Za-z0-9&'.\- ]*?)(?=[,.;])",
                    enhanced_effect,
                )
                if who:
                    partner = who.group(1).strip()
            headers.append(
                {
                    "name": name,
                    "key": key,
                    "base_effect": base_effect,
                    "enhanced_effect": enhanced_effect,
                    "partner_img": mods.get(header.group(1) or header.group(2)),
                    "icon": mods.get(header.group(3) or header.group(4)),
                    "declared_partner": partner,
                }
            )
        heroes[en_name.group(1)] = headers

    return heroes


EXPECTED_BUNDLE_HERO_COUNT = 54


def audit_partners(heroes: dict[str, list[dict]]) -> list[str]:
    """Detecta headerImg que não corresponde ao partner declarado no bundle.

    O `headerImg` traz o retrato do PARCEIRO, e a identidade do asset é o HASH no
    nome do arquivo (`h<heroIdx>-<skillIdx>_<hash>.png`) — o path muda conforme o
    herói, o conteúdo não.

    Um partner que teamed com mais de um herói tem arte própria em cada dupla, mas
    o mesmo par (partner, dupla) reaproveita o mesmo asset: se a Black Cat teamed
    com Black Panther e o bundle dá `97122a0a`, qualquer outro team-up que declare
    Black Panther tem de trazer `97122a0a` também.

    Auditoria por PERMUTAÇÃO (sem visão): para cada herói com 2 opções, testa o
    pareamento declarado e o pareamento invertido. Se o declarado não fecha em
    nenhuma das duas direções mas o invertido fecha, as imagens vieram trocadas.

    Pegou a Peni Parker em 01/10/2026, cujo bundle oficial entregou as duas
    opções com o retrato uma da outra.
    """
    def asset_key(path: str) -> str:
        # img/h26-1_a5f87c0d.png -> a5f87c0d  (identidade do conteúdo)
        return path.rsplit("_", 1)[-1].rsplit(".", 1)[0] if path else ""

    # partner -> assets declarados, POR HERÓI (para excluir o herói auditado)
    by_hero: dict[str, dict[str, str]] = defaultdict(dict)
    for hero_name, headers in heroes.items():
        for header in headers:
            key = asset_key(header.get("partner_img") or "")
            who = header.get("declared_partner")
            if key and who:
                by_hero[hero_name][who] = key

    def corroborated(hero_name: str, who: str, key: str) -> bool | None:
        """Outro herói declara `who` com o MESMO asset? None = impossível julgar."""
        others = {
            partner: asset
            for other_hero, partners in by_hero.items()
            if other_hero != hero_name
            for partner, asset in partners.items()
            if partner == who
        }
        if not others:
            return None
        return any(asset == key for asset in others.values())

    def ok(hero_name: str, pairing: list[tuple[str | None, str]]) -> bool:
        """True se todos os pares (partner, asset) fecham com outro herói."""
        for who, key in pairing:
            if not who or not key:
                return False
            if corroborated(hero_name, who, key) is not True:
                return False
        return True

    problems: list[str] = []
    if len(heroes) != EXPECTED_BUNDLE_HERO_COUNT:
        problems.append(
            f"BUNDLE_INCOMPLETE: parser encontrou {len(heroes)} heróis; "
            f"esperado {EXPECTED_BUNDLE_HERO_COUNT}."
        )
    incomplete = [
        f"{hero} ({len(headers)} opções)"
        for hero, headers in heroes.items()
        if len(headers) != 2
        or any(
            not header.get("icon")
            or not header.get("partner_img")
            or not header.get("declared_partner")
            for header in headers
        )
    ]
    if incomplete:
        problems.append(
            "BUNDLE_INCOMPLETE: assets/parceiros não resolvidos para "
            + ", ".join(incomplete)
        )
    for hero, headers in heroes.items():
        if len(headers) != 2:
            continue
        declared = [
            (h.get("declared_partner"), asset_key(h.get("partner_img") or "")) for h in headers
        ]
        if any(not w or not k for w, k in declared):
            continue
        if ok(hero, declared):
            continue
        swapped = [(declared[1][0], declared[0][1]), (declared[0][0], declared[1][1])]
        if ok(hero, swapped):
            detail = ", ".join(
                f"{headers[i]['name']}=>{declared[i][0]} (recebeu {declared[1 - i][1]})"
                for i in range(2)
            )
            problems.append(
                f"{hero}: as DUAS opções de partner vieram trocadas no bundle — {detail}"
            )
    return problems


def audit_local_partner_assets(
    heroes: dict[str, list[dict]],
    base_url: str,
    swapped_heroes: set[str],
    *,
    out_dir: Path = OUT_DIR,
    hero_config: dict[str, tuple[str, list[tuple[str, str | None]]]] = HEROES,
    fetcher=fetch,
) -> list[str]:
    """Confere que PNGs locais compensam as inversões detectadas no bundle.

    Para um herói cuja dupla de `headerImg` está invertida, o PNG local de cada
    opção deve corresponder ao asset da outra opção no bundle. O bundle remoto e
    os arquivos publicados são fontes distintas; um aviso remoto, sozinho, não
    reprova os assets locais.
    """
    problems: list[str] = []
    bundle_names = {name.casefold(): name for name in heroes}
    inverted = {name.casefold() for name in swapped_heroes}

    # Confere todo o manifesto, não só as inversões visíveis neste bundle: se um
    # bundle deixa de inverter um par, um swap local antigo também precisa ser detectado.
    for slug, (expected_name, options) in hero_config.items():
        bundle_name = bundle_names.get(expected_name.casefold())
        if not bundle_name:
            problems.append(f"{slug}: herói {expected_name!r} ausente no bundle atual.")
            continue
        headers = heroes.get(bundle_name, [])
        if len(headers) != 2 or len(options) != 2:
            problems.append(
                f"{slug}: bundle e manifesto precisam ter duas opções para validar os PNGs locais."
            )
            continue

        is_inverted = expected_name.casefold() in inverted
        for index, (option_slug, official_name) in enumerate(options):
            current = headers[index]
            if official_name and (current.get("name") or "").casefold() != official_name.casefold():
                problems.append(
                    f"{slug}/{option_slug}: nome no bundle {current.get('name')!r} diverge do manifesto {official_name!r}."
                )
            expected_index = 1 - index if is_inverted else index
            expected_asset = headers[expected_index].get("partner_img")
            local_path = out_dir / f"{slug}-{option_slug}-partner.png"
            if not expected_asset:
                problems.append(f"{slug}/{option_slug}: asset remoto da opção parceira ausente.")
                continue
            try:
                local_bytes = local_path.read_bytes()
            except OSError:
                problems.append(f"{slug}/{option_slug}: PNG local ausente ou ilegível ({local_path.name}).")
                continue
            try:
                expected_bytes = fetcher(f"{base_url}{expected_asset}")
            except OSError as exc:
                problems.append(f"{slug}/{option_slug}: não foi possível obter asset remoto: {exc}.")
                continue
            if not local_bytes.startswith(b"\x89PNG"):
                problems.append(f"{slug}/{option_slug}: arquivo local não é PNG válido ({local_path.name}).")
                continue
            if not expected_bytes.startswith(b"\x89PNG"):
                problems.append(f"{slug}/{option_slug}: asset remoto não é PNG válido ({expected_asset}).")
                continue
            if local_bytes != expected_bytes:
                pairing = "opção oposta" if is_inverted else "mesma opção"
                problems.append(
                    f"{slug}/{option_slug}: PNG local diverge do asset da {pairing} do bundle atual."
                )

    return problems


def download(base_url: str, path: str, dest: Path) -> None:
    url = f"{base_url}{path}"
    data = fetch(url)
    if not data.startswith(b"\x89PNG"):
        raise SystemExit(f"Asset não é PNG: {url}")
    dest.write_bytes(data)


def main() -> None:
    parser = argparse.ArgumentParser(description="Baixa ícones e retratos oficiais de Team-Up.")
    parser.add_argument("--only", nargs="*", metavar="SLUG", help="Baixa apenas estes heróis.")
    parser.add_argument("--force", action="store_true", help="Sobrescreve arquivos existentes.")
    parser.add_argument(
        "--audit-partners",
        action="store_true",
        help="Audita o bundle remoto e valida os PNGs locais (rc=1 se inconclusivo ou asset local divergente).",
    )
    args = parser.parse_args()

    bundle, base_url = load_bundle()
    heroes = parse_heroes(bundle)

    problems = audit_partners(heroes)
    incomplete_problems: list[str] = []
    swap_problems: list[str] = []
    if problems:
        incomplete_problems = [p for p in problems if p.startswith("BUNDLE_INCOMPLETE:")]
        swap_problems = [p for p in problems if not p.startswith("BUNDLE_INCOMPLETE:")]
        if incomplete_problems:
            print("[!] Auditoria de Team-Up inconclusiva: bundle/parser incompleto:")
            for problem in incomplete_problems:
                print(f"    - {problem.removeprefix('BUNDLE_INCOMPLETE: ')}")
            print("    Corrija o parser/extração antes de confiar no resultado; não troque assets por suposição.")
        if swap_problems:
            print("[!] Retrato de parceiro possivelmente TROCADO no bundle oficial:")
            for problem in swap_problems:
                print(f"    - {problem}")
            print("    O aviso é do bundle remoto; a checagem byte a byte dos PNGs locais decide o resultado.")
    elif not problems:
        print("ok: nenhum headerImg cruzado com o partner declarado.")

    if args.audit_partners:
        swapped_heroes = {problem.split(":", 1)[0] for problem in swap_problems}
        local_problems = audit_local_partner_assets(heroes, base_url, swapped_heroes)
        if local_problems:
            print("[!] PNGs locais de Team-Up não passaram na verificação:")
            for problem in local_problems:
                print(f"    - {problem}")
        else:
            print(
                f"[OK] {len(HEROES) * 2} PNGs locais de parceiro conferem byte a byte com o bundle atual "
                f"({len(swapped_heroes)} inversões remotas compensadas)."
            )
        raise SystemExit(1 if incomplete_problems or local_problems else 0)

    targets = {slug: HEROES[slug] for slug in args.only} if args.only else HEROES
    unknown = set(targets) - set(HEROES)
    if unknown:
        raise SystemExit(f"Slug(s) desconhecido(s): {', '.join(sorted(unknown))}")

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    downloaded = skipped = 0
    for slug, (en_name, options) in targets.items():
        headers = heroes.get(en_name)
        if not headers:
            print(f"[!] {slug}: herói '{en_name}' não encontrado no bundle oficial.")
            continue
        if len(headers) < len(options):
            print(f"[!] {slug}: bundle trouxe {len(headers)} Team-Ups, esperado {len(options)}.")

        for index, (option_slug, official_name) in enumerate(options):
            if index >= len(headers):
                continue
            header = headers[index]
            if official_name and header["name"] and header["name"].upper() != official_name.upper():
                print(
                    f"[!] {slug}/{option_slug}: nome oficial mudou "
                    f"('{header['name']}' != '{official_name}') — confira o .ts do herói."
                )
            if not header["icon"] or not header["partner_img"]:
                print(f"[!] {slug}/{option_slug}: imagens ausentes no bundle.")
                continue

            for kind, asset in (("icon", header["icon"]), ("partner", header["partner_img"])):
                dest = OUT_DIR / f"{slug}-{option_slug}-{kind}.png"
                if dest.exists() and not args.force:
                    skipped += 1
                    continue
                download(base_url, asset, dest)
                downloaded += 1
                print(f"  ok  {dest.relative_to(ROOT)}")

    print(f"\n{downloaded} arquivo(s) baixado(s), {skipped} já existente(s) em {OUT_DIR.relative_to(ROOT)}.")


if __name__ == "__main__":
    main()
