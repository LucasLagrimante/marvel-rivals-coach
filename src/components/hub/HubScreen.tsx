import { useEffect, useMemo, useState, type CSSProperties, type MouseEvent } from 'react'
import { ArrowRight, ArrowUpRight, Eye, Search } from 'lucide-react'
import { heroIndex, getHeroSummary } from '../../data/heroIndex'
import { rankings } from '../../data/rankings'
import { rumors } from '../../data/rumors'
import type { HeroSummary, RoleKey } from '../../types'
import { roleIcon, roleLabel } from '../../lib/roles'
import { getGuide } from '../../lib/guides'
import { firstSentence, pluralize } from '../../lib/text'
import { heroPath, manualsPath, rankingPath, rumorsPath, type SectionKey } from '../../lib/routes'
import { readRecentHeroes } from '../../lib/search'
import { prefetchHero } from '../../data/heroLoader'
import { warmMedia } from '../../lib/assetCache'
import { shortcutLabel, useSearch } from '../../context/searchState'
import { Topbar } from '../shell/Topbar'
import { SectionNav } from '../shell/SectionNav'
import { HeroTile } from '../select/HeroTile'
import { RichText } from '../ui/RichText'
import '../../styles/hub.css'

function formatDate(value: string) {
  const [year, month, day] = value.split('-')
  return year && month && day ? `${day}/${month}/${year}` : value
}

const percent = (value: number) =>
  `${value.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`

/** Termos que aparecem "sendo digitados" no campo da home — mostram o que a busca entende. */
const TYPED_HINTS = ['Magneto', 'Tankpool', 'Mag-Cannon', 'Estrategista', 'Elsa Bloodstone', 'Web-Swing', 'Hela']

/** Placeholder que digita e apaga sugestões; estático com movimento reduzido. */
function TypedHint() {
  const [state, setState] = useState({ word: 0, length: 0, deleting: false })
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (reduced) return
    const word = TYPED_HINTS[state.word]
    const atEnd = !state.deleting && state.length === word.length
    const atStart = state.deleting && state.length === 0
    const delay = atEnd ? 1500 : atStart ? 280 : state.deleting ? 38 : 80

    const timer = window.setTimeout(() => {
      setState((current) => {
        if (atEnd) return { ...current, deleting: true }
        if (atStart) return { word: (current.word + 1) % TYPED_HINTS.length, length: 0, deleting: false }
        return { ...current, length: current.length + (current.deleting ? -1 : 1) }
      })
    }, delay)

    return () => window.clearTimeout(timer)
  }, [state, reduced])

  const text = reduced ? TYPED_HINTS[0] : TYPED_HINTS[state.word].slice(0, state.length)

  return (
    <span className="hub-search-hint" aria-hidden="true">
      {text}
      <span className="hub-caret" />
    </span>
  )
}

/**
 * Início: a pergunta da partida ("quem entra?"), a busca como ação principal,
 * o manual mais recente, o topo do meta por role e o elenco inteiro a um clique.
 */
