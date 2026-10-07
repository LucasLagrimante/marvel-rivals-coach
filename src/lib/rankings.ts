import { rankings } from '../data/rankings'
import type { RankingEntry, RoleKey } from '../types'

export type MedalKey = 'ouro' | 'prata' | 'bronze'

const MEDALS: MedalKey[] = ['ouro', 'prata', 'bronze']

/** Retorna a medalha correspondente ao rank (top 3: ouro, prata, bronze). */
export function getHeroMedal(rank?: number): MedalKey | undefined {
  if (!rank || rank > MEDALS.length) return undefined
  return MEDALS[rank - 1]
}

/** Retorna os dados completos do herói no ranking da temporada para a role especificada (ou primeira categoria encontrada). */
export function getHeroRankingEntry(heroId: string, role?: RoleKey): RankingEntry | undefined {
  if (role) {
    const category = rankings.categories.find((cat) => cat.role === role)
    const entry = category?.entries.find((item) => item.guideId === heroId || item.slug === heroId)
    if (entry) return entry
  }

  for (const category of rankings.categories) {
    const entry = category.entries.find((item) => item.guideId === heroId || item.slug === heroId)
    if (entry) return entry
  }

  return undefined
}

/** Retorna a posição (rank) do herói no meta da role especificada ou na primeira categoria encontrada. */
export function getHeroRank(heroId: string, role?: RoleKey): number | undefined {
  return getHeroRankingEntry(heroId, role)?.rank
}

export { rankings }
