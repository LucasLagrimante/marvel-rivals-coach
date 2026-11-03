import { useEffect, useId, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { ArrowRight, BookOpen, Clock3, CornerDownLeft, Eye, Home, Search, Trophy, X, type LucideIcon } from 'lucide-react'
import type { HeroSummary, RoleKey } from '../../types'
import { heroIndex, getHeroSummary } from '../../data/heroIndex'
import { prefetchHero } from '../../data/heroLoader'
import { preloadImage } from '../../lib/assetCache'
import { highlight, normalize, readRecentHeroes, searchHeroes, type MatchField } from '../../lib/search'
import { roleIcon, roleLabel, selectionRoleOrder } from '../../lib/roles'
import { getHeroRoleEntry } from '../../lib/rankings'
import { firstSentence } from '../../lib/text'
import { cx } from '../../lib/cx'
import type { SectionKey } from '../../lib/routes'
import { RichText } from '../ui/RichText'
import '../../styles/search.css'

type Item =
  | { kind: 'hero'; key: string; hero: HeroSummary; field: MatchField; term: string; recent?: boolean }
  | { kind: 'section'; key: string; section: SectionKey; label: string; hint: string; icon: LucideIcon }

const sectionItems: Array<Extract<Item, { kind: 'section' }> & { terms: string }> = [
  { kind: 'section', key: 's-menu', section: 'menu', label: 'Início', hint: 'Busca, meta e elenco', icon: Home, terms: 'inicio menu home' },
  { kind: 'section', key: 's-manuais', section: 'manuais', label: 'Manuais', hint: 'Todos os guias por role', icon: BookOpen, terms: 'manuais guias biblioteca' },
  { kind: 'section', key: 's-ranking', section: 'ranking', label: 'Ranking', hint: 'Tier list da temporada', icon: Trophy, terms: 'ranking tier list meta' },
  { kind: 'section', key: 's-rumores', section: 'rumores', label: 'Rumores', hint: 'Próximos heróis em investigação', icon: Eye, terms: 'rumores vazamentos leaks' },
]

const fieldLabel: Record<MatchField, string> = {
  nome: '',
  apelido: 'Apelido',
  habilidade: 'Habilidade',
  'team-up': 'Team-Up',
  role: 'Role',
}

function Highlighted({ text, query }: { text: string; query: string }) {
  return (
    <>
      {highlight(text, query).map((part, index) =>
        part.hit ? <mark key={index}>{part.text}</mark> : <span key={index}>{part.text}</span>,
      )}
    </>
  )
}

function HeroPreview({ hero, role }: { hero: HeroSummary; role: RoleKey | null }) {
  const activeRole = role && hero.roles.includes(role) ? role : hero.roles[0]
  const rankings = hero.roles.map((heroRole) => ({ role: heroRole, entry: getHeroRoleEntry(hero.id, heroRole) }))

  return (
    <div
      className="cmdk-preview"
      key={hero.id}
      style={{ '--slot-primary-rgb': hero.theme.primaryRgb, '--slot-secondary-rgb': hero.theme.secondaryRgb } as CSSProperties}
    >
      <div className="cmdk-preview-art" aria-hidden="true">
        <img src={hero.bannerUrl} alt="" decoding="async" />
      </div>
      <div className="cmdk-preview-copy">
        <div className="cmdk-preview-roles">
          {hero.roles.map((heroRole) => {
            const Icon = roleIcon[heroRole]
            return (
              <span key={heroRole} className={cx('cmdk-role', heroRole === activeRole && 'is-active')}>
                <Icon size={12} strokeWidth={2.4} aria-hidden="true" />
                {roleLabel[heroRole]}
                {hero.nicknames[heroRole] && hero.roles.length > 1 ? ` · ${hero.nicknames[heroRole]}` : null}
              </span>
            )
          })}
        </div>
        <h3>{hero.name}</h3>
        <p className="cmdk-preview-hook">
          <RichText text={firstSentence(hero.hook, 170)} />
        </p>
        <dl className="cmdk-preview-stats">
          {rankings.map(({ role: rankRole, entry }) =>
            entry ? (
              <div key={rankRole}>
                <dt>{roleLabel[rankRole]}</dt>
                <dd>
                  #{entry.rank} <span data-tier={entry.tier}>Tier {entry.tier}</span>
                </dd>
              </div>
            ) : null,
          )}
          <div>
            <dt>Fontes</dt>
            <dd>{hero.sourceCount}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

/**
 * Busca global de heróis (Ctrl/⌘K, "/" ou começar a digitar).
 * Casa nome, apelido, habilidade, Team-Up e role sem acento; ↑/↓ navega,
 * Enter abre o manual direto. O item ativo pré-carrega o guia e a arte.
 */
export function CommandPalette({
  initialQuery,
  onClose,
  onSelectHero,
  onNavigate,
}: {
  initialQuery: string
  onClose: () => void
  onSelectHero: (heroId: string, role?: RoleKey) => void
  onNavigate: (section: SectionKey) => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [query, setQuery] = useState(initialQuery)
  const [role, setRole] = useState<RoleKey | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [recentIds] = useState(readRecentHeroes)
  const listId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
    const input = inputRef.current
    if (input) {
      input.focus()
      input.setSelectionRange(input.value.length, input.value.length)
    }
    document.documentElement.classList.add('has-modal')
    return () => document.documentElement.classList.remove('has-modal')
  }, [])

  const items = useMemo<Item[]>(() => {
    const hasQuery = Boolean(normalize(query))
    const heroItems: Item[] = searchHeroes(heroIndex, query, role).map((match) => ({
      kind: 'hero',
      key: `h-${match.hero.id}`,
      hero: match.hero,
      field: match.field,
      term: match.term,
    }))

    if (hasQuery) {
      const normalized = normalize(query)
      const sections = role ? [] : sectionItems.filter((item) => item.terms.split(' ').some((term) => term.startsWith(normalized)))
      return [...heroItems, ...sections]
    }

    const recents: Item[] = recentIds
      .map((id) => getHeroSummary(id))
      .filter((hero): hero is HeroSummary => Boolean(hero) && (!role || hero!.roles.includes(role)))
      .map((hero) => ({ kind: 'hero', key: `r-${hero.id}`, hero, field: 'nome', term: hero.name, recent: true }))
    const sorted = [...heroItems].sort((a, b) =>
      a.kind === 'hero' && b.kind === 'hero' ? a.hero.name.localeCompare(b.hero.name, 'pt-BR') : 0,
    )

    return [...recents, ...(role ? [] : sectionItems), ...sorted]
  }, [query, role, recentIds])

  const safeIndex = Math.min(activeIndex, Math.max(items.length - 1, 0))
  const active = items[safeIndex]
  const activeHero = active?.kind === 'hero' ? active.hero : undefined

  // Intenção forte: o item ativo já baixa o chunk do guia e decodifica a arte.
  useEffect(() => {
    if (!activeHero) return
    const timer = window.setTimeout(() => {
      prefetchHero(activeHero.id)
      void preloadImage(activeHero.bannerUrl)
    }, 90)
    return () => window.clearTimeout(timer)
  }, [activeHero])

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [safeIndex, items])

  const close = () => dialogRef.current?.close()

  const activate = (item: Item | undefined) => {
    if (!item) return
    if (item.kind === 'hero') {
      onSelectHero(item.hero.id, role && item.hero.roles.includes(role) ? role : undefined)
    } else {
      onNavigate(item.section)
    }
    close()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const last = items.length - 1
    const moves: Record<string, number> = {
      ArrowDown: safeIndex >= last ? 0 : safeIndex + 1,
      ArrowUp: safeIndex <= 0 ? last : safeIndex - 1,
      PageDown: Math.min(last, safeIndex + 6),
      PageUp: Math.max(0, safeIndex - 6),
    }

    if (event.key in moves) {
      event.preventDefault()
      setActiveIndex(moves[event.key])
    } else if (event.key === 'Enter') {
      event.preventDefault()
      activate(active)
    } else if (event.key === 'Tab' && !event.shiftKey && activeHero) {
      // Tab completa o nome do herói ativo no campo.
      event.preventDefault()
      setQuery(activeHero.name)
      setActiveIndex(0)
    }
  }

  const heroCount = items.filter((item) => item.kind === 'hero' && !item.recent).length
  const firstSectionIndex = items.findIndex((item) => item.kind === 'section')
  const firstAllIndex = items.findIndex((item) => item.kind === 'hero' && !item.recent)

  return (
    <dialog
      ref={dialogRef}
      className="cmdk"
      aria-label="Buscar herói"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div className="cmdk-panel">
        <div className="cmdk-field">
          <Search size={20} strokeWidth={2.2} aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActiveIndex(0)
            }}
            onKeyDown={handleKeyDown}
            placeholder="Herói, apelido, habilidade ou Team-Up…"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={active ? `${listId}-${active.key}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="go"
          />
          <button type="button" className="cmdk-close" onClick={close} aria-label="Fechar busca">
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="cmdk-filters" role="group" aria-label="Filtrar por role">
          <button type="button" className={cx('cmdk-filter', !role && 'is-active')} aria-pressed={!role} onClick={() => { setRole(null); setActiveIndex(0) }}>
            Todos
          </button>
          {selectionRoleOrder.map((option) => {
            const Icon = roleIcon[option]
            return (
              <button
                key={option}
                type="button"
                className={cx('cmdk-filter', role === option && 'is-active')}
                aria-pressed={role === option}
                onClick={() => {
                  setRole(role === option ? null : option)
                  setActiveIndex(0)
                  inputRef.current?.focus()
                }}
              >
                <Icon size={13} strokeWidth={2.4} aria-hidden="true" />
                {roleLabel[option]}
              </button>
            )
          })}
          <span className="cmdk-count" aria-live="polite">
            {heroCount === 1 ? '1 herói' : `${heroCount} heróis`}
          </span>
        </div>

        <div className="cmdk-body">
          <ul className="cmdk-list" id={listId} role="listbox" ref={listRef} aria-label="Resultados">
            {items.length === 0 ? (
              <li className="cmdk-empty" role="presentation">
                <strong>Nada com “{query}”.</strong>
                <span>Tente o nome em inglês, um apelido (Tankpool) ou uma habilidade (Mag-Cannon).</span>
                {role ? (
                  <button type="button" onClick={() => setRole(null)}>
                    Buscar em todas as roles
                  </button>
                ) : null}
              </li>
            ) : null}

            {items.map((item, index) => {
              const selected = index === safeIndex
              const group =
                index === 0 && item.kind === 'hero' && item.recent
                  ? 'Recentes'
                  : index === firstSectionIndex && !normalize(query)
                    ? 'Seções'
                    : index === firstAllIndex && !normalize(query)
                      ? 'Todos os heróis'
                      : index === firstSectionIndex
                        ? 'Seções'
                        : null

              return (
                <li key={item.key} role="presentation">
                  {group ? <span className="cmdk-group">{group}</span> : null}
                  <div
                    id={`${listId}-${item.key}`}
                    role="option"
                    aria-selected={selected}
                    className={cx('cmdk-item', selected && 'is-active', item.kind === 'section' && 'is-section')}
                    onMouseMove={() => {
                      if (!selected) setActiveIndex(index)
                    }}
                    onClick={() => activate(item)}
                    style={
                      item.kind === 'hero'
                        ? ({ '--slot-primary-rgb': item.hero.theme.primaryRgb } as CSSProperties)
                        : undefined
                    }
                  >
                    {item.kind === 'hero' ? (
                      <>
                        <span className="cmdk-thumb" aria-hidden="true">
                          <img src={item.hero.selectionPortraitUrl ?? item.hero.portraitUrl} alt="" loading="lazy" decoding="async" />
                        </span>
                        <span className="cmdk-item-copy">
                          <strong>
                            <Highlighted text={item.hero.name} query={item.field === 'nome' ? query : ''} />
                          </strong>
                          <span className="cmdk-item-sub">
                            {item.field !== 'nome' && fieldLabel[item.field] ? (
                              <span className="cmdk-why">
                                {fieldLabel[item.field]}: <Highlighted text={item.term} query={query} />
                              </span>
                            ) : (
                              item.hero.roles.map((heroRole) => roleLabel[heroRole]).join(' · ')
                            )}
                          </span>
                        </span>
                        {item.recent ? <Clock3 className="cmdk-item-end" size={15} aria-label="Recente" /> : null}
                        {selected ? <CornerDownLeft className="cmdk-item-enter" size={15} aria-hidden="true" /> : null}
                      </>
                    ) : (
                      <>
                        <span className="cmdk-thumb is-icon" aria-hidden="true">
                          <item.icon size={17} strokeWidth={2.2} />
                        </span>
                        <span className="cmdk-item-copy">
                          <strong>
                            <Highlighted text={item.label} query={query} />
                          </strong>
                          <span className="cmdk-item-sub">{item.hint}</span>
                        </span>
                        <ArrowRight className="cmdk-item-enter" size={15} aria-hidden="true" />
                      </>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>

          <aside className="cmdk-aside" aria-hidden={!activeHero}>
            {activeHero ? <HeroPreview hero={activeHero} role={role} /> : null}
          </aside>
        </div>

        <footer className="cmdk-foot" aria-hidden="true">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> navegar
          </span>
          <span>
            <kbd>Enter</kbd> abrir manual
          </span>
          <span>
            <kbd>Tab</kbd> completar
          </span>
          <span>
            <kbd>Esc</kbd> fechar
          </span>
        </footer>
      </div>
    </dialog>
  )
}
