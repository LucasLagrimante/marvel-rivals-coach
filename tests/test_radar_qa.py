import json
import re
import shutil
import subprocess
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RADAR = ROOT / 'scripts' / 'radar_qa.cjs'
START = '        const problems = []'
END = '        if (problems.length) failures.push'
NODE_RUNNER = r"""
const fs = require('node:fs');
const payload = JSON.parse(fs.readFileSync(0, 'utf8'));
const check = new Function('route', 'metric', 'width', 'height', payload.block + '\nreturn problems;');
const results = payload.cases.map(({route, metric, width, height}) => check(route, metric, width, height));
process.stdout.write(JSON.stringify(results));
"""


class RadarAssertionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        source = RADAR.read_text(encoding='utf-8')
        start = source.find(START)
        end = source.find(END, start)
        if start < 0 or end < 0:
            raise AssertionError('Could not locate the radar problem-check block')
        cls.source = source
        cls.check_block = source[start:end]

    @staticmethod
    def metric(**overrides):
        base = {
            'innerWidth': 1440,
            'viewportHeight': 900,
            'documentOverflow': 0,
            'heroBanner': None,
            'clientWidth': 1440,
            'scrollWidth': 1440,
            'heroCopy': None,
            'heroHook': None,
            'statsTiles': [],
            'statsGrid': None,
            'primarySystem': '',
            'secondaryCards': [],
            'roleTabs': [],
            'brokenLocalImages': [],
        }
        base.update(overrides)
        return base

    def evaluate(self, cases):
        self.assertIsNotNone(shutil.which('node'), 'Node.js must be available to run radar contract tests')
        payload = {'block': self.check_block, 'cases': cases}
        result = subprocess.run(
            ['node', '-e', NODE_RUNNER],
            cwd=ROOT,
            input=json.dumps(payload),
            text=True,
            capture_output=True,
            timeout=10,
            check=False,
        )
        self.assertEqual(result.returncode, 0, result.stderr or result.stdout)
        return json.loads(result.stdout)

    def test_wide_menu_vertical_scrolling_is_allowed(self):
        metric = self.metric(documentOverflow=1400)
        [problems] = self.evaluate([{'route': {'name': 'menu'}, 'metric': metric, 'width': 1440, 'height': 900}])
        self.assertFalse(any('vertical overflow' in problem for problem in problems), problems)

    def test_wide_menu_horizontal_overflow_still_fails(self):
        metric = self.metric(scrollWidth=1445)
        [problems] = self.evaluate([{'route': {'name': 'menu'}, 'metric': metric, 'width': 1440, 'height': 900}])
        self.assertTrue(any('horizontal overflow' in problem for problem in problems), problems)

    def test_standard_hero_banner_expects_four_stats(self):
        route = {
            'name': 'Gorr',
            'expectedStats': 4,
            'primary': 'Symbiote Swarm & Overhealth',
            'secondary': 'Ciclo dos Berserkers',
        }
        metric = self.metric(
            innerWidth=713,
            clientWidth=704,
            scrollWidth=704,
            h1='GORR',
            statsTiles=[{}, {}, {}, {}],
            statsGrid={'containerWidth': 665, 'columnCount': 4, 'tileCount': 4},
            primarySystem='Symbiote Swarm & Overhealth',
            secondaryCards=['Symbiote Swarm & Overhealth', 'Ciclo dos Berserkers'],
        )
        [problems] = self.evaluate([{'route': route, 'metric': metric, 'width': 713, 'height': 900}])
        self.assertFalse(any('banner stats' in problem for problem in problems), problems)

    def test_three_column_mobile_tablet_layout_is_valid_at_640px(self):
        route = {'name': 'Gorr', 'expectedStats': 4}
        metric = self.metric(
            innerWidth=640,
            clientWidth=640,
            scrollWidth=640,
            h1='GORR',
            statsTiles=[{}, {}, {}, {}],
            statsGrid={'containerWidth': 595, 'columnCount': 3, 'tileCount': 4},
        )
        [problems] = self.evaluate([{'route': route, 'metric': metric, 'width': 640, 'height': 900}])
        self.assertFalse(any('hero stats grid' in problem for problem in problems), problems)

    def test_standard_hero_rejects_unused_fifth_stats_column_at_medium_width(self):
        route = {'name': 'ELSA BLOODSTONE', 'expectedStats': 4}
        metric = self.metric(
            innerWidth=713,
            clientWidth=704,
            scrollWidth=704,
            h1='ELSA BLOODSTONE',
            statsTiles=[{}, {}, {}, {}],
            statsGrid={'containerWidth': 665, 'columnCount': 5},
        )
        [problems] = self.evaluate([{'route': route, 'metric': metric, 'width': 713, 'height': 459}])
        self.assertTrue(any('hero stats grid has 5 columns for 4 tiles' in problem for problem in problems), problems)

    def test_upgrade_book_hero_requires_five_stats(self):
        route = {'name': 'Deadpool', 'expectedStats': 5}
        four_stats = self.metric(h1='DEADPOOL', statsTiles=[{}, {}, {}, {}], roleTabs=['Duelista', 'Vanguarda', 'Estrategista'])
        five_stats = self.metric(h1='DEADPOOL', statsTiles=[{}, {}, {}, {}, {}], statsGrid={'containerWidth': 665, 'columnCount': 5, 'tileCount': 5}, roleTabs=['Duelista', 'Vanguarda', 'Estrategista'])
        missing = self.evaluate([{'route': route, 'metric': four_stats, 'width': 1440, 'height': 900}])[0]
        present = self.evaluate([{'route': route, 'metric': five_stats, 'width': 1440, 'height': 900}])[0]
        self.assertTrue(any('expected 5 banner stats; found 4' in problem for problem in missing), missing)
        self.assertFalse(any('banner stats' in problem for problem in present), present)

    def test_matrix_covers_the_reported_713px_viewport(self):
        self.assertRegex(self.source, r"const WIDTHS = \[[^\]]*\b713\b")

    def test_matrix_declares_expected_stats_for_detail_routes(self):
        for hero, count in [('Gorr', 4), ('Jubilee', 4), ('Phoenix', 4), ('Elsa Bloodstone', 4), ('Deadpool', 5)]:
            pattern = rf"\{{\s*path: '[^']+',\s*name: '{hero}',\s*expectedStats: {count}\b"
            with self.subTest(hero=hero):
                self.assertIsNotNone(re.search(pattern, self.source), f'{hero} must declare expectedStats={count}')


if __name__ == '__main__':
    unittest.main()
