from __future__ import annotations

import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KEYS = ROOT / "src" / "components" / "ui" / "keys.tsx"
NIGHTCRAWLER = ROOT / "src" / "data" / "heroes" / "nightcrawler.ts"

TOKEN = re.compile(r"\[key:[^\]]+\]")
BARE_KEY_REF = re.compile(r"\b(?:o|a|os|as|tecla|botão)\s+(?:E|F|C|Q)\b|\((?:E|F|C|Q)\)")


class ControlKeyRenderingTests(unittest.TestCase):
    def test_renderer_covers_legacy_prose_keys(self) -> None:
        source = KEYS.read_text(encoding="utf-8")
        for fragment in ("\\((E|F|C|Q)\\)", "tecla ([EFCQ])", "(LMB|RMB|Shift|Melee)"):
            self.assertIn(fragment, source, f"padrão ausente no renderer: {fragment}")
        self.assertIn("[key:", source)

    def test_nightcrawler_uses_key_tokens_in_prose(self) -> None:
        offending = []
        for index, line in enumerate(NIGHTCRAWLER.read_text(encoding="utf-8").splitlines(), start=1):
            if "input:" in line or "http" in line:
                continue
            if BARE_KEY_REF.search(TOKEN.sub("", line)):
                offending.append((index, line.strip()[:110]))
        self.assertEqual(offending, [], f"tecla sem token em prosa: {offending[:3]}")


if __name__ == "__main__":
    unittest.main()
