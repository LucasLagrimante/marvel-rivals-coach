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
    "captain-america": ("CAPTAIN AMERICA", [("savage-slam", "STARS ALIGNED"), ("voltaic-union", "VOLTAIC UNION")]),
    "doctor-strange": ("DOCTOR STRANGE", [("gamma-maelstrom", "GAMMA MAELSTROM"), ("psionic-vortex", "PSIONIC VORTEX")]),
    "emma-frost": ("EMMA FROST", [("mind-link", "SPIRIT BREAKER"), ("hellfire-honor", "ICED OUT DIAMOND")]),
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
            headers.append(
                {
                    "name": unescape(name.group(1)) if name else None,
                    "partner": mods.get(header.group(1)),
                    "icon": mods.get(header.group(2)),
                }
            )
        heroes[en_name.group(1)] = headers

    return heroes


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
    args = parser.parse_args()

    targets = {slug: HEROES[slug] for slug in args.only} if args.only else HEROES
    unknown = set(targets) - set(HEROES)
    if unknown:
        raise SystemExit(f"Slug(s) desconhecido(s): {', '.join(sorted(unknown))}")

    bundle, base_url = load_bundle()
    heroes = parse_heroes(bundle)
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
            if not header["icon"] or not header["partner"]:
                print(f"[!] {slug}/{option_slug}: imagens ausentes no bundle.")
                continue

            for kind, asset in (("icon", header["icon"]), ("partner", header["partner"])):
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
