import type { HeroSummary } from '../types'
import { heroIndexRecords } from './heroIndex.generated'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`
const asset = (path?: string) => (path ? publicAsset(path) : undefined)

/**
 * Índice leve de todos os heróis com manual (ordem de `heroes/index.ts`).
 * Use em telas de listagem, busca e ranking; o guia completo vem de `loadHero()`.
 */
export const heroIndex: HeroSummary[] = heroIndexRecords.map((record) => ({
  ...record,
  portraitUrl: publicAsset(record.portraitUrl),
  bannerUrl: publicAsset(record.bannerUrl),
  selectionPortraitUrl: asset(record.selectionPortraitUrl),
  selectionHoverUrl: asset(record.selectionHoverUrl),
}))

export const heroIds = heroIndex.map((hero) => hero.id)

const byId = new Map(heroIndex.map((hero) => [hero.id, hero]))

export function getHeroSummary(heroId: string | null | undefined) {
  return heroId ? byId.get(heroId) : undefined
}
