/**
 * Reduz os assets de `public/` antes do build.
 *
 * A wiki Fandom serve arte de seleção em ~400x400 com 60 frames ( ate 2.4 MB por
 * herói) e banners de ate 1.7 K de lado. O grid de seleção usa tiles de 94px com
 * `scale` de ate 1.5 no hover, entao essa resolucao e desperdicio puro: publicar
 * como veio estourava 100 MB e travava o build no Cloudflare Pages.
 *
 * Este script roda depois de qualquer download de asset e:
 *   - animated: reescala para 220x220, corta os frames para 30 e re-codifica em WebP
 *   - estatico: reescala para 320x320 e re-codifica em WebP
 *   - banners: reescala para 960 de lado e re-codifica em WebP
 *
 * Roda idempotente: arquivo ja menor que o alvo e pulado.
 *
 * Uso:
 *   node scripts/optimize_images.mjs                 # tudo em public/
 *   node scripts/optimize_images.mjs --dry-run       # so reporta
 *   node scripts/optimize_images.mjs --force         # reprocessa tudo
 *   node scripts/optimize_images.mjs heroes/select   # so um caminho
 */

import { readdir, stat, writeFile, rename } from 'node:fs/promises'
import { join, extname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PUBLIC_DIR = join(ROOT, 'public')

/** Cada familia tem alvo proprio porque aparece em contextos diferentes. */
const RULES = [
  {
    dir: 'heroes/select',
    match: /_champion\.(gif|png|webp)$/i,
    kind: 'animated',
    size: 220,
    frames: 30,
    quality: 72,
  },
  {
    dir: 'heroes/select',
    match: /\.(png|webp|jpe?g)$/i,
    kind: 'still',
    size: 320,
    quality: 78,
  },
  {
    dir: 'heroes/banners',
    match: /\.(png|webp|jpe?g)$/i,
    kind: 'still',
    size: 960,
    quality: 80,
  },
  {
    dir: 'rankings',
    match: /\.(png|webp|jpe?g)$/i,
    kind: 'still',
    size: 320,
    quality: 80,
  },
]

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const force = args.includes('--force')
const filters = args.filter((arg) => !arg.startsWith('--'))

/** Re-codificar por ganho de 1% so gasta tempo e suja o git. */
const MIN_GAIN = 0.05

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`

function ruleFor(relPath) {
  const base = relPath.replace(/\\/g, '/')
  return RULES.find((rule) => base.startsWith(`${rule.dir}/`) && rule.match.test(base)) ?? null
}

/**
 * Animated: o `sharp` so preserva a animacao quando recebe `{ animated: true }`
 * e `pages`. Sem `pages` ele decodifica so o primeiro frame.
 */
async function optimizeAnimated(input, rule) {
  const pipeline = sharp(input, { animated: true, pages: rule.frames })
    .resize(rule.size, rule.size, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: rule.quality, effort: 4, loop: 0 })
  return pipeline.toBuffer({ resolveWithObject: true })
}

async function optimizeStill(input, rule) {
  const pipeline = sharp(input, { animated: false })
    .resize(rule.size, rule.size, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: rule.quality, effort: 4 })
  return pipeline.toBuffer({ resolveWithObject: true })
}

async function walk(dir, acc = []) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return acc
  }

  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full, acc)
      continue
    }
    if (entry.isFile() && extname(entry.name)) {
      acc.push(full)
    }
  }
  return acc
}

async function main() {
  const filtersActive = filters.length > 0
  const targets = []

  for (const rule of RULES) {
    if (filtersActive && !filters.some((f) => rule.dir.includes(f.replace(/^\/+|\/+$/g, '')))) {
      continue
    }
    const base = join(PUBLIC_DIR, rule.dir)
    const files = await walk(base)
    for (const file of files) {
      if (rule.match.test(relative(PUBLIC_DIR, file))) {
        targets.push({ file, rule })
      }
    }
  }

  console.log(
    `${dryRun ? '[dry-run] ' : ''}${targets.length} arquivo(s) em ${filtersActive ? filters.join(', ') : 'public/'}`,
  )

  let before = 0
  let after = 0
  let processed = 0
  let skipped = 0
  const failures = []

  for (const { file, rule } of targets) {
    const rel = relative(ROOT, file)
    const { size } = await stat(file)
    before += size

    try {
      const { data, info } =
        rule.kind === 'animated' ? await optimizeAnimated(file, rule) : await optimizeStill(file, rule)

      after += data.length

      const gain = size > 0 ? 1 - data.length / size : 0
      if (gain < MIN_GAIN && !force) {
        skipped += 1
        console.log(`  skip  ${rel} (${kb(size)} ja esta otimo)`)
        continue
      }

      if (!dryRun) {
        const tmp = `${file}.tmp`
        await writeFile(tmp, data)
        await rename(tmp, file)
      }

      processed += 1
      const delta = Math.round(gain * 100)
      // `info.height` vem multiplicado pelo numero de frames no webp animado,
      // entao reportamos so a largura para nao mentir sobre o tamanho final.
      console.log(
        `  ${dryRun ? 'plan ' : 'opt  '} ${rel} ${kb(size)} -> ${kb(data.length)} (-${delta}%) ${info.width}px`,
      )
    } catch (error) {
      failures.push({ rel, message: error.message })
      after += size
      console.log(`  FAIL  ${rel}: ${error.message}`)
    }
  }

  const saved = before - after
  console.log('')
  console.log(
    `resumo: ${processed} otimizado | ${skipped} pulado | ${failures.length} falha | ` +
      `${kb(before)} -> ${kb(after)} (-${before > 0 ? Math.round((1 - after / before) * 100) : 0}%)`,
  )

  if (failures.length > 0) {
    console.log('\nfalhas:')
    for (const { rel, message } of failures) {
      console.log(`  ${rel}: ${message}`)
    }
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})