import { type CSSProperties, type MouseEvent, useMemo, useState } from 'react'
import { Database, Search, Trophy } from 'lucide-react'
import type { HeroGuide, RoleKey } from '../../types'
import { pluralize, firstSentence } from '../../lib/text'
import { roleIcon, roleLabel, selectionRoleOrder } from '../../lib/roles'
import { baseUrl, rankingPath, type SectionKey } from '../../lib/routes'
import { Topbar } from '../shell/Topbar'
import { SectionNav } from '../shell/SectionNav'
import { HeroTile } from './HeroTile'
import { RichText } from '../ui/RichText'
import { StatGrid } from '../ui/StatGrid'
import { getHeroRankingEntry, rankings } from '../../lib/rankings'

function SearchBox({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <label className="search-box">
      <Search aria-hidden="true" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Buscar personagem, role ou apelido…"
        type="search"
      />
    </label>
  )
}

/**
 * Tela de manuais: busca, grid de personagens por role, preview e resumo do guia.
 */
export function SelectScreen({
  heroes,
  query,
  onQueryChange,
  onSelect,
  onNavigate,
}: {
  heroes: HeroGuide[]
  query: string
  onQueryChange: (value: string) => void
  onSelect: (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => void
  onNavigate: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  const [focusedHeroId, setFocusedHeroId] = useState(heroes[0]?.id ?? '')

  const filteredHeroes = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return heroes
    }

    return heroes.filter((hero) => {
      const haystack = [hero.name, hero.game, ...hero.aliases, ...hero.roles.map((role) => roleLabel[role])]
        .join(' ')
        .toLowerCase()

      return haystack.includes(normalized)
    })
  }, [heroes, query])

  const groupedHeroes = useMemo(
    () =>
      selectionRoleOrder
        .map((role) => ({
          role,
          heroes: filteredHeroes
            .filter((hero) => hero.roles.includes(role))
            .sort((a, b) => {
              const rankA = getHeroRankingEntry(a.id, role)?.rank ?? 999
              const rankB = getHeroRankingEntry(b.id, role)?.rank ?? 999
              return rankA - rankB
            }),
        }))
        .filter((group) => group.heroes.length > 0),
    [filteredHeroes],
  )

  const focusedHero = heroes.find((hero) => hero.id === focusedHeroId) ?? filteredHeroes[0] ?? heroes[0]
  const focusedRole = focusedHero.roles[0]
  const focusedGuide = focusedHero.roleGuides[focusedRole]
  const focusedMeta = getHeroRankingEntry(focusedHero.id, focusedRole)

  return (
    <main className="app-shell select-shell">
      <Topbar
        center={<SearchBox value={query} onChange={onQueryChange} />}
        nav={<SectionNav active="manuais" onNavigate={onNavigate} />}
        actions={
          <>
            <span className="meta-pill" title="Guias com fontes rastreáveis">
              <Database size={15} aria-hidden="true" />
              {pluralize(heroes.length, 'guia rastreável', 'guias rastreáveis')}
            </span>
            <a
              className="meta-pill"
              href={rankingPath()}
              onClick={(event) => onNavigate('ranking', event)}
              title="Ver o meta ranqueado da temporada"
            >
              <Trophy size={15} aria-hidden="true" />
              Ranking
            </a>
          </>
        }
      />

      <section className="select-screen" aria-label="Escolha de personagem">
        <header className="select-heading">
          <p className="kicker">Biblioteca de manuais</p>
          <h1>Manuais</h1>
          <p>Encontre o herói, entre no guia e foque no que ganha a próxima luta.</p>
        </header>

        <div className="select-stage">
          <aside className="select-preview" aria-label="Personagem em foco">
            <img src={focusedHero.portraitUrl} alt="" />
            <div className="select-preview-copy">
              <p className="kicker">Atual</p>
              <h2>{focusedHero.name}</h2>
              <span>{focusedHero.roles.map((role) => roleLabel[role]).join(' / ')}</span>
            </div>
          </aside>

          <div className="select-board" aria-label="Personagens agrupados por classe">
            {groupedHeroes.map((group) => {
              const RoleIcon = roleIcon[group.role]

              return (
                <section className="select-role" key={group.role} aria-labelledby={`select-role-${group.role}`}>
                  <div className="select-role-head">
                    <span className="select-role-title">
                      <RoleIcon size={17} strokeWidth={2.4} aria-hidden="true" />
                      <h2 id={`select-role-${group.role}`}>{roleLabel[group.role]}</h2>
                    </span>
                    <span className="select-role-count">
                      {pluralize(group.heroes.length, 'herói', 'heróis')}
                    </span>
                  </div>

                  <div className="select-role-grid">
                    {group.heroes.map((hero) => (
                      <HeroTile
                        hero={hero}
                        key={`${group.role}-${hero.id}`}
                        role={group.role}
                        focused={hero.id === focusedHero.id}
                        onSelect={onSelect}
                        onFocus={setFocusedHeroId}
                      />
                    ))}
                  </div>
                </section>
              )
            })}

            {filteredHeroes.length === 0 ? (
              <p className="select-empty">Nenhum personagem encontrado para “{query}”.</p>
            ) : null}
          </div>

          <aside
            className="select-intel"
            aria-label="Resumo do guia"
            style={{ '--intel-image': `url(${focusedHero.bannerUrl})` } as CSSProperties}
          >
            <div className="select-intel-copy">
              <div className="select-intel-head-row">
                <p className="kicker">Guia</p>
                {focusedMeta ? (
                  <a
                    className="select-intel-meta-chip"
                    href={rankingPath()}
                    onClick={(event) => onNavigate('ranking', event)}
                    title={`Ver ${focusedHero.name} no ranking ranqueado · ${rankings.season}`}
                  >
                    <Trophy size={13} aria-hidden="true" />
                    <span>#{focusedMeta.rank}</span>
                    <span className="select-intel-meta-tier" data-tier={focusedMeta.tier}>
                      Tier {focusedMeta.tier}
                    </span>
                  </a>
                ) : null}
              </div>
              <h2>{focusedHero.name}</h2>
              <p className="select-intel-hook">
                <RichText text={firstSentence(focusedHero.coreRead[0] ?? focusedHero.confidenceSummary, 210)} />
              </p>
            </div>
            <div className="select-intel-foot">
              <StatGrid
                variant="inline"
                items={[
                  {
                    label: 'Meta',
                    value: focusedMeta ? `#${focusedMeta.rank} (${focusedMeta.tier})` : '—',
                  },
                  {
                    label: 'Vitórias',
                    value: focusedMeta
                      ? `${focusedMeta.winRate.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`
                      : '—',
                  },
                  { label: 'Fontes', value: focusedHero.sources.length },
                  { label: 'Verificado', value: focusedHero.lastVerified },
                ]}
              />
              {focusedGuide ? (
                <a
                  className="select-intel-cta"
                  href={`${baseUrl()}herois/${focusedHero.id}`}
                  onClick={(event) => onSelect(focusedHero.id, event, focusedRole)}
                >
                  Abrir guia completo
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
