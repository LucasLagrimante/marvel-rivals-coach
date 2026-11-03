import type { HeroGuide } from '../types'

/**
 * Carregamento sob demanda dos guias completos: cada `heroes/<slug>.ts` vira um
 * chunk próprio. `prefetchHero()` é chamado em sinais de intenção (hover, foco,
 * item ativo na busca) para o guia já estar em memória no clique.
 */
const modules = import.meta.glob<Record<string, HeroGuide>>(['./heroes/*.ts', '!./heroes/index.ts'])

const cache = new Map<string, HeroGuide>()
const pending = new Map<string, Promise<HeroGuide>>()

function pickHero(mod: Record<string, HeroGuide>, heroId: string) {
  const hero = Object.values(mod).find((value) => value && typeof value === 'object' && value.id === heroId)

  if (!hero) {
    throw new Error(`O arquivo heroes/${heroId}.ts não exporta um herói com id "${heroId}".`)
  }

  return hero
}

/** Guia já carregado (síncrono) — evita flash de carregamento em navegação repetida. */
export function getLoadedHero(heroId: string | null | undefined) {
  return heroId ? cache.get(heroId) : undefined
}

export function loadHero(heroId: string): Promise<HeroGuide> {
  const cached = cache.get(heroId)
  if (cached) return Promise.resolve(cached)

  const inFlight = pending.get(heroId)
  if (inFlight) return inFlight

  const importer = modules[`./heroes/${heroId}.ts`]
  if (!importer) return Promise.reject(new Error(`Manual "${heroId}" não encontrado.`))

  const promise = importer()
    .then((mod) => {
      const hero = pickHero(mod, heroId)
      cache.set(heroId, hero)
      return hero
    })
    .finally(() => pending.delete(heroId))

  pending.set(heroId, promise)
  return promise
}

/** Dispara o download do guia sem bloquear; erros ficam para o `loadHero()` real. */
export function prefetchHero(heroId: string) {
  loadHero(heroId).catch(() => undefined)
}
