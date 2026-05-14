"""
Download Marvel Rivals avatar assets from the Fandom wiki.

The wiki exposes standard table icons as `<Hero> DEFAULT Table Icon.png` and
animated Champion icons as `Champion Icon ... Animated.gif`. This script keeps
the original files for app UI use instead of cropping them like the analyzer
templates.

Examples:
  python scripts/download_fandom_avatars.py --only deadpool black_cat magneto
  python scripts/download_fandom_avatars.py --kind table --only deadpool
  python scripts/download_fandom_avatars.py --kind champion --force
"""

from __future__ import annotations

import argparse
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Callable, Iterable

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "heroes" / "select"
FANDOM_API = "https://marvelrivals.fandom.com/api.php"
UA = "MarvelRivalsCoach/1.0"
DISPLAY_NAME_OVERRIDES = {
    "spider_man": "Spider-Man",
}


def api_get(params: dict[str, str]) -> dict:
    url = f"{FANDOM_API}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=25) as response:
        return json.loads(response.read())


def base_slug(name: str) -> str:
    name = urllib.parse.unquote(name)
    name = name.replace("&", "and").replace("%26", "and")
    name = re.sub(r"[^a-zA-Z0-9]+", "_", name)
    return name.strip("_").lower()


def strip_file_title(title: str) -> str:
    name = re.sub(r"^File:", "", title).strip()
    return re.sub(r"\.(png|webp|gif)$", "", name, flags=re.IGNORECASE)


def hero_slug(title: str) -> str:
    name = strip_file_title(title)
    name = re.sub(r"^Hero[_ ]Icon[_ ]", "", name, flags=re.IGNORECASE).strip()
    return base_slug(name)


def table_slug(title: str) -> str:
    name = strip_file_title(title)
    name = re.sub(r"[_ ]DEFAULT[_ ]Table[_ ]Icon$", "", name, flags=re.IGNORECASE).strip()
    name = re.sub(r"[_ ]Table[_ ]Icon$", "", name, flags=re.IGNORECASE).strip()
    return base_slug(name)


def champion_slug(title: str) -> str:
    name = strip_file_title(title)
    name = re.sub(r"^Champion[_ ]Icon[_ ]", "", name, flags=re.IGNORECASE).strip()
    name = re.sub(r"[_ ]Animated$", "", name, flags=re.IGNORECASE).strip()
    return f"{base_slug(name)}_champion"


def discover_by_prefix(prefix: str) -> list[dict]:
    results: list[dict] = []
    cursor: str | None = None

    while True:
        params = {
            "action": "query",
            "list": "allimages",
            "aiprefix": prefix,
            "ailimit": "100",
            "aiprop": "url|title|mime|size",
            "format": "json",
        }
        if cursor:
            params["aicontinue"] = cursor

        data = api_get(params)
        results.extend(data.get("query", {}).get("allimages", []))
        cursor = data.get("continue", {}).get("aicontinue")

        if not cursor:
            return results

        time.sleep(0.2)


def wanted_base(slug: str) -> str:
    return re.sub(r"_champion$", "", slug)


def display_name_from_slug(slug: str) -> str:
    if slug in DISPLAY_NAME_OVERRIDES:
        return DISPLAY_NAME_OVERRIDES[slug]
    return " ".join(part.capitalize() for part in slug.split("_"))


def download_assets(
    label: str,
    prefix: str,
    slugger: Callable[[str], str],
    suffix: str,
    only: set[str] | None,
    force: bool,
) -> tuple[int, int, int]:
    ok = skipped = failed = 0
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Discovering {label} ({prefix}*)...")
    for item in discover_by_prefix(prefix):
        title = item.get("title", "")
        source_url = item.get("url", "")
        if not title or not source_url:
            continue

        slug = slugger(title)
        if only and wanted_base(slug) not in only:
            continue

        out_path = OUT_DIR / f"{slug}.{suffix}"
        if out_path.exists() and not force:
            skipped += 1
            continue

        print(f"  downloading {slug} -> {out_path.relative_to(ROOT)}")
        try:
            req = urllib.request.Request(source_url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=35) as response:
                out_path.write_bytes(response.read())
            ok += 1
        except Exception as exc:
            failed += 1
            print(f"  failed {slug}: {exc}")

        time.sleep(0.2)

    return ok, skipped, failed


def download_table_icons(only: set[str] | None, force: bool) -> tuple[int, int, int]:
    if not only:
        print("Skipping table icons: pass --only so the script does not scan/download the full roster.")
        return 0, 0, 0

    ok = skipped = failed = 0
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print("Discovering table icons (<Hero> DEFAULT Table Icon.png)...")

    for hero in sorted(only):
        prefix = f"{display_name_from_slug(hero)}_DEFAULT_Table_Icon"
        matches = discover_by_prefix(prefix)
        if not matches:
            prefix = f"{display_name_from_slug(hero)} DEFAULT Table Icon"
            matches = discover_by_prefix(prefix)

        table_icon = next(
            (
                item
                for item in matches
                if item.get("title", "").lower().endswith("default table icon.png")
                and item.get("mime") == "image/png"
            ),
            None,
        )

        if not table_icon:
            failed += 1
            print(f"  missing table icon for {hero}")
            continue

        slug = table_slug(table_icon["title"])
        out_path = OUT_DIR / f"{slug}.png"
        if out_path.exists() and not force:
            skipped += 1
            continue

        print(f"  downloading {slug} -> {out_path.relative_to(ROOT)}")
        try:
            req = urllib.request.Request(table_icon["url"], headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=35) as response:
                out_path.write_bytes(response.read())
            ok += 1
        except Exception as exc:
            failed += 1
            print(f"  failed {slug}: {exc}")

        time.sleep(0.2)

    return ok, skipped, failed


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--kind",
        choices=["all", "hero", "table", "champion"],
        default="all",
        help="Asset family to download.",
    )
    parser.add_argument(
        "--only",
        nargs="*",
        help="Optional hero slugs, for example: deadpool black_cat magneto.",
    )
    parser.add_argument("--force", action="store_true", help="Overwrite existing files.")
    return parser.parse_args()


def normalize_only(values: Iterable[str] | None) -> set[str] | None:
    if not values:
        return None
    return {base_slug(value) for value in values}


def main() -> None:
    args = parse_args()
    only = normalize_only(args.only)
    total_ok = total_skipped = total_failed = 0

    jobs = []
    if args.kind in ("all", "hero"):
        jobs.append(("hero icons", "Hero_Icon_", hero_slug, "png"))
    if args.kind in ("all", "table"):
        ok, skipped, failed = download_table_icons(only, args.force)
        total_ok += ok
        total_skipped += skipped
        total_failed += failed
    if args.kind in ("all", "champion"):
        jobs.append(("champion animated icons", "Champion_Icon_", champion_slug, "gif"))

    for label, prefix, slugger, suffix in jobs:
        ok, skipped, failed = download_assets(label, prefix, slugger, suffix, only, args.force)
        total_ok += ok
        total_skipped += skipped
        total_failed += failed

    print(f"Done: {total_ok} downloaded | {total_skipped} skipped | {total_failed} failed")


if __name__ == "__main__":
    main()
