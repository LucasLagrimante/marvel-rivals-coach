from __future__ import annotations

import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))

from daily_validators import parse_rankings_ts


RANKINGS_TS = """
export const rankings = {
  updatedAt: '2026-10-28',
  fetchedAt: '2026-10-28T13:49:26Z',
  categories: [
    {
      role: 'vanguard',
      entries: [
        { rank: 1, slug: 'peni-parker', name: 'Peni Parker', gameName: 'Peni Parker', tier: 'S', rating: 83, winRate: 58.3, pickRate: 8.1, matches: 44393, guideId: 'peni-parker', portraitUrl: publicAsset('heroes/select/peni.png') },
        { rank: 2, slug: 'devil-dinosaur', name: 'Devil Dinosaur', gameName: 'Devil Dinosaur', tier: 'S', rating: 63, winRate: 53.4, pickRate: 16.5, matches: 90576, guideId: 'devil-dinosaur', portraitUrl: publicAsset('heroes/select/devil.png') },
      ],
    },
    {
      role: 'duelist',
      entries: [
        { rank: 1, slug: 'storm', name: 'Storm', gameName: 'Storm', tier: 'S', rating: 75, winRate: 56.5, pickRate: 3.0, matches: 16589, guideId: 'storm', portraitUrl: publicAsset('heroes/select/storm.png') },
      ],
    },
    {
      role: 'strategist',
      entries: [
        { rank: 1, slug: 'ultron', name: 'Ultron', gameName: 'Ultron', tier: 'S', rating: 80, winRate: 57.5, pickRate: 6.6, matches: 35937, guideId: 'ultron', portraitUrl: publicAsset('heroes/select/ultron.png') },
      ],
    },
  ],
}
"""


class ParseRankingsTsTests(unittest.TestCase):
    def test_parses_generated_categories_with_trailing_commas(self) -> None:
        categories = parse_rankings_ts(RANKINGS_TS)

        self.assertEqual([category["role"] for category in categories], ["vanguard", "duelist", "strategist"])
        self.assertEqual([entry["slug"] for entry in categories[0]["entries"]], ["peni-parker", "devil-dinosaur"])
        self.assertEqual(categories[0]["entries"][1]["rank"], 2)
        self.assertEqual(categories[0]["entries"][1]["guideId"], "devil-dinosaur")


class ValidateRankingsCategoriesTests(unittest.TestCase):
    def test_exige_contagem_de_roster_e_vinculo_local(self) -> None:
        from daily_validators import EXPECTED_ROLES, validate_rankings_categories

        entry = {
            "rank": 1,
            "slug": "hero",
            "name": "Hero",
            "gameName": "Hero",
            "tier": "S",
            "rating": 50,
            "winRate": 50,
            "pickRate": 10,
            "matches": 1,
            "guideId": None,
            "portraitUrl": "https://example.com/hero.png",
        }
        categories = [
            {"role": role, "entries": [entry] if role == "vanguard" else []}
            for role in EXPECTED_ROLES
        ]

        problems = validate_rankings_categories(categories, Path("/unused"))

        self.assertTrue(any("esperados 15 herois" in problem for problem in problems), problems)
        self.assertTrue(any("guideId ausente" in problem for problem in problems), problems)

    def test_rejeita_rating_fora_da_faixa(self) -> None:
        from daily_validators import validate_rankings_categories

        entry = {
            "rank": 1,
            "slug": "hero",
            "name": "Hero",
            "gameName": "Hero",
            "tier": "S",
            "rating": 101,
            "winRate": 50,
            "pickRate": 10,
            "matches": 1,
            "guideId": None,
            "portraitUrl": "https://example.com/hero.png",
        }
        categories = [
            {"role": "vanguard", "entries": [entry]},
            {"role": "duelist", "entries": []},
            {"role": "strategist", "entries": []},
        ]

        problems = validate_rankings_categories(categories, Path("/unused"))

        self.assertTrue(any("rating fora de 0–100" in problem for problem in problems), problems)


