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


class UpdateRankingsMetadataTests(unittest.TestCase):
    def test_current_decimal_season_overrides_integer_page_title(self) -> None:
        html = '<title>Tier List · Season 10 (2026)</title><p>Updated Nov 5, 2026. In Season 10.5, Peni Parker leads.</p>'
        self.assertEqual(rankings.extract_meta(html)['season'], 'Season 10.5')

    def test_updated_date_accepts_capitalized_source_label(self) -> None:
        html = '<p>Updated Nov 5, 2026.</p>'
        self.assertEqual(rankings.extract_meta(html)['updatedAt'], '2026-11-05')


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

    def test_without_fetched_at_ignores_only_collection_stamp(self) -> None:
        a = 'export const x = {\n  updatedAt: \'2026-11-11\',\n  fetchedAt: \'2026-11-11T20:02:54Z\',\n  value: 1,\n}'
        b = a.replace('20:02:54Z', '20:06:58Z')
        c = a.replace('value: 1', 'value: 2')
        self.assertEqual(rankings.without_fetched_at(a), rankings.without_fetched_at(b))
        self.assertNotEqual(rankings.without_fetched_at(a), rankings.without_fetched_at(c))


if __name__ == "__main__":
    unittest.main()
