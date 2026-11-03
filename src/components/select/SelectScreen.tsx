import { type CSSProperties, type MouseEvent, useMemo, useState } from 'react'
import { ArrowRight, Search, Trophy } from 'lucide-react'
import type { RoleKey } from '../../types'
import { heroIndex } from '../../data/heroIndex'
import { prefetchHero } from '../../data/heroLoader'
import { pluralize, firstSentence } from '../../lib/text'
import { roleIcon, roleLabel, selectionRoleOrder } from '../../lib/roles'
import { heroPath, rankingPath, type SectionKey } from '../../lib/routes'
import { searchHeroes } from '../../lib/search'
import { cx } from '../../lib/cx'
import { Topbar } from '../shell/Topbar'
import { SectionNav } from '../shell/SectionNav'
import { HeroTile } from './HeroTile'
import { RichText } from '../ui/RichText'
import { getHeroRoleEntry, rankings } from '../../lib/rankings'

const percent = (value: number) =>
  `${value.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`

/**
 * Tela de manuais: filtro local, grade por role (ordenada pelo meta) e painel
 * fixo com o resumo do herói em foco.
 */
export function SelectScreen({
  onSelect,
  onNavigate,
}: {
  onSelect: (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => void
  onNavigate: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  const [query, setQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState<RoleKey | null>(null)
  const [focused, setFocused] = useState<{ id: string; role: RoleKey }>({ id: heroIndex[0].id, role: heroIndex[0].roles[0] })
  const [armedKey, setArmedKey] = useState<string | null>(null)

  const filteredIds = useMemo(() => new Set(searchHeroes(heroIndex, query).map((match) => match.hero.id)), [query])

  const groups = useMemo(
    () =>
      selectionRoleOrder
        .filter((role) => !roleFilter || role === roleFilter)
        .map((role) => ({
          role,
          total: heroIndex.filter((hero) => hero.roles.includes(role)).length,
          heroes: heroIndex
            .filter((hero) => hero.roles.includes(role) && filteredIds.has(hero.id))
            .sort((a, b) => (getHeroRoleEntry(a.id, role)?.rank ?? 999) - (getHeroRoleEntry(b.id, role)?.rank ?? 999)),
        }))
        .filter((group) => group.heroes.length > 0),
    [filteredIds, roleFilter],
  )

  const focusedHero = heroIndex.find((hero) => hero.id === focused.id) ?? heroIndex[0]
  const focusedRole = focusedHero.roles.includes(focused.role) ? focused.role : focusedHero.roles[0]
  const focusedMeta = getHeroRoleEntry(focusedHero.id, focusedRole)
  const shown = new Set(groups.flatMap((group) => group.heroes.map((hero) => hero.id))).size

  return (
    <main className="app-shell select-shell">
      <Topbar sections={<SectionNav active="manuais" onNavigate={onNavigate} />} />

      <div className="page screen select">
        <header className="screen-heading">
          <h1>Manuais</h1>
          <p>
            {pluralize(heroIndex.length, 'briefing de herói', 'briefings de herói')}: o que fazer primeiro, por que ganha a
            próxima luta e quando trocar a ordem. Cada role está ordenada pela posição no meta.
          </p>
        </header>

        <div className="select-tools">
          <label className="filter-field">
            <Search size={18} strokeWidth={2.4} aria-hidden="true" />
            <span className="sr-only">Filtrar manuais</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filtrar por nome, apelido ou habilidade"
              type="search"
              autoComplete="off"
              spellCheck={false}
            />
          </label>
          <div className="segmented" role="group" aria-label="Filtrar por role">
            <button type="button" className={cx(!roleFilter && 'is-active')} aria-pressed={!roleFilter} onClick={() => setRoleFilter(null)}>
              Todas
            </button>
            {selectionRoleOrder.map((role) => {
              const Icon = roleIcon[role]
              return (
                <button
                  key={role}
                  type="button"
                  className={cx(roleFilter === role && 'is-active')}
                  aria-pressed={roleFilter === role}
                  onClick={() => setRoleFilter(roleFilter === role ? null : role)}
                >
                  <Icon size={14} strokeWidth={2.4} aria-hidden="true" />
                  {roleLabel[role]}
                </button>
              )
            })}
          </div>
          <span className="select-count" aria-live="polite">
            {pluralize(shown, 'herói', 'heróis')}
          </span>
        </div>

        <div className="select-stage">
          <div className="select-board">
            {groups.map((group) => {
              const RoleIcon = roleIcon[group.role]

              return (
                <section className="select-role" key={group.role} aria-labelledby={`select-role-${group.role}`}>
                  <header className="select-role-head">
                    <RoleIcon size={18} strokeWidth={2.4} aria-hidden="true" />
                    <h2 id={`select-role-${group.role}`}>{roleLabel[group.role]}</h2>
                    <span>
                      {group.heroes.length === group.total
                        ? pluralize(group.total, 'herói', 'heróis')
                        : `${group.heroes.length} de ${group.total}`}
                    </span>
                  </header>

                  <div className="select-role-grid">
                    {group.heroes.map((hero) => {
                      const key = `${group.role}-${hero.id}`
                      return (
                        <HeroTile
                          hero={hero}
                          key={key}
                          role={group.role}
                          focused={hero.id === focusedHero.id && group.role === focusedRole}
                          armed={key === armedKey}
                          onSelect={onSelect}
                          onFocus={(id) => setFocused({ id, role: group.role })}
                          onArm={() => setArmedKey(key)}
                        />
                      )
                    })}
                  </div>
                </section>
              )
            })}

            {groups.length === 0 ? (
              <div className="select-empty">
                <strong>Nenhum manual para “{query}”.</strong>
                <span>Tente o nome em inglês, um apelido ou uma habilidade.</span>
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                    setRoleFilter(null)
                  }}
                >
                  Limpar filtros
                </button>
              </div>
            ) : null}
          </div>

          <aside
            className="select-intel"
            aria-label={`Resumo do manual de ${focusedHero.name}`}
            style={
              {
                '--slot-primary-rgb': focusedHero.theme.primaryRgb,
                '--slot-secondary-rgb': focusedHero.theme.secondaryRgb,
              } as CSSProperties
            }
          >
            <div className="select-intel-art" aria-hidden="true" key={focusedHero.id}>
              <img src={focusedHero.bannerUrl} alt="" decoding="async" />
            </div>
            <div className="select-intel-copy">
              <span className="select-intel-role">
                {roleLabel[focusedRole]}
                {focusedHero.nicknames[focusedRole] ? ` · ${focusedHero.nicknames[focusedRole]}` : null}
              </span>
              <h2>{focusedHero.name}</h2>
              <p className="select-intel-hook">
                <RichText text={firstSentence(focusedHero.hook, 200)} />
              </p>
              <dl className="select-intel-stats">
                <div>
                  <dt>Meta</dt>
                  <dd>
                    {focusedMeta ? (
                      <a href={rankingPath()} onClick={(event) => onNavigate('ranking', event)} title={`Ranking · ${rankings.season}`}>
                        <Trophy size={13} aria-hidden="true" />#{focusedMeta.rank}{' '}
                        <span data-tier={focusedMeta.tier}>Tier {focusedMeta.tier}</span>
                      </a>
                    ) : (
                      '—'
                    )}
                  </dd>
                </div>
                <div>
                  <dt>Vitórias</dt>
                  <dd>{focusedMeta ? percent(focusedMeta.winRate) : '—'}</dd>
                </div>
                <div>
                  <dt>Fontes</dt>
                  <dd>{focusedHero.sourceCount}</dd>
                </div>
                <div>
                  <dt>Verificado</dt>
                  <dd>{focusedHero.lastVerified.split('-').reverse().join('/')}</dd>
                </div>
              </dl>
              <a
                className="button-primary"
                href={heroPath(focusedHero.id)}
                onClick={(event) => onSelect(focusedHero.id, event, focusedRole)}
                onPointerEnter={() => prefetchHero(focusedHero.id)}
              >
                Abrir manual
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
