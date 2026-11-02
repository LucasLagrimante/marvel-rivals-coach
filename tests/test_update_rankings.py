from __future__ import annotations

import contextlib
import io
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))

import update_rankings as rankings


class UpdateRankingsOutputPathTests(unittest.TestCase):
    def test_external_output_path_does_not_fail_after_writing(self) -> None:
        categories = [
            {"role": role, "entries": [{"name": role.title(), "rating": 50, "tier": "B", "rank": 1}]}
            for role in rankings.ROLE_ORDER
        ]
        with tempfile.TemporaryDirectory() as temporary_directory:
            output = Path(temporary_directory) / "rankings.generated.ts"
            argv = ["update_rankings.py", "--output", str(output)]
            with (
                patch.object(sys, "argv", argv),
                patch.object(rankings, "fetch_html", return_value="fixture html"),
                patch.object(rankings, "extract_page_payload", return_value="fixture payload"),
                patch.object(rankings, "extract_hero_rows", return_value=[{"heroId": 1}]),
                patch.object(rankings, "extract_meta", return_value={
                    "season": "Season 10",
                    "scope": "Standard, todos os ranks",
                    "updatedAt": "2026-11-01",
                }),
                patch.object(rankings, "load_app_heroes", return_value=[]),
                patch.object(rankings, "build_categories", return_value=categories),
                patch.object(rankings, "render_ts", return_value="// generated\n"),
                patch.object(rankings, "audit_roles_against_guides", return_value=[]),
                contextlib.redirect_stdout(io.StringIO()),
            ):
                result = rankings.main()

            self.assertEqual(result, 0)
            self.assertEqual(output.read_text(encoding="utf-8"), "// generated\n")


if __name__ == "__main__":
    unittest.main()
