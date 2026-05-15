import { type MouseEvent, useCallback, useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  Database,
  Gauge,
  Layers3,
  Library,
  Monitor,
  Gamepad2,
  Search,
  Shield,
  Sparkles,
  Swords,
  Target,
  Video,
  Zap,
} from 'lucide-react'
import './App.css'
import { heroes } from './data/heroes'
import { usePlatform } from './context/platformState'
import { resolveInput, getSpellControl } from './data/platformControls'
import type { Platform } from './data/platformControls'
import type { HeroGuide, RoleGuide, RoleKey, SourceKind, UpgradeStep } from './types'

const roleIcon: Record<RoleKey, typeof Shield> = {
  vanguard: Shield,
  duelist: Swords,
  strategist: Sparkles,
}

const sourceIcon: Record<SourceKind, typeof Database> = {
  official: BadgeCheck,
  database: Database,
  guide: BookOpen,
  forum: Library,
  'video-transcript': Video,
}

const roleLabel: Record<RoleKey, string> = {
  vanguard: 'Vanguarda',
  duelist: 'Duelista',
  strategist: 'Estrategista',
}

const selectionRoleOrder: RoleKey[] = ['vanguard', 'duelist', 'strategist']

const appBasePath = import.meta.env.BASE_URL

function baseUrl() {
  return appBasePath.endsWith('/') ? appBasePath : `${appBasePath}/`
}

function menuPath() {
  return baseUrl()
}

function heroPath(heroId: string) {
  return `${baseUrl()}herois/${encodeURIComponent(heroId)}`
}

function routePath(pathname = window.location.pathname) {
  const base = baseUrl().replace(/\/$/, '')

  if (base && pathname === base) {
    return '/'
  }

  if (base && pathname.startsWith(`${base}/`)) {
    return pathname.slice(base.length) || '/'
  }

  return pathname || '/'
}

// Substitui tokens [key:TOKEN] em strings de texto por badges dinâmicos de plataforma.
// Use em qualquer campo de texto (facts, mechanics, drills, why, execution, steps…)
// que possa conter referências de tecla. Sem tokens, retorna a string original intacta.
function renderInlineKeys(text: string, platform: Platform): React.ReactNode {
  const parts: React.ReactNode[] = []
  const tokenPattern = /\[key:([^\]]+)\]|\b(LMB|RMB|Shift|Melee)\b/g
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = tokenPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    parts.push(
      <span key={`${match.index}-${match[0]}`} className="control-badge">
        {resolveInput(match[1] ?? match[2], platform)}
      </span>,
    )
    lastIndex = tokenPattern.lastIndex
  }

  if (parts.length === 0) return text
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts
}

function heroIdFromRoute(pathname = window.location.pathname) {
  const [section, heroId] = routePath(pathname).replace(/^\/+|\/+$/g, '').split('/')

  if (section !== 'herois' || !heroId) {
    return null
  }

  const decodedHeroId = decodeURIComponent(heroId)
  return heroes.some((hero) => hero.id === decodedHeroId) ? decodedHeroId : null
}

function displayConfidence(confidence: string) {
  return {
    media: 'média',
    alta: 'alta',
    'em disputa': 'em disputa',
    pendente: 'pendente',
  }[confidence] ?? confidence
}

function sourceLabel(kind: SourceKind) {
  return {
    official: 'Oficial',
    database: 'Database',
    guide: 'Guia',
    forum: 'Fórum',
    'video-transcript': 'Vídeo',
  }[kind]
}

function heroThemeStyle(hero: HeroGuide) {
  return {
    '--theme-primary': hero.theme.primary,
    '--theme-primary-rgb': hero.theme.primaryRgb,
    '--theme-secondary': hero.theme.secondary,
    '--theme-secondary-rgb': hero.theme.secondaryRgb,
    '--theme-surface': hero.theme.surface,
    '--theme-surface-rgb': hero.theme.surfaceRgb,
    '--accent-red': hero.theme.primary,
    '--accent-cyan': hero.theme.secondary,
  } as React.CSSProperties
}

function BrandMark() {
  return (
    <img className="brand-mark" src={`${baseUrl()}favicon.ico?v=4`} alt="" aria-hidden="true" />
  )
}

function AppBrand() {
  return (
    <div className="brand">
      <BrandMark />
      <div className="brand-copy">
        <p className="brand-eyebrow">Next fight</p>
        <p className="brand-title">Rivals Coach</p>
      </div>
    </div>
  )
}

