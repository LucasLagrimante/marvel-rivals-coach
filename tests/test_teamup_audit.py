from __future__ import annotations

import contextlib
import io
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))

import download_teamup_assets as teamup
from download_teamup_assets import audit_local_partner_assets, audit_partners


class AuditPartnersCompletenessTests(unittest.TestCase):
    def test_rejeita_bundle_vazio_ou_com_menos_de_55_herois(self) -> None:
        header = {
            "name": "CHOICE A",
            "icon": "img/icon-a.png",
            "partner_img": "img/partner-a_a1.png",
            "declared_partner": "Partner A",
        }
        for heroes in ({}, {"TEST HERO": [header, dict(header)]}):
            with self.subTest(hero_count=len(heroes)):
                problems = audit_partners(heroes)
                self.assertTrue(any("BUNDLE_INCOMPLETE" in problem for problem in problems), problems)
                expected = str(teamup.EXPECTED_BUNDLE_HERO_COUNT)
                self.assertTrue(any(expected in problem for problem in problems), problems)


class AuditLocalPartnerAssetsTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.out_dir = Path(self.temp.name)
        self.hero_config = {
            "test-hero": (
                "TEST HERO",
                [("choice-a", "CHOICE A"), ("choice-b", "CHOICE B")],
            ),
        }
        self.heroes = {
            "TEST HERO": [
                {
                    "name": "CHOICE A",
                    "declared_partner": "Partner A",
                    "partner_img": "img/partner-a.png",
                },
                {
                    "name": "CHOICE B",
                    "declared_partner": "Partner B",
                    "partner_img": "img/partner-b.png",
                },
            ],
        }
        self.remote_assets = {
            "https://cdn.example/img/partner-a.png": b"\x89PNG-partner-a",
            "https://cdn.example/img/partner-b.png": b"\x89PNG-partner-b",
        }

    def write_local_assets(self, choice_a: bytes, choice_b: bytes) -> None:
        (self.out_dir / "test-hero-choice-a-partner.png").write_bytes(choice_a)
        (self.out_dir / "test-hero-choice-b-partner.png").write_bytes(choice_b)

    def fetcher(self, url: str) -> bytes:
        return self.remote_assets[url]

    def test_aceita_pngs_locais_trocados_para_compensar_bundle_invertido(self) -> None:
        self.write_local_assets(b"\x89PNG-partner-b", b"\x89PNG-partner-a")

        problems = audit_local_partner_assets(
            self.heroes,
            "https://cdn.example/",
            {"test hero"},
            out_dir=self.out_dir,
            hero_config=self.hero_config,
            fetcher=self.fetcher,
        )

        self.assertEqual(problems, [])

    def test_rejeita_swap_local_antigo_quando_bundle_atual_nao_esta_invertido(self) -> None:
        self.write_local_assets(b"\x89PNG-partner-b", b"\x89PNG-partner-a")

        problems = audit_local_partner_assets(
            self.heroes,
            "https://cdn.example/",
            set(),
            out_dir=self.out_dir,
            hero_config=self.hero_config,
            fetcher=self.fetcher,
        )

        self.assertEqual(len(problems), 2, problems)
        self.assertTrue(all("mesma opção" in problem for problem in problems), problems)

    def test_rejeita_pngs_locais_que_repetem_a_inversao_do_bundle(self) -> None:
        self.write_local_assets(b"\x89PNG-partner-a", b"\x89PNG-partner-b")

        problems = audit_local_partner_assets(
            self.heroes,
            "https://cdn.example/",
            {"test hero"},
            out_dir=self.out_dir,
            hero_config=self.hero_config,
            fetcher=self.fetcher,
        )

        self.assertEqual(len(problems), 2, problems)
        self.assertTrue(any("choice-a" in problem for problem in problems), problems)
        self.assertTrue(any("choice-b" in problem for problem in problems), problems)

    def test_retorna_problema_quando_png_local_esta_ausente(self) -> None:
        problems = audit_local_partner_assets(
            self.heroes,
            "https://cdn.example/",
            {"test hero"},
            out_dir=self.out_dir,
            hero_config=self.hero_config,
            fetcher=self.fetcher,
        )

        self.assertEqual(len(problems), 2, problems)
        self.assertTrue(all("ausente" in problem for problem in problems), problems)


