import type { HeroSummary, RoleKey } from '../types'
import { roleLabel } from './roles'

/** Minúsculas sem acento — "Pantéra" e "pantera" casam igual. */
export function normalize(value: string) {
  return value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()
}

export type MatchField = 'nome' | 'apelido' | 'habilidade' | 'team-up' | 'role'

export interface HeroMatch {
  hero: HeroSummary
  score: number
  /** Campo que gerou o melhor match — vira a dica "por que apareceu". */
  field: MatchField
  /** Texto original que casou (ex.: nome da habilidade). */
  term: string
}

interface Term {
  field: MatchField
  text: string
  norm: string
  weight: number
}

const termCache = new WeakMap<HeroSummary, Term[]>()

function termsOf(hero: HeroSummary): Term[] {
  const cached = termCache.get(hero)
  if (cached) return cached

  const make = (field: MatchField, weight: number) => (text: string) => ({ field, text, norm: normalize(text), weight })
  const terms = [
    make('nome', 1)(hero.name),
    ...[hero.id.replace(/-/g, ' '), ...hero.aliases].map(make('apelido', 0.79)),
    ...Object.values(hero.nicknames).filter(Boolean).map((nickname) => make('apelido', 0.78)(nickname as string)),
    ...hero.abilities.map(make('habilidade', 0.6)),
    ...hero.teamUps.flatMap((teamUp) => [make('team-up', 0.5)(teamUp.name), make('team-up', 0.42)(`com ${teamUp.partner}`)]),
    ...hero.roles.map((role) => make('role', 0.35)(roleLabel[role])),
  ]

  termCache.set(hero, terms)
  return terms
}

/** Letras da busca aparecem em ordem no termo (tolerância a digitação "mgnt" → Magneto). */
function isSubsequence(query: string, text: string) {
  let cursor = 0
  for (const char of text) {
    if (char === query[cursor]) cursor += 1
    if (cursor === query.length) return true
  }
  return false
}

function scoreTerm(query: string, term: Term) {
  const { norm } = term
  if (norm === query) return 1000
  if (norm.startsWith(query)) return 820 - Math.min(norm.length - query.length, 40)
  if (norm.split(/[\s\-–·/]+/).some((word) => word.startsWith(query))) return 660
  if (norm.includes(query)) return 520
  if (query.length >= 4 && term.field === 'nome' && isSubsequence(query, norm.replace(/\s+/g, ''))) return 300
  return 0
}

export function searchHeroes(heroes: HeroSummary[], rawQuery: string, role?: RoleKey | null): HeroMatch[] {
  const query = normalize(rawQuery)
  const pool = role ? heroes.filter((hero) => hero.roles.includes(role)) : heroes

  if (!query) {
    return pool.map((hero) => ({ hero, score: 0, field: 'nome', term: hero.name }))
  }

  const matches: HeroMatch[] = []

  for (const hero of pool) {
    let best: HeroMatch | null = null

    for (const term of termsOf(hero)) {
      const base = scoreTerm(query, term)
      if (!base) continue
      const score = base * term.weight
      if (!best || score > best.score) best = { hero, score, field: term.field, term: term.text }
    }

    if (best) matches.push(best)
  }

  return matches.sort((a, b) => b.score - a.score || a.hero.name.localeCompare(b.hero.name, 'pt-BR'))
}

/** Divide o texto em trechos marcados/não marcados para destacar o match. */
export function highlight(text: string, rawQuery: string): Array<{ text: string; hit: boolean }> {
  const query = normalize(rawQuery)
  if (!query) return [{ text, hit: false }]

  // A normalização remove só diacríticos combinantes: os índices em `norm` batem com `text`
  // quando cada letra acentuada vira 1 caractere-base. Recalcula por caractere para garantir.
  const chars = [...text]
  const normChars = chars.map((char) => normalize(char) || char)
  const norm = normChars.join('')
  const start = norm.indexOf(query)
  if (start < 0) return [{ text, hit: false }]

  let consumed = 0
  let from = -1
  let to = chars.length
  for (let index = 0; index < chars.length; index += 1) {
    if (consumed === start && from < 0) from = index
    consumed += normChars[index].length
    if (from >= 0 && consumed >= start + query.length) {
      to = index + 1
      break
    }
  }
  if (from < 0) return [{ text, hit: false }]

  return [
    { text: chars.slice(0, from).join(''), hit: false },
    { text: chars.slice(from, to).join(''), hit: true },
    { text: chars.slice(to).join(''), hit: false },
  ].filter((part) => part.text)
}

const RECENT_KEY = 'rc:recent-heroes'

export function readRecentHeroes(): string[] {
  try {
    const value = JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]')
    return Array.isArray(value) ? value.filter((item) => typeof item === 'string').slice(0, 6) : []
  } catch {
    return []
  }
}

export function pushRecentHero(heroId: string) {
  try {
    const next = [heroId, ...readRecentHeroes().filter((id) => id !== heroId)].slice(0, 6)
    localStorage.setItem(RECENT_KEY, JSON.stringify(next))
  } catch {
    /* storage bloqueado: recentes são conveniência */
  }
}
