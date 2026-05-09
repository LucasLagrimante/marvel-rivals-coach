import { useMemo, useState } from 'react'
import {
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
    guide: 'Guia',
    forum: 'Fórum',
    'video-transcript': 'Vídeo',
  }[kind]
}

function App() {
  const [query, setQuery] = useState('')
  const [selectedHeroId, setSelectedHeroId] = useState(heroes[0]?.id ?? '')
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

  const selectedHero = heroes.find((hero) => hero.id === selectedHeroId) ?? heroes[0]
  const guide = selectedHero.roleGuides[selectedRole] ?? selectedHero.roleGuides[selectedHero.roles[0]]!

  const selectHero = (heroId: string) => {
    const hero = heroes.find((entry) => entry.id === heroId)
    setSelectedHeroId(heroId)
    setSelectedRole(hero?.roles[0] ?? 'vanguard')
  }

  return (
    <main className="app-shell">
      <header className="topbar">
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
            placeholder="Buscar por personagem, role ou apelido"
            type="search"
          />
        </label>

        <div className="meta-pill" title="Dados com fontes rastreáveis">
          <Database size={16} />
          {selectedHero.sources.length} fontes
        </div>
      </header>

      <div className="page-grid">
        <aside className="roster-panel" aria-label="Seleção de personagens">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Seleção</p>
              <h2>Personagens</h2>
            </div>
            <span className="count">{filteredHeroes.length}</span>
          </div>

          <div className="hero-list">
            {filteredHeroes.map((hero) => (
              <button
                className={`hero-card ${hero.id === selectedHero.id ? 'is-active' : ''}`}
                key={hero.id}
                onClick={() => selectHero(hero.id)}
                type="button"
              >
                <span className="hero-thumb">
                  <img src={hero.portraitUrl} alt={hero.name} />
                </span>
                <span className="hero-card-body">
                  <h3>{hero.name}</h3>
                  <span className="role-tags">
                    {hero.roles.map((role) => (
                      <span className="role-tag" key={role}>
                        {roleLabel[role]}
                      </span>
                    ))}
                  </span>
                  <p>{hero.confidenceSummary}</p>
                </span>
              </button>
            ))}
          </div>
        </aside>

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
                  <span>Verificado</span>
                  <strong>{selectedHero.lastVerified}</strong>
                </div>
                <div className="stat-tile">
                  <span>Roles</span>
                  <strong>{selectedHero.roles.map((role) => roleLabel[role]).join(' / ')}</strong>
                </div>
                <div className="stat-tile">
                  <span>Modelo</span>
                  <strong>Fonte + análise</strong>
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
    .filter(Boolean)

  if (hero.id === 'black-cat') {
    return <BlackCatGuide guide={guide} hero={hero} evidenceSources={evidenceSources} />
  }

  return (
    <div className="content-grid">
      <section className="panel">
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

        <ul className="bullet-list">
          {guide.playstyle.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel">
        <div className="section-title">
          <div>
            <p className="section-kicker">{guide.priorityKicker ?? 'Livrinho'}</p>
            <h3>{guide.priorityTitle ?? 'Ordem de Upgrade'}</h3>
            <p>{guide.priorityDescription ?? 'Prioridade recomendada com adaptação por partida.'}</p>
          </div>
          <Gauge color="var(--accent-cyan)" />
        </div>

        <div className="upgrade-list">
          {guide.upgradePlan.map((step) => (
            <article className="upgrade-card" key={`${guide.key}-${step.rank}`}>
              <div className="upgrade-rank">
                <span>{step.rank}</span>
                <small>ordem</small>
              </div>
              <div>
                <h4>
                  {step.ability}{' '}
                  <span>
                    · {step.spellNumber ? `Magia ${step.spellNumber}` : step.input} · {step.label}
                  </span>
                </h4>
                <p>{step.why}</p>
                {step.swapWhen ? <p className="swap">{step.swapWhen}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

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

        <div className="mini-grid" style={{ marginTop: 14 }}>
          <div>
            <p className="mini-label">Mecânica</p>
            <ul className="bullet-list">
              {guide.dashGuide.mechanics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mini-label">Treino</p>
            <ul className="bullet-list">
              {guide.dashGuide.drills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="section-title">
          <div>
            <p className="section-kicker">Ultimate</p>
            <h3>Como gastar S</h3>
          </div>
          <Layers3 color="var(--accent-cyan)" />
        </div>

        <div className="ultimate-grid">
          {guide.ultimates.map((ultimate) => (
            <article className="ultimate-card" key={`${guide.key}-${ultimate.name}`}>
              <p className="mini-label">{ultimate.stance}</p>
              <h4>{ultimate.name}</h4>
              <p><strong>Uso:</strong> {ultimate.bestUse}</p>
              <p><strong>Execução:</strong> {ultimate.execution}</p>
              <p><strong>Upgrade:</strong> {ultimate.upgradeValue}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-title">
          <div>
            <p className="section-kicker">Rotas práticas</p>
            <h3>Padrões de luta</h3>
          </div>
        </div>

        <div className="mini-grid">
          {guide.patterns.map((pattern) => (
            <article className="pattern-card" key={pattern.title}>
              <h4>{pattern.title}</h4>
              <ol>
                {pattern.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-title">
          <div>
            <p className="section-kicker">Leitura de partida</p>
            <h3>Adaptações e erros</h3>
          </div>
        </div>

        <div className="mini-grid">
          <div>
            <p className="mini-label">Troque a ordem quando</p>
            <ul className="bullet-list">
              {guide.adaptations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mini-label">Erros que custam luta</p>
            <ul className="mistake-list">
              {guide.mistakes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="panel full">
        <div className="section-title">
          <div>
            <p className="section-kicker">Base viva</p>
            <h3>Sistemas, cobertura e evidências</h3>
            <p>O app separa dado oficial, guias, fórum e vídeos/transcritos para enriquecer sem perder rastreabilidade.</p>
          </div>
        </div>

        <div className="systems-grid">
          {hero.systems.map((system) => (
            <article className="system-card" key={system.name}>
              <p className="mini-label">{system.input}</p>
              <h4>{system.name}</h4>
              <ul className="source-list">
                {system.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="coverage-grid" style={{ marginTop: 14 }}>
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

        <div className="mini-grid" style={{ marginTop: 14 }}>
          {evidenceSources.map((source) => (
            <article className="source-card" key={source!.id}>
              <p className="mini-label">{sourceLabel(source!.kind)} · confiança {displayConfidence(source!.confidence)}</p>
              <h4>{source!.title}</h4>
              <p>{source!.takeaways[0]}</p>
              <a href={source!.url} target="_blank" rel="noreferrer">
                Abrir fonte
              </a>
              <div className="source-tools">
                <span className={`source-chip ${source!.confidence === 'pendente' ? 'pending' : ''}`}>
                  {source!.confidence}
                </span>
                {source!.published ? <span className="source-chip">{source!.published}</span> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
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
  evidenceSources: Array<HeroGuide['sources'][number] | undefined>
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
          {guide.upgradePlan.map((step) => (
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

      <section className="panel">
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
      </section>

      <section className="panel">
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

        <div className="mini-grid" style={{ marginTop: 14 }}>
          <div>
            <p className="mini-label">Mecânica</p>
            <ul className="bullet-list">
              {guide.dashGuide.mechanics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mini-label">Treino</p>
            <ul className="bullet-list">
              {guide.dashGuide.drills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="panel">
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
      </section>

      <section className="panel">
        <div className="section-title">
          <div>
            <p className="section-kicker">Leitura</p>
            <h3>Adaptações e erros</h3>
          </div>
        </div>

        <div className="mini-grid">
          <div>
            <p className="mini-label">Adapte quando</p>
            <ul className="bullet-list">
              {guide.adaptations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mini-label">Erros que entregam a luta</p>
            <ul className="mistake-list">
              {guide.mistakes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="panel full">
        <div className="section-title">
          <div>
            <p className="section-kicker">Sistemas e fontes</p>
            <h3>O que sustenta o guia</h3>
          </div>
        </div>

        <div className="systems-grid">
          {hero.systems.map((system) => (
            <article className="system-card" key={system.name}>
              <p className="mini-label">{system.input}</p>
              <h4>{system.name}</h4>
              <ul className="source-list">
                {system.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="coverage-grid" style={{ marginTop: 14 }}>
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

        <div className="mini-grid" style={{ marginTop: 14 }}>
          {evidenceSources.map((source) => (
            <article className="source-card" key={source!.id}>
              <p className="mini-label">{sourceLabel(source!.kind)} · confiança {displayConfidence(source!.confidence)}</p>
              <h4>{source!.title}</h4>
              <p>{source!.takeaways[0]}</p>
              <a href={source!.url} target="_blank" rel="noreferrer">
                Abrir fonte
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App




