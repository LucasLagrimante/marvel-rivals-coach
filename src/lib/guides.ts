import { heroes } from '../data/heroes'
import type { HeroGuide } from '../types'

/**
 * Fonte única da verdade sobre a existência de manuais.
 *
 * O `guideId` em `rankings.ts` é gerado estaticamente por `update_rankings.py`
 * e pode ficar desatualizado quando um guia novo é adicionado. Esta função
 * consulta o array `heroes` em tempo real, garantindo que a interface
 * reflita sempre o estado atual dos guias publicados.
 */

const heroMap = new Map<string, HeroGuide>()
const slugMap = new Map<string, HeroGuide>()

for (const hero of heroes) {
  heroMap.set(hero.id, hero)
  // Também indexa pelo slug do ranking (que pode diferir do id)
  const slug = hero.id.replace(/-/g, '_')
  slugMap.set(slug, hero)
  slugMap.set(hero.id, hero)
}

/** Retorna o guia do herói, ou undefined se não existe. */
export function getGuide(heroId: string): HeroGuide | undefined {
  return heroMap.get(heroId) ?? slugMap.get(heroId)
}

/** Retorna true se o herói tem manual publicado no app. */
export function hasGuide(heroId: string): boolean {
  return getGuide(heroId) !== undefined
}

/** Retorna o total de manuais publicados. */
export function guideCount(): number {
  return heroes.length
}