class AuditPartnersCommandTests(unittest.TestCase):
    def test_help_descreve_o_resultado_da_auditoria_local(self) -> None:
        output = io.StringIO()
        with (
            patch.object(sys, "argv", ["download_teamup_assets.py", "--help"]),
            contextlib.redirect_stdout(output),
            self.assertRaises(SystemExit) as raised,
        ):
            teamup.main()

        self.assertEqual(raised.exception.code, 0)
        help_text = " ".join(output.getvalue().split())
        self.assertIn("bundle remoto e valida os PNGs locais", help_text)
        self.assertIn("rc=1 se inconclusivo ou asset local divergente", help_text)

    def test_rc_zero_quando_bundle_tem_aviso_mas_pngs_locais_passam(self) -> None:
        bundle_problem = "TEST HERO: as opções de partner vieram trocadas no bundle"
        output = io.StringIO()
        with (
            patch.object(sys, "argv", ["download_teamup_assets.py", "--audit-partners"]),
            patch.object(teamup, "load_bundle", return_value=("bundle", "https://cdn.example/")),
            patch.object(teamup, "parse_heroes", return_value={}),
            patch.object(teamup, "audit_partners", return_value=[bundle_problem]),
            patch.object(teamup, "audit_local_partner_assets", return_value=[]),
            contextlib.redirect_stdout(output),
            self.assertRaises(SystemExit) as raised,
        ):
            teamup.main()

        self.assertEqual(raised.exception.code, 0)
        self.assertIn("bundle remoto", output.getvalue())
        self.assertIn("PNGs locais", output.getvalue())

    def test_rc_zero_quando_bundle_nao_tem_aviso(self) -> None:
        output = io.StringIO()
        with (
            patch.object(sys, "argv", ["download_teamup_assets.py", "--audit-partners"]),
            patch.object(teamup, "load_bundle", return_value=("bundle", "https://cdn.example/")),
            patch.object(teamup, "parse_heroes", return_value={}),
            patch.object(teamup, "audit_partners", return_value=[]),
            patch.object(teamup, "audit_local_partner_assets", return_value=[]),
            contextlib.redirect_stdout(output),
            self.assertRaises(SystemExit) as raised,
        ):
            teamup.main()

        self.assertEqual(raised.exception.code, 0)
        self.assertIn("nenhum headerImg cruzado", output.getvalue())

    def test_rc_um_quando_png_local_nao_corresponde_ao_swap(self) -> None:
        bundle_problem = "TEST HERO: as opções de partner vieram trocadas no bundle"
        with (
            patch.object(sys, "argv", ["download_teamup_assets.py", "--audit-partners"]),
            patch.object(teamup, "load_bundle", return_value=("bundle", "https://cdn.example/")),
            patch.object(teamup, "parse_heroes", return_value={}),
            patch.object(teamup, "audit_partners", return_value=[bundle_problem]),
            patch.object(teamup, "audit_local_partner_assets", return_value=["arquivo local divergente"]),
            contextlib.redirect_stdout(io.StringIO()),
            self.assertRaises(SystemExit) as raised,
        ):
            teamup.main()

        self.assertEqual(raised.exception.code, 1)


