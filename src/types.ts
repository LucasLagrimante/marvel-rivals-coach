export type RoleKey = 'vanguard' | 'duelist' | 'strategist'

export type SourceKind = 'official' | 'database' | 'guide' | 'forum' | 'video-transcript'

export type Confidence = 'alta' | 'media' | 'em disputa' | 'pendente'

export interface Source {
  id: string
  kind: SourceKind
  title: string
  url: string
  author?: string
  published?: string
  confidence: Confidence
  takeaways: string[]
}

export interface SourceCoverage {
  kind: SourceKind
  label: string
  count: number
  status: string
}

export interface AbilityFact {
  name: string
  input: string
  heading?: string
  facts: string[]
  meter?: Array<{ label: string; value: string }>
}

export interface UpgradeStep {
  rank: number
  spellNumber?: number
  input?: string
  ability: string
  label: string
  baseEffect?: string
  upgradeEffect?: string
  fightNote?: string
  why: string
  swapWhen?: string
  sourceIds: string[]
}

export interface UltimateNote {
  stance: string
  name: string
  bestUse: string
  execution: string
  upgradeValue: string
}

export interface PlayPattern {
  title: string
  steps: string[]
}

export interface DashGuide {
  ability: string
  shortRule: string
  mechanics: string[]
  drills: string[]
}

export interface TeamUpOption {
  name: string
  partner: string
  partnerRole: string
  input: string
  baseEffect: string
  enhancedEffect: string
  bestFor: string
  easySetup: string
  iconUrl: string
  partnerPortraitUrl: string
}

export interface TeamUpGuide {
  summary: string
  recommended: string
  recommendedReason: string
  options: TeamUpOption[]
  sourceIds: string[]
}

export interface RoleGuide {
  key: RoleKey
  label: string
  nickname: string
  health: string
  difficulty: string
  job: string
  verdict: string
  playstyle: string[]
  priorityKicker?: string
  priorityTitle?: string
  priorityDescription?: string
  upgradePlan: UpgradeStep[]
  adaptations: string[]
  ultimates: UltimateNote[]
  dashGuide: DashGuide
  patterns: PlayPattern[]
  mistakes: string[]
  evidence: string[]
  abilityLoop?: Array<string | { ability: string; input?: string }>
}

export interface HeroGuide {
  id: string
  name: string
  aliases: string[]
  game: string
  portraitUrl: string
  bannerUrl: string
  selectionPortraitUrl?: string
  selectionHoverUrl?: string
  /** Enquadramento do retrato estático (PNG) quando o sujeito fica baixo na arte. */
  selectionPortraitFit?: {
    scale?: number
    x?: number
    y?: number
  }
  selectionHoverFit?: {
    scale?: number
    x?: number
    y?: number
  }
  theme: {
    primary: string
    primaryRgb: string
    secondary: string
    secondaryRgb: string
    surface: string
    surfaceRgb: string
  }
  roles: RoleKey[]
  lastVerified: string
  confidenceSummary: string
  coreRead: string[]
  /**
   * Herói com livro de upgrades comprados na partida (ex.: Deadpool). Quando true,
   * o `upgradePlan` de cada role é a ordem de compra e ganha destaque no topo do guia.
   */
  upgradeBook?: boolean
  teamUps?: TeamUpGuide
  systems: AbilityFact[]
  roleGuides: Partial<Record<RoleKey, RoleGuide>>
  sources: Source[]
  sourceCoverage: SourceCoverage[]
}

/**
 * Registro leve de herói gerado por `scripts/build_hero_index.mjs`.
 * Os paths de asset são relativos; `HeroSummary` é a versão com `publicAsset()` aplicado.
 */
export interface HeroIndexRecord
  extends Pick<
    HeroGuide,
    | 'id'
    | 'name'
    | 'aliases'
    | 'game'
    | 'portraitUrl'
    | 'bannerUrl'
    | 'selectionPortraitUrl'
    | 'selectionHoverUrl'
    | 'selectionHoverFit'
    | 'selectionPortraitFit'
    | 'theme'
    | 'roles'
    | 'lastVerified'
  > {
  /** `coreRead[0]` cru — o gancho do herói. */
  hook: string
  sourceCount: number
  nicknames: Partial<Record<RoleKey, string>>
  /** Habilidades, sistemas e ultimates (termos de busca). */
  abilities: string[]
  teamUps: Array<{ name: string; partner: string }>
}

export type HeroSummary = HeroIndexRecord

export interface RankingEntry {
  rank: number
  slug: string
  name: string
  gameName: string
  tier: string
  rating: number
  winRate: number
  pickRate: number
  matches: number
  portraitUrl: string
  guideId?: string
}

export interface RankingCategory {
  role: RoleKey
  entries: RankingEntry[]
}

export interface RankingsData {
  season: string
  scope: string
  updatedAt: string
  fetchedAt: string
  source: { name: string; url: string }
  categories: RankingCategory[]
}