class CompareRankingsTests(unittest.TestCase):
    def test_rejeita_slug_duplicado_que_sobrescreveria_entrada_no_delta(self) -> None:
        from daily_validators import RankingsParseError, compare_rankings

        duplicate = [{"role": "vanguard", "entries": [
            {"slug": "hero", "rank": 1},
            {"slug": "hero", "rank": 2},
        ]}]

        with self.assertRaisesRegex(RankingsParseError, "entrada duplicada"):
            compare_rankings(duplicate, duplicate)

    def test_identifica_movimento_e_metricas_sem_confundir_heroes_por_role(self) -> None:
        from daily_validators import compare_rankings

        before = [
            {"role": "vanguard", "entries": [
                {"slug": "peni-parker", "name": "Peni Parker", "rank": 1, "tier": "S", "rating": 83, "winRate": 58.3, "pickRate": 8.1, "matches": 44393},
            ]},
        ]
        after = [
            {"role": "vanguard", "entries": [
                {"slug": "peni-parker", "name": "Peni Parker", "rank": 2, "tier": "S", "rating": 83, "winRate": 58.0, "pickRate": 8.4, "matches": 45000},
            ]},
        ]

        changes = compare_rankings(before, after)

        self.assertEqual(changes, [{
            "role": "vanguard",
            "slug": "peni-parker",
            "name": "Peni Parker",
            "kind": "changed",
            "fields": {
                "rank": [1, 2],
                "winRate": [58.3, 58.0],
                "pickRate": [8.1, 8.4],
                "matches": [44393, 45000],
            },
        }])


class ParseOfficialRosterTests(unittest.TestCase):
    def test_ler_lista_oculta_completa_e_ignorar_heroi_selecionado(self) -> None:
        from daily_validators import parse_official_roster

        html = """
        <main><h1>Adam Warlock</h1>
          <div class="heroesNewsLists" style="display:none">
            <div class="heroNewsList"><a data-name="Deadpool" data-tag="VANGUARD DUELIST STRATEGIST"></a></div>
            <div class="heroNewsList"><a data-name="Gorr the God Butcher" data-tag="DUELIST"></a></div>
            <div class="heroNewsList"><a data-name="The Hood" data-tag="VANGUARD"></a></div>
          </div>
        </main>
        """

        roster = parse_official_roster(html)

        self.assertEqual(roster, [
            {"name": "Deadpool", "roles": ["vanguard", "duelist", "strategist"]},
            {"name": "Gorr the God Butcher", "roles": ["duelist"]},
            {"name": "The Hood", "roles": ["vanguard"]},
        ])

    def test_falha_com_erro_explicito_quando_lista_oficial_nao_existe(self) -> None:
        from daily_validators import RosterParseError, parse_official_roster

        with self.assertRaisesRegex(RosterParseError, "heroesNewsLists"):
            parse_official_roster("<main><h1>Adam Warlock</h1></main>")


    def test_rejeita_ancora_de_heroi_sem_data_name_e_data_tag(self) -> None:
        from daily_validators import RosterParseError, parse_official_roster

        html = '<div class="heroesNewsLists"><a href="/heroes/gorr"></a></div>'

        with self.assertRaisesRegex(RosterParseError, "entrada oficial incompleta"):
            parse_official_roster(html)


class AuditOfficialRosterTests(unittest.TestCase):
    def test_compara_nomes_e_roles_com_os_guias_locais(self) -> None:
        from tempfile import TemporaryDirectory
        from daily_validators import audit_official_roster

        with TemporaryDirectory() as temporary_directory:
            root = Path(temporary_directory)
            guides_dir = root / "src/data/heroes"
            guides_dir.mkdir(parents=True)
            (guides_dir / "deadpool.ts").write_text("roles: ['vanguard', 'duelist', 'strategist']", encoding="utf-8")
            (guides_dir / "gorr.ts").write_text("roles: ['duelist']", encoding="utf-8")
            app_heroes = [{"id": "deadpool"}, {"id": "gorr"}]
            roster = [
                {"name": "Deadpool", "roles": ["vanguard", "duelist", "strategist"]},
                {"name": "Gorr the God Butcher", "roles": ["duelist"]},
            ]

            def matcher(heroes: list[dict], name: str) -> dict | None:
                names = {"Deadpool": "deadpool", "Gorr the God Butcher": "gorr"}
                wanted = names.get(name)
                return next((hero for hero in heroes if hero["id"] == wanted), None)

            problems = audit_official_roster(roster, app_heroes, root, matcher)

        self.assertEqual(problems, [])


if __name__ == "__main__":
    unittest.main()