export function HubScreen({
  onNavigate,
  onSelectHero,
}: {
  onNavigate: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void
  onSelectHero: (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => void
}) {
  const { openSearch } = useSearch()
  const [shortcut] = useState(shortcutLabel)
  const [recent] = useState(() =>
    readRecentHeroes()
      .map((id) => getHeroSummary(id))
      .filter((hero): hero is HeroSummary => Boolean(hero))
      .slice(0, 4),
  )
  const [focusedId, setFocusedId] = useState<string | null>(null)
  const [armedId, setArmedId] = useState<string | null>(null)

  const newest = heroIndex[heroIndex.length - 1]
  const roster = useMemo(() => [...heroIndex].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR')), [])
  const pendingRumors = rumors.filter((rumor) => rumor.status === 'aguardando-definicao').length

  // Retratos do elenco entram no cache em idle: a próxima visita abre sem rede.
  useEffect(() => {
    warmMedia(heroIndex.map((hero) => hero.selectionPortraitUrl))
  }, [])

  return (
    <main className="app-shell hub-shell">
      <Topbar sections={<SectionNav active="menu" onNavigate={onNavigate} />} />

      <div className="page hub">
        <section className="hub-hero" aria-labelledby="hub-title">
          <div className="hub-ask">
            <h1 id="hub-title">
              Quem entra na <span>próxima luta?</span>
            </h1>
            <p className="hub-lede">
              {pluralize(heroIndex.length, 'manual', 'manuais')} com o que o jogo não ensina: cancelamentos, janelas de
              ultimate, Team-Ups e counters. Comece a digitar em qualquer lugar — a busca abre sozinha.
            </p>

            <button type="button" className="hub-search" onClick={() => openSearch()} aria-label={`Buscar herói (${shortcut})`}>
              <Search size={22} strokeWidth={2.4} aria-hidden="true" />
              <TypedHint />
              <kbd>{shortcut}</kbd>
            </button>

            {recent.length ? (
              <div className="hub-recent">
                <span>Continuar</span>
                {recent.map((hero) => (
                  <a
                    key={hero.id}
                    href={heroPath(hero.id)}
                    onClick={(event) => onSelectHero(hero.id, event)}
                    onPointerEnter={() => prefetchHero(hero.id)}
                    className="hub-recent-chip"
                  >
                    <img src={hero.selectionPortraitUrl ?? hero.portraitUrl} alt="" width={28} height={28} decoding="async" />
                    {hero.name}
                  </a>
                ))}
              </div>
            ) : (
              <div className="hub-recent">
                <span>Experimente</span>
                {['Tankpool', 'Mag-Cannon', 'com Hulk'].map((term) => (
                  <button key={term} type="button" className="hub-recent-chip is-term" onClick={() => openSearch(term)}>
                    {term}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            className="hub-feature"
            href={heroPath(newest.id)}
            onClick={(event) => onSelectHero(newest.id, event, newest.roles[0])}
            onPointerEnter={() => prefetchHero(newest.id)}
            style={{ '--slot-primary-rgb': newest.theme.primaryRgb, '--slot-secondary-rgb': newest.theme.secondaryRgb } as CSSProperties}
          >
            <span className="hub-feature-art" aria-hidden="true">
              <img src={newest.bannerUrl} alt="" fetchPriority="high" decoding="async" />
            </span>
            <span className="hub-feature-copy">
              <span className="hub-feature-tag">Manual mais recente · {formatDate(newest.lastVerified)}</span>
              <strong>{newest.name}</strong>
              <span className="hub-feature-hook">
                <RichText text={firstSentence(newest.hook, 140)} />
              </span>
              <span className="hub-feature-cta">
                Abrir manual
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            </span>
          </a>
        </section>

        <section className="hub-block" aria-labelledby="hub-meta-title">
          <header className="hub-block-head">
            <h2 id="hub-meta-title">Topo do meta</h2>
            <p>
              {rankings.season} · atualizado em {formatDate(rankings.updatedAt)} · dados{' '}
              <a href={rankings.source.url} target="_blank" rel="noreferrer">
                {rankings.source.name}
              </a>
            </p>
            <a className="hub-block-link" href={rankingPath()} onClick={(event) => onNavigate('ranking', event)}>
              Ranking completo
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </header>

          <div className="hub-meta">
            {rankings.categories.map((category) => {
              const Icon = roleIcon[category.role]

              return (
                <div className="hub-meta-col" key={category.role}>
                  <h3>
                    <Icon size={16} strokeWidth={2.4} aria-hidden="true" />
                    {roleLabel[category.role]}
                  </h3>
                  <ol>
                    {category.entries.slice(0, 3).map((entry) => {
                      const guide = getGuide(entry.guideId ?? entry.slug)
                      const body = (
                        <>
                          <span className="hub-meta-rank">{entry.rank}</span>
                          <img src={entry.portraitUrl} alt="" loading="lazy" decoding="async" width={48} height={48} />
                          <span className="hub-meta-name">
                            <strong>{entry.name}</strong>
                            <span>
                              {percent(entry.winRate)} vitórias · {percent(entry.pickRate)} pick
                            </span>
                          </span>
                          <span className="hub-meta-tier" data-tier={entry.tier}>
                            {entry.tier}
                          </span>
                        </>
                      )

                      return (
                        <li key={entry.slug}>
                          {guide ? (
                            <a
                              className="hub-meta-row"
                              href={heroPath(guide.id)}
                              onClick={(event) => onSelectHero(guide.id, event, category.role)}
                              onPointerEnter={() => prefetchHero(guide.id)}
                            >
                              {body}
                            </a>
                          ) : (
                            <a className="hub-meta-row" href={rankingPath()} onClick={(event) => onNavigate('ranking', event)}>
                              {body}
                            </a>
                          )}
                        </li>
                      )
                    })}
                  </ol>
                </div>
              )
            })}
          </div>
        </section>

        <section className="hub-block" aria-labelledby="hub-roster-title">
          <header className="hub-block-head">
            <h2 id="hub-roster-title">Elenco</h2>
            <p>{pluralize(heroIndex.length, 'manual publicado', 'manuais publicados')}. Passe o mouse para ver em ação.</p>
            <a className="hub-block-link" href={manualsPath()} onClick={(event) => onNavigate('manuais', event)}>
              Ver por role
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </header>

          <div className="hub-roster">
            {roster.map((hero) => (
              <HeroTile
                key={hero.id}
                hero={hero}
                role={hero.roles[0]}
                focused={hero.id === focusedId}
                armed={hero.id === armedId}
                onSelect={onSelectHero}
                onFocus={setFocusedId}
                onArm={setArmedId}
                showRank={false}
                showRole={false}
              />
            ))}
          </div>
        </section>

        <a className="hub-rumors" href={rumorsPath()} onClick={(event) => onNavigate('rumores', event)}>
          <Eye size={20} aria-hidden="true" />
          <span className="hub-rumors-copy">
            <strong>Rumores</strong>
            <span>
              {pluralize(rumors.length, 'rumor catalogado', 'rumores catalogados')} —{' '}
              {pluralize(pendingRumors, 'candidato em investigação', 'candidatos em investigação')}. Especulação fica
              separada dos manuais.
            </span>
          </span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>

        <footer className="site-foot">
          <span>Rivals Coach — coaching em português para Marvel Rivals.</span>
          <span>
            Atalhos: <kbd>{shortcut}</kbd> ou <kbd>/</kbd> para buscar
          </span>
        </footer>
      </div>
    </main>
  )
}
