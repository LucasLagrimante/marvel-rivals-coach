from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
MAGIK = ROOT / 'src' / 'data' / 'heroes' / 'magik.ts'


class MagikDarkchildClaimTests(unittest.TestCase):
    def test_visible_guide_does_not_assert_unconfirmed_cooldown_reset(self):
        source = MAGIK.read_text(encoding='utf-8')
        visible_copy = source.split('  sources: [', 1)[0]
        self.assertNotIn('cooldowns restaurados na transformação', visible_copy)
        self.assertNotIn('receber os cooldowns de volta', visible_copy)
        self.assertNotIn('dois ciclos de cooldown', visible_copy)
        self.assertNotIn('cooldown duplo', visible_copy)
        self.assertIn('não o confirma', visible_copy)
        mobalytics = source.split("id: 'mobalytics-magik'", 1)[1].split("id: 'marvelrivalsgg-magik'", 1)[0]
        self.assertIn("confidence: 'em disputa'", mobalytics)
        self.assertIn('não confirma esse reset', mobalytics)


if __name__ == '__main__':
    unittest.main()
