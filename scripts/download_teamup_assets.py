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
    return re.sub(r"\\x([0-9a-fA-F]{2})", lambda match: chr(int(match.group(1), 16)), value)


def parse_heroes(bundle: str) -> dict[str, list[dict]]:
    mods = dict(re.findall(r'(\d+):\(e,n,a\)=>\{e\.exports=a\.p\+"(img/[^"]+)"\}', bundle))

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
            r"\{headerImg:a\((\d+)\),iconImg:a\((\d+)\)(.*?)\}(?=,\{headerImg:|\]\})",
            entry,
            re.S,
        ):
            body = header.group(0)
            name = re.search(r'xSkillName_en:"([^"]*)"', body)
            enhanced = re.search(r'enhancedEffect_en:"([^"]*)"', body)
            partner = None
            if enhanced:
                who = re.search(r"[Tt]eaming up with ([A-Za-z0-9&'\.\- ]+?),", enhanced.group(1))
                if who:
                    partner = who.group(1).strip()
            headers.append(
                {
                    "name": unescape(name.group(1)) if name else None,
                    "partner_img": mods.get(header.group(1)),
                    "icon": mods.get(header.group(2)),
                    "declared_partner": partner,
                }
            )
        heroes[en_name.group(1)] = headers

    return heroes


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
        help="Só audita: detecta retrato de parceiro trocado no bundle oficial (rc=1 se achar).",
    )
    args = parser.parse_args()

    bundle, base_url = load_bundle()
    heroes = parse_heroes(bundle)

    problems = audit_partners(heroes)
    if problems:
        print("[!] Retrato de parceiro possivelmente TROCADO no bundle oficial:")
        for problem in problems:
            print(f"    - {problem}")
        print("    O headerImg de uma opção é o retrato da OUTRA. Confira o .ts e")
        print("    troque os arquivos -partner.png entre as opções.")
    else:
        print("ok: nenhum headerImg cruzado com o partner declarado.")

    if args.audit_partners:
        raise SystemExit(1 if problems else 0)

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
