from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
HERO_FILE = ROOT / "src" / "data" / "heroes" / "spider-man.ts"
FIT_PATTERN = re.compile(
    r"selectionHoverFit:\s*\{\s*scale:\s*([0-9.]+)\s*,\s*x:\s*(-?[0-9.]+)\s*,\s*y:\s*(-?[0-9.]+)\s*\}"
)


class SpiderManHoverFitTests(unittest.TestCase):
    def test_selection_hover_fit_stays_within_tile_bounds(self):
        source = HERO_FILE.read_text(encoding="utf-8")
        match = FIT_PATTERN.search(source)
        self.assertIsNotNone(match, "Spider-Man must declare a calibrated selectionHoverFit")
        scale, x, y = map(float, match.groups())
        limit = 50 * (scale - 1)
        self.assertLessEqual(abs(x), limit, f"horizontal shift {x}% exceeds tile-fit limit {limit}%")
        self.assertLessEqual(abs(y), limit, f"vertical shift {y}% exceeds tile-fit limit {limit}%")


if __name__ == "__main__":
    unittest.main()
