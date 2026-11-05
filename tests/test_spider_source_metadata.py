from __future__ import annotations

import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SPIDER_SOURCE = ROOT / "src" / "data" / "heroes" / "spider-man.ts"


class SpiderManSourceMetadataTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.source = SPIDER_SOURCE.read_text(encoding="utf-8")

    def test_january_balance_record_uses_the_article_date(self) -> None:
        start = self.source.index("id: 'official-spider-man-s6'")
        end = self.source.index("\n    },", start)
        record = self.source[start:end]

        self.assertIn("published: '2026-01-13'", record)
        self.assertIn("Version 20260116", record)

    def test_official_coverage_explains_the_january_version_date(self) -> None:
        self.assertIn(
            "Version 20260116, datado em 2026-01-13",
            self.source,
        )
        self.assertNotIn("balance posts de 2026-01-15", self.source)


if __name__ == "__main__":
    unittest.main()
