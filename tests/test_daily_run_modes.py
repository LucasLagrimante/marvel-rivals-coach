from pathlib import Path
import unittest


SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "daily_run.sh"


class DailyRunModeTests(unittest.TestCase):
    def test_incremental_mode_skips_only_the_expensive_full_audits(self):
        text = SCRIPT.read_text(encoding="utf-8")
        self.assertIn("--incremental) INCREMENTAL=1; SKIP_RADAR=1; SKIP_TEAMUP_AUDIT=1 ;;", text)
        self.assertIn('if [ "$SKIP_TEAMUP_AUDIT" -eq 0 ]; then', text)
        self.assertIn('if [ "$SKIP_RADAR" -eq 0 ]; then', text)
        self.assertIn('run_step "tests" python3 -m unittest discover -s tests -q', text)
        self.assertIn('run_step "eslint" npx eslint src', text)
        self.assertIn('run_step "build" npm run build', text)


if __name__ == "__main__":
    unittest.main()