class ParseHeroesMinifiedBundleTests(unittest.TestCase):
    def test_named_function_helpers_and_mixed_quotes(self) -> None:
        bundle = (
            'pa=n.cw(function(e,a){const t=n.p+"img/partner-a.png";e.exports=t}),' 
            'ia=n.cw(function(e,a){const t=n.p+"img/icon-a.png";e.exports=t}),' 
            'pb=n.cw(function(e,a){const t=n.p+"img/partner-b.png";e.exports=t}),' 
            'ib=n.cw(function(e,a){const t=n.p+"img/icon-b.png";e.exports=t});'
            + r'''[{id:1,cnName:"Fixture",enName:"TEST HERO",headers:[{headerImg:pa(),iconImg:ia(),xSkillName_en:'Choice\'s A',Key_en:'E',baseEffect_en:'Base A',enhancedEffect_en:"When teaming up with Partner A, allies gain an effect."},{headerImg:pb(),iconImg:ib(),xSkillName_en:"Choice B",Key_en:"PASSIVE",baseEffect_en:"Base B",enhancedEffect_en:'When teaming up with Partner B, allies gain an effect.'}]}]'''
        )

        heroes = teamup.parse_heroes(bundle)

        self.assertEqual(heroes["TEST HERO"][0]["name"], "Choice's A")
        self.assertEqual(heroes["TEST HERO"][0]["key"], "E")
        self.assertEqual(heroes["TEST HERO"][0]["base_effect"], "Base A")
        self.assertEqual(heroes["TEST HERO"][0]["enhanced_effect"], "When teaming up with Partner A, allies gain an effect.")
        self.assertEqual(heroes["TEST HERO"][0]["partner_img"], "img/partner-a.png")
        self.assertEqual(heroes["TEST HERO"][0]["icon"], "img/icon-a.png")
        self.assertEqual(heroes["TEST HERO"][0]["declared_partner"], "Partner A")
        self.assertEqual(heroes["TEST HERO"][1]["name"], "Choice B")
        self.assertEqual(heroes["TEST HERO"][1]["key"], "PASSIVE")
        self.assertEqual(heroes["TEST HERO"][1]["base_effect"], "Base B")
        self.assertEqual(heroes["TEST HERO"][1]["declared_partner"], "Partner B")

    def test_arrow_helpers_match_minified_bundle_shape_without_spaces(self) -> None:
        bundle = (
            'pa=n.cw(e=>{const a=n.p+"img/partner-a.png";e.exports=a}),' 
            'ia=n.cw(e=>{const b=n.p+"img/icon-a.png";e.exports=b}),' 
            'pb=n.cw(e=>{const c=n.p+"img/partner-b.png";e.exports=c}),' 
            'ib=n.cw(e=>{const d=n.p+"img/icon-b.png";e.exports=d});'
            + r'''[{id:1,cnName:"Fixture",enName:"TEST HERO",headers:[{headerImg:pa(),iconImg:ia(),xSkillName_en:'Choice A',enhancedEffect_en:'When teaming up with Partner A, allies gain an effect.'},{headerImg:pb(),iconImg:ib(),xSkillName_en:'Choice B',enhancedEffect_en:'When teaming up with Partner B, allies gain an effect.'}]}]'''
        )

        heroes = teamup.parse_heroes(bundle)

        self.assertEqual(heroes["TEST HERO"][0]["partner_img"], "img/partner-a.png")
        self.assertEqual(heroes["TEST HERO"][0]["icon"], "img/icon-a.png")
        self.assertEqual(heroes["TEST HERO"][1]["partner_img"], "img/partner-b.png")
        self.assertEqual(heroes["TEST HERO"][1]["icon"], "img/icon-b.png")

    def test_numeric_module_references_remain_supported(self) -> None:
        bundle = (
            '1:(e,n,a)=>{e.exports=a.p+"img/partner-a.png"},'
            '2:(e,n,a)=>{e.exports=a.p+"img/icon-a.png"},'
            '3:(e,n,a)=>{e.exports=a.p+"img/partner-b.png"},'
            '4:(e,n,a)=>{e.exports=a.p+"img/icon-b.png"};'
            + r'''[{id:1,cnName:"Fixture",enName:"TEST HERO",headers:[{headerImg:a(1),iconImg:a(2),xSkillName_en:"Choice A",enhancedEffect_en:"When teaming up with Partner A, allies gain an effect."},{headerImg:a(3),iconImg:a(4),xSkillName_en:"Choice B",enhancedEffect_en:"When teaming up with Partner B, allies gain an effect."}]}]'''
        )

        heroes = teamup.parse_heroes(bundle)

        self.assertEqual(heroes["TEST HERO"][0]["partner_img"], "img/partner-a.png")
        self.assertEqual(heroes["TEST HERO"][1]["icon"], "img/icon-b.png")


if __name__ == "__main__":
    unittest.main()
