from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
DOCK_SOURCE = ROOT / "src" / "components" / "guide" / "EvidenceDock.tsx"
NAV_SOURCE = ROOT / "src" / "components" / "guide" / "GuideSectionNav.tsx"


class EvidenceDockAccessTests(unittest.TestCase):
    def test_fixed_closed_state_trigger_is_not_rendered_over_guide_content(self):
        source = DOCK_SOURCE.read_text(encoding="utf-8")
        self.assertNotIn(
            'className="evidence-toggle"',
            source,
            "The fixed floating trigger overlaps guide copy; use the sticky Fontes nav control.",
        )

    def test_sticky_guide_nav_keeps_the_fontes_panel_trigger(self):
        source = NAV_SOURCE.read_text(encoding="utf-8")
        self.assertIn("onClick={onOpenEvidence}", source)
        self.assertIn("Fontes", source)
        self.assertIn("aria-expanded={evidenceOpen}", source)


if __name__ == "__main__":
    unittest.main()
