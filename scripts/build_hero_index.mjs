#!/usr/bin/env node
/**
 * Gera `src/data/heroIndex.generated.ts` — o índice leve dos heróis.
 *
 * Por quê: os 54 guias completos somam ~1,7 MB de JS. A home, os manuais, o
 * ranking e a busca global só precisam de nome, apelidos, roles, tema, assets
 * e o gancho. O índice carrega isso; o guia completo de cada herói vira um
 * chunk próprio carregado sob demanda (ver `src/data/heroLoader.ts`).
 *
 * Fonte de verdade continua sendo `src/data/heroes/<slug>.ts` + a ordem de
 * `src/data/heroes/index.ts`. Este script roda sozinho no `vite dev`/`vite build`
 * (plugin em `vite.config.ts`) e pode ser chamado à mão:
 *
 *   node scripts/build_hero_index.mjs          # regenera se mudou
 *   node scripts/build_hero_index.mjs --check  # rc=1 se o arquivo estiver defasado
 */
import { mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const heroesDir = path.join(root, 'src/data/heroes')
const outFile = path.join(root, 'src/data/heroIndex.generated.ts')

/** Marcador que substitui o BASE_URL do Vite; o runtime reaplica `publicAsset()`. */
const BASE = '@@BASE@@'

function relAsset(value) {
  if (typeof value !== 'string') return undefined
  return value.startsWith(BASE) ? value.slice(BASE.length) : value
}

function unique(values) {
  return [...new Set(values.filter((value) => typeof value === 'string' && value.trim()))]
}

async function loadHeroes() {
  // Copia os .ts para um diretório temporário, adicionando extensão aos imports
  // relativos e trocando `import.meta.env.BASE_URL` pelo marcador — assim o
  // Node (type stripping nativo) importa os arquivos sem Vite.
  const workDir = await mkdtemp(path.join(tmpdir(), 'hero-index-'))

  try {
    const files = (await readdir(heroesDir)).filter((file) => file.endsWith('.ts'))

    for (const file of files) {
      const source = await readFile(path.join(heroesDir, file), 'utf8')
      const patched = source
        .replaceAll('import.meta.env.BASE_URL', JSON.stringify(BASE))
        .replace(/from '(\.\/[^']+)'/g, (_, spec) => `from '${spec}.ts'`)

      await writeFile(path.join(workDir, file), patched)
    }

    const mod = await import(pathToFileURL(path.join(workDir, 'index.ts')).href)
    return { heroes: mod.heroes, files }
  } finally {
    await rm(workDir, { recursive: true, force: true })
  }
}

function summarize(hero) {
  const roleGuides = Object.values(hero.roleGuides ?? {})

  return {
    id: hero.id,
    name: hero.name,
    aliases: hero.aliases ?? [],
    game: hero.game,
    roles: hero.roles,
    theme: hero.theme,
    portraitUrl: relAsset(hero.portraitUrl),
    bannerUrl: relAsset(hero.bannerUrl),
    selectionPortraitUrl: relAsset(hero.selectionPortraitUrl),
    selectionHoverUrl: relAsset(hero.selectionHoverUrl),
    selectionHoverFit: hero.selectionHoverFit,
    selectionPortraitFit: hero.selectionPortraitFit,
    lastVerified: hero.lastVerified,
    hook: hero.coreRead?.[0] ?? hero.confidenceSummary ?? '',
    sourceCount: hero.sources?.length ?? 0,
    nicknames: Object.fromEntries(roleGuides.map((guide) => [guide.key, guide.nickname])),
    // Termos extras da busca global: habilidades, ultimates e parceiros de Team-Up.
    abilities: unique([
      ...(hero.systems ?? []).map((system) => system.name),
      ...roleGuides.flatMap((guide) => (guide.upgradePlan ?? []).map((step) => step.ability)),
      ...roleGuides.flatMap((guide) => (guide.ultimates ?? []).map((ultimate) => ultimate.name)),
    ]),
    teamUps: (hero.teamUps?.options ?? []).map((option) => ({ name: option.name, partner: option.partner })),
  }
}

function render(heroes) {
  const entries = heroes.map(summarize)

  return `// ARQUIVO GERADO por scripts/build_hero_index.mjs — não editar à mão.
// Regenerado automaticamente no \`vite dev\` / \`vite build\` a partir de src/data/heroes/*.ts.
import type { HeroIndexRecord } from '../types'

export const heroIndexRecords: HeroIndexRecord[] = ${JSON.stringify(entries, null, 2)}
`
}

export async function buildHeroIndex({ check = false, quiet = false } = {}) {
  const { heroes, files } = await loadHeroes()
  const ids = new Set(heroes.map((hero) => hero.id))
  const orphans = files
    .filter((file) => file !== 'index.ts')
    .map((file) => file.replace(/\.ts$/, ''))
    .filter((slug) => !ids.has(slug))

  if (orphans.length) {
    throw new Error(`Heróis fora de src/data/heroes/index.ts (ou id ≠ slug do arquivo): ${orphans.join(', ')}`)
  }

  const next = render(heroes)
  const current = existsSync(outFile) ? await readFile(outFile, 'utf8') : ''

  if (current === next) {
    if (!quiet) console.log(`[hero-index] em dia (${heroes.length} heróis)`)
    return false
  }

  if (check) {
    console.error('[hero-index] DEFASADO — rode `node scripts/build_hero_index.mjs`')
    process.exitCode = 1
    return true
  }

  await writeFile(outFile, next)
  if (!quiet) console.log(`[hero-index] gerado (${heroes.length} heróis)`)
  return true
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  await buildHeroIndex({ check: process.argv.includes('--check') })
}
