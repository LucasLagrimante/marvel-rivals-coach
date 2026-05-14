import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  BadgeCheck,
  BookOpen,
  Crosshair,
  Database,
  Gauge,
  Layers3,
  Library,
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
import type { HeroGuide, RoleGuide, RoleKey, SourceKind } from './types'

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
  vanguard: 'Vanguard',
  duelist: 'Duelist',
  strategist: 'Strategist',
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

function App() {
  const [query, setQuery] = useState('')
  const [selectedHeroId, setSelectedHeroId] = useState<string | null>(null)
  const [focusedHeroId, setFocusedHeroId] = useState(heroes[0]?.id ?? '')
  const [selectedRole, setSelectedRole] = useState<RoleKey>('vanguard')

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

  const focusedHero = heroes.find((hero) => hero.id === focusedHeroId) ?? filteredHeroes[0] ?? heroes[0]
  const selectedHero = heroes.find((hero) => hero.id === selectedHeroId) ?? focusedHero
  const guide = selectedHero.roleGuides[selectedRole] ?? selectedHero.roleGuides[selectedHero.roles[0]]!

  const selectHero = (heroId: string) => {
    const hero = heroes.find((entry) => entry.id === heroId)
    setFocusedHeroId(heroId)
    setSelectedHeroId(heroId)
    setSelectedRole(hero?.roles[0] ?? 'vanguard')
    window.scrollTo({ left: 0, top: 0 })
  }

  if (!selectedHeroId) {
    return (
      <main className="app-shell select-shell" style={heroThemeStyle(focusedHero)}>
        <header className="topbar select-topbar">
          <div className="brand">
            <div className="brand-mark">
              <Crosshair size={21} strokeWidth={2.8} />
            </div>
            <div>
              <p className="brand-eyebrow">Marvel Rivals</p>
              <p className="brand-title">Coach Lab</p>
            </div>
          </div>

          <label className="search-wrap">
            <Search aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar personagem, role ou apelido"
              type="search"
            />
          </label>

          <div className="meta-pill" title="Guias com fontes rastreáveis">
            <Database size={16} />
            {heroes.length} guias
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

            <div className="select-board">
              {filteredHeroes.map((hero) => {
                const defaultArt = hero.selectionPortraitUrl ?? hero.portraitUrl
                const hoverArt = hero.selectionHoverUrl ?? defaultArt

                return (
                  <button
                    aria-label={`Abrir guia de ${hero.name}`}
                    className={`fighter-slot ${hero.id === focusedHero.id ? 'is-focused' : ''}`}
                    key={hero.id}
                    onClick={() => selectHero(hero.id)}
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
                    type="button"
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
                    </span>
                  </button>
                )
              })}
            </div>

            <aside className="select-intel-panel" aria-label="Resumo do guia">
              <p className="section-kicker">Guia</p>
              <h2>{focusedHero.name}</h2>
              <p>{focusedHero.coreRead[0]}</p>
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
        <div className="brand">
          <div className="brand-mark">
            <Crosshair size={21} strokeWidth={2.8} />
          </div>
          <div>
            <p className="brand-eyebrow">Marvel Rivals</p>
            <p className="brand-title">Coach Lab</p>
          </div>
        </div>

        <button className="back-button" onClick={() => setSelectedHeroId(null)} type="button">
          <ArrowLeft size={18} />
          Voltar ao menu
        </button>
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
              <p>{selectedHero.coreRead[0]}</p>
              <div className="quick-stats">
                <div className="stat-tile">
                  <span>Role</span>
                  <strong>{roleLabel[selectedRole]}</strong>
                </div>
                <div className="stat-tile">
                  <span>Foco</span>
                  <strong>{guide.nickname}</strong>
                </div>
                <div className="stat-tile">
                  <span>Primeira decisão</span>
                  <strong>{guide.upgradePlan[0]?.ability ?? guide.dashGuide.ability}</strong>
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

  if (hero.id === 'black-cat') {
    return <BlackCatGuide guide={guide} hero={hero} evidenceSources={evidenceSources} />
  }

  if (hero.id === 'magneto') {
    return <MagnetoGuide guide={guide} hero={hero} evidenceSources={evidenceSources} />
  }

  if (hero.id === 'spider-man') {
    return <SpiderManGuide guide={guide} hero={hero} evidenceSources={evidenceSources} />
  }

  if (hero.id === 'cloak-dagger') {
    return <CloakDaggerGuide guide={guide} hero={hero} evidenceSources={evidenceSources} />
  }

  return (
    <div className="content-grid coach-layout">
      <CoachLead guide={guide} />
      <PriorityPlan guide={guide} />
      <div className="coach-column">
        <MechanicCard guide={guide} />
        <ReadCard guide={guide} />
      </div>
      <div className="coach-column">
        <UltimateCard guide={guide} title="Como gastar S" />
        <PatternCard guide={guide} />
      </div>
      <EvidenceDock hero={hero} sources={evidenceSources} />
    </div>
  )
}

function CoachLead({ guide }: { guide: RoleGuide }) {
  return (
    <section className="panel coach-lead">
      <div className="role-title compact">
        <div>
          <p className="section-kicker">{guide.nickname}</p>
          <h2>{guide.label}</h2>
          <p>{guide.health} · {guide.difficulty}</p>
        </div>
        <div className="meta-pill">
          <Target size={15} />
          {guide.job}
        </div>
      </div>

      <div className="verdict spotlight">{guide.verdict}</div>

      <ul className="bullet-list tight-list">
        {guide.playstyle.slice(0, 2).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

function PriorityPlan({ guide, limit = 4 }: { guide: RoleGuide; limit?: number }) {
  return (
    <section className="panel priority-panel">
      <div className="section-title">
        <div>
          <p className="section-kicker">{guide.priorityKicker ?? 'Livrinho'}</p>
          <h3>{guide.priorityTitle ?? 'Ordem de evolução'}</h3>
          <p>{guide.priorityDescription ?? 'Prioridade para evoluir as magias do Deadpool nesta role.'}</p>
        </div>
        <Gauge color="var(--accent-cyan)" />
      </div>

      <div className="decision-list">
        {guide.upgradePlan.slice(0, limit).map((step) => (
          <article className="decision-row" key={`${guide.key}-${step.rank}`}>
            <span className="decision-rank">{step.rank}</span>
            <div>
              <h4>
                {step.ability}
                <small>{step.spellNumber ? `Magia ${step.spellNumber}` : step.input} · {step.label}</small>
              </h4>
              <p>{step.why}</p>
              {step.swapWhen ? <p className="swap">{step.swapWhen}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function MechanicCard({ guide }: { guide: RoleGuide }) {
  return (
    <section className="panel">
      <div className="section-title">
        <div>
          <p className="section-kicker">Mecânica-chave</p>
          <h3>{guide.dashGuide.ability}</h3>
        </div>
        <Zap color="var(--accent-red)" />
      </div>

      <div className="dash-box">
        <strong>{guide.dashGuide.shortRule}</strong>
      </div>

      <ul className="bullet-list tight-list with-top-gap">
        {[...guide.dashGuide.mechanics.slice(0, 2), ...guide.dashGuide.drills.slice(0, 1)].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

function UltimateCard({ guide, title }: { guide: RoleGuide; title: string }) {
  return (
    <section className="panel">
      <div className="section-title">
        <div>
          <p className="section-kicker">Ultimate</p>
          <h3>{title}</h3>
        </div>
        <Layers3 color="var(--accent-cyan)" />
      </div>

      <div className="compact-stack">
        {guide.ultimates.map((ultimate) => (
          <article className="compact-note" key={`${guide.key}-${ultimate.name}-${ultimate.stance}`}>
            <p className="mini-label">{ultimate.stance}</p>
            <h4>{ultimate.name}</h4>
            <p>{ultimate.bestUse}</p>
            <p><strong>Execução:</strong> {ultimate.execution}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ReadCard({ guide }: { guide: RoleGuide }) {
  return (
    <section className="panel">
      <div className="section-title">
        <div>
          <p className="section-kicker">Leitura</p>
          <h3>Quando mudar</h3>
        </div>
      </div>

      <div className="mini-grid dense">
        <div>
          <p className="mini-label">Adapte</p>
          <ul className="bullet-list tight-list">
            {guide.adaptations.slice(0, 2).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mini-label">Erro caro</p>
          <ul className="mistake-list tight-list">
            {guide.mistakes.slice(0, 2).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function PatternCard({ guide }: { guide: RoleGuide }) {
  return (
    <section className="panel">
      <div className="section-title">
        <div>
          <p className="section-kicker">Rotas</p>
          <h3>Plano de luta</h3>
        </div>
      </div>

      <div className="compact-stack">
        {guide.patterns.slice(0, 1).map((pattern) => (
          <article className="pattern-card compact" key={pattern.title}>
            <h4>{pattern.title}</h4>
            <ol>
              {pattern.steps.slice(0, 4).map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  )
}

function EvidenceDock({ hero, sources }: { hero: HeroGuide; sources: HeroGuide['sources'] }) {
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
                    <Icon size={15} /> {coverage.label}
                  </strong>
                  <p>{coverage.status}</p>
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
              <h4>{source.title}</h4>
              <p>{source.takeaways[0]}</p>
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

function CloakDaggerGuide({
  guide,
  hero,
  evidenceSources,
}: {
  guide: RoleGuide
  hero: HeroGuide
  evidenceSources: HeroGuide['sources']
}) {
  const priorityByAbility = new Map(guide.upgradePlan.map((step) => [step.ability, step]))
  const rhythm = [
    'Lightforce Dagger',
    'Dagger Storm',
    'Veil of Lightforce',
    'Terror Cape',
    'Dark Teleportation',
    'Eternal Bond',
  ]
    .map((ability) => priorityByAbility.get(ability))
    .filter(Boolean)
  const daggerSystem = hero.systems.find((system) => system.name === 'Dagger uptime')
  const cloakSystem = hero.systems.find((system) => system.name === 'Cloak window')
  const sharedSystem = hero.systems.find((system) => system.name === 'Shared rhythm')

  return (
    <div className="content-grid cloak-dagger-layout">
      <section className="panel cloak-dagger-primer">
        <div className="role-title">
          <div>
            <p className="section-kicker">{guide.nickname}</p>
            <h2>{guide.label}</h2>
            <p>{guide.health} · {guide.difficulty}</p>
          </div>
          <div className="meta-pill">
            <Target size={15} />
            {guide.job}
          </div>
        </div>

        <div className="verdict">{guide.verdict}</div>

        <div className="duality-rhythm" aria-label="Ritmo central de Manto e Adaga">
          {rhythm.map((step, index) => (
            <article className="duality-step" key={step!.ability}>
              <span>{index + 1}</span>
              <small>{step!.input}</small>
              <strong>{step!.ability}</strong>
              <p>{step!.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel duality-core full">
        <div className="duality-copy">
          <div className="section-title">
            <div>
              <p className="section-kicker">Coisa para dominar</p>
              <h3>Curar como Dagger, ganhar a janela como Cloak</h3>
              <p>{hero.coreRead[0]}</p>
            </div>
            <Gauge color="var(--accent-cyan)" />
          </div>

          {sharedSystem ? (
            <ul className="bullet-list">
              {sharedSystem.facts.slice(0, 3).map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="stance-meter" aria-label="Decisoes de postura">
          {[
            ['Dagger', 'vida e setup'],
            ['Cloak', 'blind, vulnerabilidade e fase'],
            ['Volta', 'recarga gratis e cura retomada'],
          ].map(([label, value]) => (
            <div className="stance-pip" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="panel full">
        <div className="section-title">
          <div>
            <p className="section-kicker">Plano de fight</p>
            <h3>Use os dois kits sem abandonar a cura</h3>
            <p>{guide.priorityDescription}</p>
          </div>
        </div>

        <div className="duality-decision-grid">
          {guide.upgradePlan.slice(0, 6).map((step) => (
            <article className="duality-decision-card" key={`${guide.key}-${step.rank}`}>
              <div className="tool-card-head">
                <span>{step.input}</span>
                <small>{String(step.rank).padStart(2, '0')}</small>
              </div>
              <h4>{step.ability}</h4>
              <p className="tool-label">{step.label}</p>
              <p>{step.why}</p>
              {step.swapWhen ? <p className="swap">{step.swapWhen}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="connected-panel full cloak-dagger-connected">
        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Dagger</p>
              <h3>Segure a barra antes de trocar</h3>
            </div>
            <Layers3 color="var(--accent-cyan)" />
          </div>

          {daggerSystem ? (
            <ul className="bullet-list">
              {daggerSystem.facts.slice(0, 3).map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          ) : null}
        </article>

        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Cloak</p>
              <h3>Dois segundos mudam a luta</h3>
            </div>
            <Zap color="var(--accent-red)" />
          </div>

          {cloakSystem ? (
            <ul className="bullet-list">
              {cloakSystem.facts.slice(0, 3).map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          ) : null}
        </article>
      </section>

      <section className="connected-panel full cloak-dagger-connected">
        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Mecânica-chave</p>
              <h3>{guide.dashGuide.ability}</h3>
            </div>
          </div>

          <div className="dash-box">
            <strong>{guide.dashGuide.shortRule}</strong>
          </div>

          <div className="mini-grid dense with-top-gap">
            <div>
              <p className="mini-label">Mecânica</p>
              <ul className="bullet-list">
                {guide.dashGuide.mechanics.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mini-label">Treino</p>
              <ul className="bullet-list">
                {guide.dashGuide.drills.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Ultimate</p>
              <h3>Eternal Bond</h3>
            </div>
          </div>

          {guide.ultimates.map((ultimate) => (
            <article className="ultimate-card featured-ultimate" key={`${guide.key}-${ultimate.name}`}>
              <p><strong>Uso:</strong> {ultimate.bestUse}</p>
              <p><strong>Execução:</strong> {ultimate.execution}</p>
              <p><strong>Patch:</strong> {ultimate.upgradeValue}</p>
            </article>
          ))}
        </article>
      </section>

      <section className="panel full">
        <div className="section-title">
          <div>
            <p className="section-kicker">Leitura prática</p>
            <h3>Quando adaptar</h3>
          </div>
        </div>

        <div className="duality-pattern-grid">
          {guide.patterns.slice(0, 2).map((pattern) => (
            <article className="pattern-card" key={pattern.title}>
              <h4>{pattern.title}</h4>
              <ol>
                {pattern.steps.slice(0, 4).map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="connected-panel full cloak-dagger-connected">
        <article className="connected-card">
          <p className="mini-label">Adapte quando</p>
          <ul className="bullet-list with-top-gap">
            {guide.adaptations.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="connected-card">
          <p className="mini-label">Erros que fazem o heroi parecer fraco</p>
          <ul className="mistake-list with-top-gap">
            {guide.mistakes.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <EvidenceDock hero={hero} sources={evidenceSources} />
    </div>
  )
}

function BlackCatGuide({
  guide,
  hero,
  evidenceSources,
}: {
  guide: RoleGuide
  hero: HeroGuide
  evidenceSources: HeroGuide['sources']
}) {
  const priorityByAbility = new Map(guide.upgradePlan.map((step) => [step.ability, step]))
  const flow = ['Turn of Fortune', 'Gilded Deal', 'Cat’s Cradle', 'Claw Whip', 'Phantom Pursuit', 'Calling Card']
    .map((ability) => priorityByAbility.get(ability))
    .filter(Boolean)

  return (
    <div className="content-grid black-cat-layout">
      <section className="panel black-cat-primer">
        <div className="role-title">
          <div>
            <p className="section-kicker">{guide.nickname}</p>
            <h2>{guide.label}</h2>
            <p>{guide.health} · {guide.difficulty}</p>
          </div>
          <div className="meta-pill">
            <Target size={15} />
            {guide.job}
          </div>
        </div>

        <div className="verdict">{guide.verdict}</div>

        <div className="heist-loop">
          {flow.map((step, index) => (
            <article className="heist-step" key={step!.ability}>
              <span>{index + 1}</span>
              <small>{step!.input}</small>
              <strong>{step!.ability}</strong>
              <p>{step!.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel fortune-panel">
        <div className="section-title">
          <div>
            <p className="section-kicker">Fortuna</p>
            <h3>Economia antes do dive</h3>
            <p>A Gata Negra vence quando entra com recurso, item e saída.</p>
          </div>
          <Gauge color="var(--accent-cyan)" />
        </div>

        <ul className="bullet-list">
          {hero.coreRead.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel full">
        <div className="section-title">
          <div>
            <p className="section-kicker">Plano de roubo</p>
            <h3>Como construir a jogada</h3>
          </div>
        </div>

        <div className="black-cat-tool-grid">
          {guide.upgradePlan.slice(0, 4).map((step) => (
            <article className="black-cat-tool-card" key={`${guide.key}-${step.rank}`}>
              <div className="tool-card-head">
                <span>{step.input}</span>
                <small>{String(step.rank).padStart(2, '0')}</small>
              </div>
              <h4>{step.ability}</h4>
              <p className="tool-label">{step.label}</p>
              <p>{step.why}</p>
              {step.swapWhen ? <p className="swap">{step.swapWhen}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="connected-panel full black-cat-connected">
        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Relíquias</p>
              <h3>Gilded Deal</h3>
            </div>
            <Layers3 color="var(--accent-cyan)" />
          </div>

          <div className="relic-grid">
            {[
              ['Helm of Hades', 'Invisibilidade para staging, fuga ou pick escondido.'],
              ['Chernobog’s Crystal', 'Limpeza contra controle e entrada mais segura.'],
              ['Mento-Fish', 'Scout e informação antes de comprometer o dive.'],
              ['Ring of Zona', 'Controle de movimento para prender alvo ou quebrar chase.'],
            ].map(([name, text]) => (
              <article className="relic-card" key={name}>
                <strong>{name}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Execução</p>
              <h3>{guide.dashGuide.ability}</h3>
            </div>
            <Zap color="var(--accent-red)" />
          </div>

          <div className="dash-box">
            <strong>{guide.dashGuide.shortRule}</strong>
          </div>

          <div className="mini-grid dense with-top-gap">
            <div>
              <p className="mini-label">Mecânica</p>
              <ul className="bullet-list">
                {guide.dashGuide.mechanics.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mini-label">Treino</p>
              <ul className="bullet-list">
                {guide.dashGuide.drills.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="connected-panel full black-cat-connected">
        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Ultimate</p>
              <h3>Calling Card</h3>
            </div>
          </div>

          {guide.ultimates.map((ultimate) => (
            <article className="ultimate-card featured-ultimate" key={`${guide.key}-${ultimate.name}`}>
              <p><strong>Uso:</strong> {ultimate.bestUse}</p>
              <p><strong>Execução:</strong> {ultimate.execution}</p>
              <p><strong>Recurso:</strong> {ultimate.upgradeValue}</p>
            </article>
          ))}
        </article>

        <article className="connected-card">
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
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mini-label">Erros que entregam a luta</p>
              <ul className="mistake-list">
                {guide.mistakes.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <EvidenceDock hero={hero} sources={evidenceSources} />
    </div>
  )
}

function MagnetoGuide({
  guide,
  hero,
  evidenceSources,
}: {
  guide: RoleGuide
  hero: HeroGuide
  evidenceSources: HeroGuide['sources']
}) {
  const priorityByAbility = new Map(guide.upgradePlan.map((step) => [step.ability, step]))
  const loop = ['Metal Bulwark', 'Iron Bulwark', 'Mag-Cannon', 'Metallic Curtain', 'Meteor M', 'Royal Blade']
    .map((ability) => priorityByAbility.get(ability))
    .filter(Boolean)
  const ringSystem = hero.systems.find((system) => system.name === 'Iron Ring')
  const meteorSystem = hero.systems.find((system) => system.name === 'Meteor M')

  return (
    <div className="content-grid magneto-layout">
      <section className="panel magneto-command">
        <div className="role-title">
          <div>
            <p className="section-kicker">{guide.nickname}</p>
            <h2>{guide.label}</h2>
            <p>{guide.health} · {guide.difficulty}</p>
          </div>
          <div className="meta-pill">
            <Target size={15} />
            {guide.job}
          </div>
        </div>

        <div className="verdict">{guide.verdict}</div>

        <div className="magneto-loop">
          {loop.map((step) => (
            <article className="magneto-loop-card" key={step!.ability}>
              <small>{step!.input}</small>
              <strong>{step!.ability}</strong>
              <span>{step!.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="panel magneto-rings full">
        <div className="magneto-ring-copy">
          <div className="section-title">
            <div>
              <p className="section-kicker">Iron Ring</p>
              <h3>Bolha vira pressão</h3>
              <p>{hero.coreRead[0]}</p>
            </div>
            <Gauge color="var(--accent-cyan)" />
          </div>

          {ringSystem ? (
            <ul className="bullet-list">
              {ringSystem.facts.slice(0, 2).map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="ring-meter" aria-label="Mag-Cannon por carga">
          {[
            ['1 anel', '40 dano'],
            ['2 anéis', '65 dano'],
            ['3 anéis', '90 + knockback'],
          ].map(([label, value]) => (
            <div className="ring-pip" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="panel full">
        <div className="section-title">
          <div>
            <p className="section-kicker">Ordem de decisão</p>
            <h3>Quem toma dano nos próximos 2 segundos?</h3>
            <p>{guide.priorityDescription}</p>
          </div>
        </div>

        <div className="magneto-decision-grid">
          {guide.upgradePlan.slice(0, 5).map((step) => (
            <article className="magneto-decision-card" key={`${guide.key}-${step.rank}`}>
              <div className="tool-card-head">
                <span>{step.input}</span>
                <small>{String(step.rank).padStart(2, '0')}</small>
              </div>
              <h4>{step.ability}</h4>
              <p className="tool-label">{step.label}</p>
              <p>{step.why}</p>
              {step.swapWhen ? <p className="swap">{step.swapWhen}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="connected-panel full magneto-connected">
        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Counter-ult</p>
              <h3>Meteor M</h3>
            </div>
            <Layers3 color="var(--accent-cyan)" />
          </div>

          <div className="meteor-warning">
            <strong>Guarde Q para Iron Man, Hela, Punisher e Star-Lord.</strong>
            <p>Se nenhum deles tem ultimate, aí sim Meteor M pode virar engage sobre o objetivo.</p>
          </div>

          {meteorSystem ? (
            <ul className="bullet-list with-top-gap">
              {meteorSystem.facts.slice(0, 2).map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          ) : null}
        </article>

        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Mecânica-chave</p>
              <h3>{guide.dashGuide.ability}</h3>
            </div>
            <Zap color="var(--accent-red)" />
          </div>

          <div className="dash-box">
            <strong>{guide.dashGuide.shortRule}</strong>
          </div>

          <div className="mini-grid dense with-top-gap">
            <div>
              <p className="mini-label">Mecânica</p>
              <ul className="bullet-list">
                {guide.dashGuide.mechanics.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mini-label">Treino</p>
              <ul className="bullet-list">
                {guide.dashGuide.drills.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="connected-panel full magneto-connected">
        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Rotas práticas</p>
              <h3>Padrão de luta</h3>
            </div>
          </div>

          <div className="magneto-pattern-stack">
            {guide.patterns.slice(0, 1).map((pattern) => (
              <article className="pattern-card" key={pattern.title}>
                <h4>{pattern.title}</h4>
                <ol>
                  {pattern.steps.slice(0, 4).map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </article>

        <article className="connected-card">
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
                {guide.adaptations.slice(0, 1).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mini-label">Erros que entregam a luta</p>
              <ul className="mistake-list">
                {guide.mistakes.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <EvidenceDock hero={hero} sources={evidenceSources} />
    </div>
  )
}

function SpiderManGuide({
  guide,
  hero,
  evidenceSources,
}: {
  guide: RoleGuide
  hero: HeroGuide
  evidenceSources: HeroGuide['sources']
}) {
  const priorityByAbility = new Map(guide.upgradePlan.map((step) => [step.ability, step]))
  const chain = ['Web-Cluster', 'Get Over Here!', 'Amazing Combo', 'Web-Swing', 'Spectacular Spin', 'Sticky Spider-Bomb']
    .map((ability) => priorityByAbility.get(ability))
    .filter(Boolean)
  const tracerSystem = hero.systems.find((system) => system.name === 'Spider-Tracer')
  const swingSystem = hero.systems.find((system) => system.name === 'Web-Swing')

  return (
    <div className="content-grid spider-man-layout">
      <section className="panel spider-man-primer">
        <div className="role-title">
          <div>
            <p className="section-kicker">{guide.nickname}</p>
            <h2>{guide.label}</h2>
            <p>{guide.health} · {guide.difficulty}</p>
          </div>
          <div className="meta-pill">
            <Target size={15} />
            {guide.job}
          </div>
        </div>

        <div className="verdict">{guide.verdict}</div>

        <div className="web-chain" aria-label="Sequencia central do Spider-Man">
          {chain.map((step, index) => (
            <article className="web-chain-step" key={step!.ability}>
              <span>{index + 1}</span>
              <small>{step!.input}</small>
              <strong>{step!.ability}</strong>
              <p>{step!.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel spider-tracer-panel full">
        <div className="spider-tracer-copy">
          <div className="section-title">
            <div>
              <p className="section-kicker">Spider-Tracer</p>
              <h3>A tag decide se voce entra ou puxa</h3>
              <p>{hero.coreRead[0]}</p>
            </div>
            <Gauge color="var(--accent-cyan)" />
          </div>

          {tracerSystem ? (
            <ul className="bullet-list">
              {tracerSystem.facts.slice(0, 3).map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="tracer-meter" aria-label="Decisoes de Spider-Tracer">
          {[
            ['Sem tracer', 'puxe alvo para fora'],
            ['Com tracer', 'voce voa ate ele'],
            ['Depois do hit', 'sai ou reinicia'],
          ].map(([label, value]) => (
            <div className="tracer-pip" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="panel full">
        <div className="section-title">
          <div>
            <p className="section-kicker">Plano de entrada</p>
            <h3>Mate em dois segundos ou suma</h3>
            <p>{guide.priorityDescription}</p>
          </div>
        </div>

        <div className="spider-decision-grid">
          {guide.upgradePlan.slice(0, 6).map((step) => (
            <article className="spider-decision-card" key={`${guide.key}-${step.rank}`}>
              <div className="tool-card-head">
                <span>{step.input}</span>
                <small>{String(step.rank).padStart(2, '0')}</small>
              </div>
              <h4>{step.ability}</h4>
              <p className="tool-label">{step.label}</p>
              <p>{step.why}</p>
              {step.swapWhen ? <p className="swap">{step.swapWhen}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="connected-panel full spider-connected">
        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Mecânica-chave</p>
              <h3>{guide.dashGuide.ability}</h3>
            </div>
            <Zap color="var(--accent-red)" />
          </div>

          <div className="dash-box">
            <strong>{guide.dashGuide.shortRule}</strong>
          </div>

          <div className="mini-grid dense with-top-gap">
            <div>
              <p className="mini-label">Mecânica</p>
              <ul className="bullet-list">
                {guide.dashGuide.mechanics.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mini-label">Treino</p>
              <ul className="bullet-list">
                {guide.dashGuide.drills.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Web-Swing</p>
              <h3>Uma carga e para sair</h3>
            </div>
            <Layers3 color="var(--accent-cyan)" />
          </div>

          {swingSystem ? (
            <ul className="bullet-list">
              {swingSystem.facts.slice(0, 3).map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          ) : null}
        </article>
      </section>

      <section className="connected-panel full spider-connected">
        <article className="connected-card">
          <div className="section-title">
            <div>
              <p className="section-kicker">Ultimate</p>
              <h3>Spectacular Spin</h3>
            </div>
          </div>

          {guide.ultimates.map((ultimate) => (
            <article className="ultimate-card featured-ultimate" key={`${guide.key}-${ultimate.name}`}>
              <p><strong>Uso:</strong> {ultimate.bestUse}</p>
              <p><strong>Execução:</strong> {ultimate.execution}</p>
              <p><strong>Patch:</strong> {ultimate.upgradeValue}</p>
            </article>
          ))}
        </article>

        <article className="connected-card">
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
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mini-label">Erros que entregam a luta</p>
              <ul className="mistake-list">
                {guide.mistakes.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="panel full">
        <div className="section-title">
          <div>
            <p className="section-kicker">Rotas praticas</p>
            <h3>O que executar na fight</h3>
          </div>
        </div>

        <div className="spider-pattern-grid">
          {guide.patterns.slice(0, 2).map((pattern) => (
            <article className="pattern-card" key={pattern.title}>
              <h4>{pattern.title}</h4>
              <ol>
                {pattern.steps.slice(0, 4).map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <EvidenceDock hero={hero} sources={evidenceSources} />
    </div>
  )
}

export default App




