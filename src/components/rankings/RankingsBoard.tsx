import { useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { rankings } from '../../data/rankings'
import { roleIcon, roleLabel } from '../../lib/roles'
import { heroPath } from '../../lib/routes'
import { Chip } from '../ui/Chip'
import type { RankingEntry, RoleKey } from '../../types'
import './RankingsBoard.css'

const DEFAULT_VISIBLE = 5
const MEDALS = ['ouro', 'prata', 'bronze']

function formatPercent(value: number) {
  return `${value.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`
}

function formatCount(value: number) {
  return value.toLocaleString('pt-BR')
}

function formatUpdatedAt(value: string) {
  const [year, month, day] = value.split('-')
  return year && month && day ? `${day}/${month}/${year}` : value
}

function RankingRow({
  entry,
  role,
  onSelectHero,
}: {
  entry: RankingEntry
  role: RoleKey
  onSelectHero: (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => void
}) {
  const medal = entry.rank <= MEDALS.length ? MEDALS[entry.rank - 1] : undefined
  const style = { '--rating': entry.rating } as CSSProperties

  const content = (
    <>
      <span className="ranking-position">{entry.rank}</span>
      <span className="ranking-portrait">
        <img src={entry.portraitUrl} alt="" loading="lazy" />
      </span>
      <span className="ranking-copy">
        <strong>{entry.name}</strong>
        {entry.gameName !== entry.name && <small>{entry.gameName}</small>}
        <span
          className="ranking-stats"
          title={`Amostra: ${formatCount(entry.matches)} partidas ranqueadas`}
        >
          Vitória {formatPercent(entry.winRate)} · Pick {formatPercent(entry.pickRate)}
        </span>
      </span>
      <span className="ranking-tier" data-tier={entry.tier} title={`Tier ${entry.tier} no meta`}>
        {entry.tier}
      </span>
      <span className="ranking-rating">
        <strong>{entry.rating}</strong>
        <small>rating</small>
      </span>
    </>
  )

  if (!entry.guideId) {
    return (
      <li className="ranking-row" data-medal={medal} style={style} title={`${entry.name}: guia ainda não disponível no app`}>
        <span className="ranking-row-body">{content}</span>
      </li>
    )
  }

  return (
    <li className="ranking-row is-linked" data-medal={medal} style={style}>
      <a
        className="ranking-row-body"
        href={heroPath(entry.guideId)}
        onClick={(event) => onSelectHero(entry.guideId!, event, role)}
        title={`Abrir guia de ${entry.name}`}
      >
        {content}
      </a>
    </li>
  )
}

function RankingColumn({
  role,
  entries,
  onSelectHero,
}: {
  role: RoleKey
  entries: RankingEntry[]
  onSelectHero: (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const Icon = roleIcon[role]
  const visible = expanded ? entries : entries.slice(0, DEFAULT_VISIBLE)

  return (
    <article className="rankings-column">
      <header className="rankings-column-head">
        <Icon size={17} strokeWidth={2.4} aria-hidden="true" />
        <h3>{roleLabel[role]}</h3>
        <span className="rankings-column-count">{formatCount(entries.length)} heróis</span>
      </header>

      <ol className="rankings-list">
        {visible.map((entry) => (
          <RankingRow key={`${role}-${entry.slug}`} entry={entry} role={role} onSelectHero={onSelectHero} />
        ))}
      </ol>

      {entries.length > DEFAULT_VISIBLE && (
        <button
          className="rankings-more"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          <ChevronDown size={15} aria-hidden="true" className={expanded ? 'is-flipped' : undefined} />
          {expanded ? 'Mostrar menos' : `Mostrar todos os ${formatCount(entries.length)}`}
        </button>
      )}
    </article>
  )
}

/**
 * Ranking de personagens da temporada, em um grid por categoria (role).
 * Dados fixados em `src/data/rankings.ts` — atualize com `scripts/update_rankings.py`.
 */
export function RankingsBoard({
  onSelectHero,
}: {
  onSelectHero: (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => void
}) {
  const total = rankings.categories.reduce((sum, category) => sum + category.entries.length, 0)
  const linked = rankings.categories.reduce(
    (sum, category) => sum + category.entries.filter((entry) => entry.guideId).length,
    0,
  )

  return (
    <section className="panel panel-system rankings-panel" aria-labelledby="rankings-title">
      <header className="section-head rankings-head">
        <div className="section-head-copy">
          <p className="kicker">Meta ranqueado</p>
          <h2 className="rankings-title" id="rankings-title">
            Ranking de personagens
          </h2>
          <p className="section-head-desc">
            {rankings.scope} · {rankings.season}
            {rankings.updatedAt ? ` · atualizado em ${formatUpdatedAt(rankings.updatedAt)}` : ''}
          </p>
        </div>

        <div className="rankings-legend">
          <div className="rankings-chips">
            <Chip tone="soft">{formatCount(linked)} com guia no app</Chip>
            <Chip>{formatCount(total)} ranqueados</Chip>
          </div>
          <p>
            Rating de 0 a 100 pela taxa de vitória ajustada por amostra (50 = equilíbrio).{' '}
            <a href={rankings.source.url} target="_blank" rel="noreferrer">
              Fonte: {rankings.source.name}
            </a>
          </p>
        </div>
      </header>

      <div className="rankings-grid">
        {rankings.categories.map((category) => (
          <RankingColumn
            key={category.role}
            role={category.role}
            entries={category.entries}
            onSelectHero={onSelectHero}
          />
        ))}
      </div>
    </section>
  )
}
