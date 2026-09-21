import { type CSSProperties, type MouseEvent, useMemo, useState } from 'react'
import { Database, Eye, Search } from 'lucide-react'
import type { HeroGuide, RoleKey } from '../../types'
import { pluralize, firstSentence } from '../../lib/text'
import { roleIcon, roleLabel, selectionRoleOrder } from '../../lib/roles'
import { baseUrl } from '../../lib/routes'
import { Topbar } from '../shell/Topbar'
import { HeroTile } from './HeroTile'
import { RankingsBoard } from '../rankings/RankingsBoard'
import { RichText } from '../ui/RichText'
import { StatGrid } from '../ui/StatGrid'

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
 * Tela de seleção: busca, grid de personagens por role, preview e resumo do guia.
 */
export function SelectScreen({
  heroes,
  query,
  onQueryChange,
  onSelect,
  onOpenRumors,
}: {
  heroes: HeroGuide[]
  query: string
  onQueryChange: (value: string) => void
  onSelect: (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => void
  onOpenRumors: () => void
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
          heroes: filteredHeroes.filter((hero) => hero.roles.includes(role)),
        }))
        .filter((group) => group.heroes.length > 0),
    [filteredHeroes],
  )

  const focusedHero = heroes.find((hero) => hero.id === focusedHeroId) ?? filteredHeroes[0] ?? heroes[0]
  const focusedGuide = focusedHero.roleGuides[focusedHero.roles[0]]

  return (
    <main className="app-shell select-shell">
      <Topbar
        center={<SearchBox value={query} onChange={onQueryChange} />}
        actions={
          <>
            <span className="meta-pill" title="Guias com fontes rastreáveis">
              <Database size={15} aria-hidden="true" />
              {pluralize(heroes.length, 'guia rastreável', 'guias rastreáveis')}
            </span>
            <button className="rumors-cta" type="button" onClick={onOpenRumors} title="Ver rumores de próximos heróis (especulação)">
              <Eye size={15} aria-hidden="true" />
              Rumores
            </button>
          </>
        }
      />

      <section className="select-screen" aria-label="Escolha de personagem">
        <header className="select-heading">
          <p className="kicker">Menu principal</p>
          <h1>Escolha seu personagem</h1>
          <p>Encontre o herói, entre no guia e foque no que ganha a próxima luta.</p>
        </header>

        <RankingsBoard onSelectHero={onSelect} />

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
              <p className="kicker">Guia</p>
              <h2>{focusedHero.name}</h2>
              <p className="select-intel-hook">
                <RichText text={firstSentence(focusedHero.coreRead[0] ?? focusedHero.confidenceSummary, 210)} />
              </p>
            </div>
            <div className="select-intel-foot">
              <StatGrid
                variant="inline"
                items={[
                  { label: 'Fontes', value: focusedHero.sources.length },
                  { label: 'Verificado', value: focusedHero.lastVerified },
                ]}
              />
              {focusedGuide ? (
                <a
                  className="select-intel-cta"
                  href={`${baseUrl()}herois/${focusedHero.id}`}
                  onClick={(event) => onSelect(focusedHero.id, event, focusedHero.roles[0])}
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
