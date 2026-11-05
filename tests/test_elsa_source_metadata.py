from __future__ import annotations

import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ELSA_SOURCE = ROOT / "src" / "data" / "heroes" / "elsa-bloodstone.ts"


class ElsaSourceMetadataTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.source = ELSA_SOURCE.read_text(encoding="utf-8")

    def test_march_26_official_patch_is_in_evidence_and_supports_health(self) -> None:
        self.assertTrue(
            "id: 'official-elsa-balance-20260326'" in self.source,
            "March 26 official Elsa balance source is missing",
        )
        start = self.source.index("id: 'official-elsa-balance-20260326'")
        end = self.source.index("\n    },", start)
        record = self.source[start:end]

        self.assertIn("published: '2026-03-26'", record)
        self.assertIn("Reduziu a vida base de 275 para 250", record)
        evidence_start = self.source.index("evidence: [")
        evidence_end = self.source.index("]", evidence_start)
        self.assertIn("official-elsa-balance-20260326", self.source[evidence_start:evidence_end])

    def test_official_coverage_count_includes_the_march_26_patch(self) -> None:
        start = self.source.index("sourceCoverage:")
        official = self.source.index("kind: 'official'", start)
        end = self.source.index("\n    },", official)
        self.assertIn("count: 8", self.source[official:end])


if __name__ == "__main__":
    unittest.main()
