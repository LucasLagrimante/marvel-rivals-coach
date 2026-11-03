import { heroIndex } from '../data/heroIndex'
import type { HeroSummary } from '../types'

/**
 * Fonte única da verdade sobre a existência de manuais.
 *
 * O `guideId` em `rankings.ts` é gerado estaticamente por `update_rankings.py`
 * e pode ficar desatualizado quando um guia novo é adicionado. Esta função
 * consulta o índice gerado a partir de `src/data/heroes/`, garantindo que a
 * interface reflita sempre o estado atual dos guias publicados.
 */

const slugMap = new Map<string, HeroSummary>()

for (const hero of heroIndex) {
  // Também indexa pelo slug do ranking (que pode diferir do id)
  slugMap.set(hero.id, hero)
  slugMap.set(hero.id.replace(/-/g, '_'), hero)
}

/** Retorna o resumo do herói, ou undefined se não existe manual. */
export function getGuide(heroId: string): HeroSummary | undefined {
  return slugMap.get(heroId)
}

/** Retorna true se o herói tem manual publicado no app. */
export function hasGuide(heroId: string): boolean {
  return slugMap.has(heroId)
}

/** Retorna o total de manuais publicados. */
export function guideCount(): number {
  return heroIndex.length
}