const platformOptions: { id: Platform; label: string; sub: string; Icon: typeof Monitor }[] = [
  { id: 'pc', label: 'PC', sub: 'Teclado/Mouse', Icon: Monitor },
  { id: 'playstation', label: 'PS5', sub: 'DualSense', Icon: Gamepad2 },
  { id: 'xbox', label: 'Xbox', sub: 'Controller', Icon: Gamepad2 },
]

function PlatformSelector() {
  const { platform, setPlatform } = usePlatform()
  return (
    <div className="platform-selector" role="group" aria-label="Plataforma de controle">
      <span className="platform-selector-label">Plataforma</span>
      {platformOptions.map(({ id, label, sub, Icon }) => (
        <button
          key={id}
          className={`platform-btn ${platform === id ? 'is-active' : ''}`}
          onClick={() => setPlatform(id as Platform)}
          type="button"
          aria-pressed={platform === id}
          title={`Mostrar controles para ${label}`}
        >
          <Icon size={16} strokeWidth={2} className="platform-btn-icon" />
          <span className="platform-btn-text">
            <span className="platform-btn-name">{label}</span>
            <span className="platform-btn-sub">{sub}</span>
          </span>
        </button>
      ))}
    </div>
  )
}

function App() {
  const { platform } = usePlatform()
  const initialHeroId = heroIdFromRoute()
  const initialHero = heroes.find((hero) => hero.id === initialHeroId)
  const [query, setQuery] = useState('')
  const [selectedHeroId, setSelectedHeroId] = useState<string | null>(initialHeroId)
  const [focusedHeroId, setFocusedHeroId] = useState(initialHero?.id ?? heroes[0]?.id ?? '')
  const [selectedRole, setSelectedRole] = useState<RoleKey>(initialHero?.roles[0] ?? 'vanguard')

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
  }, [query])

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
  const selectedHero = heroes.find((hero) => hero.id === selectedHeroId) ?? focusedHero
  const guide = selectedHero.roleGuides[selectedRole] ?? selectedHero.roleGuides[selectedHero.roles[0]]!

  const syncSelectedHero = useCallback((heroId: string | null, role?: RoleKey) => {
    const hero = heroes.find((entry) => entry.id === heroId)
    const nextRole = role && hero?.roles.includes(role) ? role : (hero?.roles[0] ?? 'vanguard')

    setFocusedHeroId(hero?.id ?? heroes[0]?.id ?? '')
    setSelectedHeroId(hero?.id ?? null)
    setSelectedRole(nextRole)
    window.scrollTo({ left: 0, top: 0 })
  }, [])

  const selectHero = (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => {
    event?.preventDefault()
    syncSelectedHero(heroId, role)

    if (window.location.pathname !== heroPath(heroId)) {
      window.history.pushState({ heroId }, '', heroPath(heroId))
    }
  }

  const openMenu = (event?: MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault()
    syncSelectedHero(null)

    if (window.location.pathname !== menuPath()) {
      window.history.pushState({ heroId: null }, '', menuPath())
    }
  }

  useEffect(() => {
    const handlePopState = () => {
      syncSelectedHero(heroIdFromRoute())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [syncSelectedHero])

  useEffect(() => {
    if (!selectedHeroId) {
      document.title = 'Marvel Rivals Coach'
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', 'Guias rápidos de coaching para escolher personagens e decidir a próxima luta em Marvel Rivals.')
      return
    }

    document.title = `${selectedHero.name} | Marvel Rivals Coach`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', `${selectedHero.name}: ${selectedHero.coreRead[0]}`)
  }, [selectedHero, selectedHeroId])

  if (!selectedHeroId) {
    return (
      <main className="app-shell select-shell" style={heroThemeStyle(focusedHero)}>
        <header className="topbar select-topbar">
          <AppBrand />

          <label className="search-wrap">
            <Search aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar personagem, role ou apelido"
              type="search"
            />
          </label>

          <PlatformSelector />

          <div className="meta-pill" title="Guias com fontes rastreáveis">
            <Database size={16} />
            <span>{heroes.length} guias rastreáveis</span>
          </div>
        </header>

        <section className="character-select" aria-label="Escolha de personagem">
          <div className="select-heading">
            <p className="section-kicker">Menu principal</p>
            <h1>Escolha seu personagem</h1>
            <p>Encontre o herói, entre no guia e foque no que ganha a próxima luta.</p>
          </div>

          <div className="select-fight-stage">
            <aside className="select-preview-panel" aria-label="Personagem em foco">
              <div className="select-preview-art">
                <img src={focusedHero.portraitUrl} alt="" />
              </div>
              <div className="select-preview-copy">
                <p className="section-kicker">Atual</p>
                <h2>{focusedHero.name}</h2>
                <span>{focusedHero.roles.map((role) => roleLabel[role]).join(' / ')}</span>
              </div>
            </aside>

            <div className="select-board" aria-label="Personagens agrupados por classe">
              {groupedHeroes.map((group) => {
                const RoleIcon = roleIcon[group.role]

                return (
                  <section
                    className="select-role-group"
                    key={group.role}
                    aria-labelledby={`select-role-${group.role}`}
                  >
                    <div className="select-role-heading">
                      <div className="select-role-title">
                        <RoleIcon size={18} strokeWidth={2.4} />
                        <h2 id={`select-role-${group.role}`}>{roleLabel[group.role]}</h2>
                      </div>
                      <span>
                        {group.heroes.length} {group.heroes.length === 1 ? 'herói' : 'heróis'}
                      </span>
                    </div>

                    <div className="select-role-grid">
                      {group.heroes.map((hero) => {
                        const defaultArt = hero.selectionPortraitUrl ?? hero.portraitUrl
                        const hoverArt = hero.selectionHoverUrl ?? defaultArt

                        return (
                          <a
                            aria-label={`Abrir guia de ${hero.name} como ${roleLabel[group.role]}`}
                            className={`fighter-slot ${hero.id === focusedHero.id ? 'is-focused' : ''}`}
                            href={heroPath(hero.id)}
                            key={`${group.role}-${hero.id}`}
                            onClick={(event) => selectHero(hero.id, event, group.role)}
                            onFocus={() => setFocusedHeroId(hero.id)}
                            onMouseEnter={() => setFocusedHeroId(hero.id)}
                            style={
                              {
                                '--slot-primary': hero.theme.primary,
                                '--slot-secondary': hero.theme.secondary,
                                '--slot-primary-rgb': hero.theme.primaryRgb,
                                '--slot-secondary-rgb': hero.theme.secondaryRgb,
                              } as React.CSSProperties
                            }
                          >
                            <span className="fighter-art fighter-art-default">
                              <img src={defaultArt} alt="" />
                            </span>
                            <span className="fighter-art fighter-art-animated">
                              <img src={hoverArt} alt="" />
                            </span>
                            <span className="fighter-shade" />
                            <span className="fighter-info">
                              <strong>{hero.name}</strong>
                              <span>{roleLabel[group.role]}</span>
                            </span>
                          </a>
                        )
                      })}
                    </div>
                  </section>
                )
              })}
            </div>

            <aside className="select-intel-panel" aria-label="Resumo do guia">
              <p className="section-kicker">Guia</p>
              <h2>{focusedHero.name}</h2>
              <p>{renderInlineKeys(focusedHero.coreRead[0], platform)}</p>
              <div className="select-intel-stats">
                <span>{focusedHero.sources.length} fontes</span>
                <span>{focusedHero.lastVerified}</span>
                <span>{focusedHero.confidenceSummary}</span>
              </div>
            </aside>
          </div>

          {filteredHeroes.length === 0 ? (
            <div className="empty-select">
              <p>Nenhum personagem encontrado para "{query}".</p>
            </div>
          ) : null}
        </section>
      </main>
    )
  }

  return (
    <main className="app-shell detail-shell" style={heroThemeStyle(selectedHero)}>
      <header className="topbar detail-topbar">
        <AppBrand />

        <div className="battle-context" aria-label="Contexto do guia atual">
          <span className="battle-context-label">Guia ativo</span>
          <strong>{selectedHero.name}</strong>
          <span>{roleLabel[selectedRole]} · {guide.nickname}</span>
        </div>

        <PlatformSelector />

        <a className="back-button" href={menuPath()} onClick={openMenu}>
          <ArrowLeft size={18} />
          Voltar ao menu
        </a>
      </header>

      <div className="detail-page">
        <section className="hero-stage">
          <div
            className="hero-banner"
            style={{ '--hero-image': `url(${selectedHero.bannerUrl})` } as React.CSSProperties}
          >
            <div className="hero-copy">
              <p className="section-kicker">Guia enriquecido</p>
              <h1>{selectedHero.name}</h1>
              <p>{renderInlineKeys(selectedHero.coreRead[0], platform)}</p>
              <div className="quick-stats">
                <div className="stat-tile">
                  <span>Role</span>
                  <strong>{roleLabel[selectedRole]}</strong>
                </div>
                <div className="stat-tile">
                  <span>Foco</span>
                  <strong>{renderInlineKeys(guide.nickname, platform)}</strong>
                </div>
                <div className="stat-tile">
                  <span>Primeira decisão</span>
                  <strong>{renderInlineKeys(guide.upgradePlan[0]?.ability ?? guide.dashGuide.ability, platform)}</strong>
                </div>
              </div>
            </div>
            <div className="hero-portrait" aria-hidden="true">
              <img src={selectedHero.portraitUrl} alt="" />
            </div>
          </div>

          <nav className="role-tabs" aria-label="Roles do personagem">
            {selectedHero.roles.map((role) => {
              const Icon = roleIcon[role]
              return (
                <button
                  className={`role-tab ${role === selectedRole ? 'is-active' : ''}`}
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  type="button"
                >
                  <Icon size={18} />
                  {roleLabel[role]}
                </button>
              )
            })}
          </nav>

          <GuideContent guide={guide} hero={selectedHero} />
        </section>
      </div>
    </main>
  )
}

function GuideContent({ guide, hero }: { guide: RoleGuide; hero: HeroGuide }) {
  const evidenceSources = guide.evidence
    .map((id) => hero.sources.find((source) => source.id === id))
    .filter((source): source is HeroGuide['sources'][number] => Boolean(source))

  return <HeroGuideLayout guide={guide} hero={hero} evidenceSources={evidenceSources} />
}

// ── Layout universal ─────────────────────────────────────────────────────────

function HeroGuideLayout({
  guide,
  hero,
  evidenceSources,
}: {
  guide: RoleGuide
  hero: HeroGuide
  evidenceSources: HeroGuide['sources']
}) {
  const primarySystem = hero.systems[0]
  const secondarySystem = hero.systems[1]

  return (
    <div className="content-grid hero-guide-layout">
      <PrimerSection guide={guide} hero={hero} />

      {primarySystem && <SystemPanel system={primarySystem} coreRead={hero.coreRead[0]} />}

      <PriorityGrid guide={guide} />

      <section className="connected-panel full">
        <article className="connected-card">
          <MechanicContent guide={guide} />
        </article>
        {secondarySystem && (
          <article className="connected-card">
            <SecondarySystemContent system={secondarySystem} />
          </article>
        )}
      </section>

      <section className="connected-panel full">
        <article className="connected-card">
          <UltimateContent guide={guide} />
        </article>
        <article className="connected-card">
          <ReadContent guide={guide} />
        </article>
      </section>

      <PatternsSection guide={guide} />

      <EvidenceDock hero={hero} sources={evidenceSources} />
    </div>
  )
}

// ── Seções do guia ───────────────────────────────────────────────────────────

function PrimerSection({ guide }: { guide: RoleGuide; hero?: HeroGuide }) {
  const { platform } = usePlatform()
  const abilityNames = guide.abilityLoop ?? guide.upgradePlan.slice(0, 5).map((s) => s.ability)
  const byAbility = new Map(guide.upgradePlan.map((s) => [s.ability, s]))
  const loop = abilityNames
    .map((name) => byAbility.get(name))
    .filter((s): s is UpgradeStep => Boolean(s))

  return (
    <section className="panel primer-section">
      <div className="role-title">
        <div>
          <p className="section-kicker">{renderInlineKeys(guide.nickname, platform)}</p>
          <h2>{renderInlineKeys(guide.label, platform)}</h2>
          <p className="hero-health">{renderInlineKeys(guide.health, platform)}</p>
          <p className="hero-difficulty">{renderInlineKeys(guide.difficulty, platform)}</p>
        </div>
        <div className="meta-pill">
          <Target size={15} />
          {renderInlineKeys(guide.job, platform)}
        </div>
      </div>

      <div className="verdict">{renderInlineKeys(guide.verdict, platform)}</div>

      <div className="ability-loop">
        {loop.map((step) => (
          <article className="ability-loop-step" key={step.ability}>
            <small className="control-badge">
              {step.spellNumber
                ? getSpellControl(step.spellNumber, platform)
                : resolveInput(step.input ?? '', platform)}
            </small>
            <strong>{renderInlineKeys(step.ability, platform)}</strong>
            <p>{renderInlineKeys(step.label, platform)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SystemPanel({
  system,
  coreRead,
}: {
  system: HeroGuide['systems'][number]
  coreRead: string
}) {
  const { platform } = usePlatform()

  return (
    <section className="panel system-panel full">
      <div className="section-title">
        <div>
          <p className="section-kicker">{renderInlineKeys(system.name, platform)}</p>
          {system.heading && <h3>{renderInlineKeys(system.heading, platform)}</h3>}
          <p>{renderInlineKeys(coreRead, platform)}</p>
        </div>
        <Gauge color="var(--accent-cyan)" />
      </div>

      <ul className="bullet-list">
        {system.facts.slice(0, 3).map((fact) => (
          <li key={fact}>{renderInlineKeys(fact, platform)}</li>
        ))}
      </ul>

      {system.meter && (
        <div className="system-meter">
          {system.meter.map(({ label, value }) => (
            <div className="system-pip" key={label}>
              <span>{renderInlineKeys(label, platform)}</span>
              <strong>{renderInlineKeys(value, platform)}</strong>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function PriorityGrid({ guide }: { guide: RoleGuide }) {
  const { platform } = usePlatform()

  return (
    <section className="panel full">
      <div className="section-title">
        <div>
          <p className="section-kicker">{renderInlineKeys(guide.priorityKicker ?? 'Prioridade', platform)}</p>
          <h3>{renderInlineKeys(guide.priorityTitle ?? 'Ordem de decisão', platform)}</h3>
          {guide.priorityDescription && <p>{renderInlineKeys(guide.priorityDescription, platform)}</p>}
        </div>
      </div>

      <div className="priority-grid">
        {guide.upgradePlan.map((step) => (
          <article className="priority-card" key={`${guide.key}-${step.rank}`}>
            <div className="tool-card-head">
              <span className="control-badge">
                {step.spellNumber
                  ? getSpellControl(step.spellNumber, platform)
                  : resolveInput(step.input ?? '', platform)}
              </span>
              <small>{String(step.rank).padStart(2, '0')}</small>
            </div>
            <h4>{renderInlineKeys(step.ability, platform)}</h4>
            <p className="tool-label">{renderInlineKeys(step.label, platform)}</p>
            <p>{renderInlineKeys(step.why, platform)}</p>
            {step.swapWhen && <p className="swap">{renderInlineKeys(step.swapWhen, platform)}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

function PatternsSection({ guide }: { guide: RoleGuide }) {
  const { platform } = usePlatform()

  return (
    <section className="panel full">
      <div className="section-title">
        <div>
          <p className="section-kicker">Padrões</p>
          <h3>Roteiros de luta</h3>
        </div>
        <Search color="var(--accent-cyan)" />
      </div>

      <div className="pattern-grid">
        {guide.patterns.map((pattern) => (
          <article className="pattern-card" key={pattern.title}>
            <h4>{renderInlineKeys(pattern.title, platform)}</h4>
            <ol>
              {pattern.steps.slice(0, 4).map((step, index) => (
                <li key={step}>
                  <span className="pattern-step-index">{index + 1}</span>
                  <span className="pattern-step-text">{renderInlineKeys(step, platform)}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  )
}

// ── Conteúdo dos cards conectados ────────────────────────────────────────────

function MechanicContent({ guide }: { guide: RoleGuide }) {
  const { platform } = usePlatform()

  return (
    <>
      <div className="section-title">
        <div>
          <p className="section-kicker">Mecânica-chave</p>
          <h3>{renderInlineKeys(guide.dashGuide.ability, platform)}</h3>
        </div>
        <Zap color="var(--accent-red)" />
      </div>

      <div className="dash-box">
        <strong>{renderInlineKeys(guide.dashGuide.shortRule, platform)}</strong>
      </div>

      <div className="mini-grid dense with-top-gap">
        <div>
          <p className="mini-label">Mecânica</p>
          <ul className="bullet-list">
            {guide.dashGuide.mechanics.slice(0, 2).map((item) => (
              <li key={item}>{renderInlineKeys(item, platform)}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mini-label">Treino</p>
          <ul className="bullet-list">
            {guide.dashGuide.drills.slice(0, 2).map((item) => (
              <li key={item}>{renderInlineKeys(item, platform)}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

function UltimateContent({ guide }: { guide: RoleGuide }) {
  const { platform } = usePlatform()
  const hasMultiple = guide.ultimates.length > 1

  return (
    <>
      <div className="section-title">
        <div>
          <p className="section-kicker">Ultimate</p>
          <h3>{renderInlineKeys(guide.ultimates[0]?.name ?? 'Ultimate', platform)}</h3>
        </div>
        <Layers3 color="var(--accent-cyan)" />
      </div>

      <div className="compact-stack">
        {guide.ultimates.map((ultimate) => (
          <article className="ultimate-card featured-ultimate" key={`${guide.key}-${ultimate.name}-${ultimate.stance}`}>
            {hasMultiple && <p className="mini-label">{renderInlineKeys(ultimate.stance, platform)}</p>}
            <p><strong>Uso:</strong> {renderInlineKeys(ultimate.bestUse, platform)}</p>
            <p><strong>Execução:</strong> {renderInlineKeys(ultimate.execution, platform)}</p>
            <p><strong>Valor:</strong> {renderInlineKeys(ultimate.upgradeValue, platform)}</p>
          </article>
        ))}
      </div>
    </>
  )
}

function ReadContent({ guide }: { guide: RoleGuide }) {
  const { platform } = usePlatform()

  return (
    <>
      <div className="section-title">
        <div>
          <p className="section-kicker">Leitura</p>
          <h3>Adaptações e erros</h3>
        </div>
      </div>

      <div className="mini-grid dense">
        <div>
          <p className="mini-label">Adapte quando</p>
          <ul className="bullet-list">
            {guide.adaptations.slice(0, 2).map((item) => (
              <li key={item}>{renderInlineKeys(item, platform)}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mini-label">Erros que entregam a luta</p>
          <ul className="mistake-list">
            {guide.mistakes.slice(0, 2).map((item) => (
              <li key={item}>{renderInlineKeys(item, platform)}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

function SecondarySystemContent({ system }: { system: HeroGuide['systems'][number] }) {
  const { platform } = usePlatform()

  return (
    <>
      <div className="section-title">
        <div>
          <p className="section-kicker">{renderInlineKeys(system.name, platform)}</p>
          {system.heading && <h3>{renderInlineKeys(system.heading, platform)}</h3>}
        </div>
        <Layers3 color="var(--accent-cyan)" />
      </div>

      <ul className="bullet-list">
        {system.facts.slice(0, 3).map((fact) => (
          <li key={fact}>{renderInlineKeys(fact, platform)}</li>
        ))}
      </ul>
    </>
  )
}

function EvidenceDock({ hero, sources }: { hero: HeroGuide; sources: HeroGuide['sources'] }) {
  const { platform } = usePlatform()

  return (
    <details className="evidence-dock">
      <summary>
        <Database size={17} />
        <span>Fontes e metadata</span>
        <strong>{hero.sources.length}</strong>
      </summary>

      <div className="evidence-panel">
        <div className="coverage-grid compact">
          {hero.sourceCoverage.map((coverage) => {
            const Icon = sourceIcon[coverage.kind]
            return (
              <article className="coverage-card" key={coverage.kind}>
                <div>
                  <strong>
                    <Icon size={15} /> {renderInlineKeys(coverage.label, platform)}
                  </strong>
                  <p>{renderInlineKeys(coverage.status, platform)}</p>
                </div>
                <span className="coverage-count">{coverage.count}</span>
              </article>
            )
          })}
        </div>

        <div className="compact-stack">
          {sources.map((source) => (
            <article className="source-card compact" key={source.id}>
              <p className="mini-label">{sourceLabel(source.kind)} · confiança {displayConfidence(source.confidence)}</p>
              <h4>{renderInlineKeys(source.title, platform)}</h4>
              <p>{renderInlineKeys(source.takeaways[0], platform)}</p>
              <a href={source.url} target="_blank" rel="noreferrer">
                Abrir fonte
              </a>
            </article>
          ))}
        </div>
      </div>
    </details>
  )
}

export default App
