import type { MouseEvent } from 'react'
import { ArrowRight, BookOpenCheck, Eye, Trophy } from 'lucide-react'
import { heroes } from '../../data/heroes'
import { rankings } from '../../data/rankings'
import { rumors } from '../../data/rumors'
import type { RoleKey } from '../../types'
import { roleIcon, roleLabel } from '../../lib/roles'
import { firstSentence, pluralize } from '../../lib/text'
import { heroPath, manualsPath, rankingPath, rumorsPath, type SectionKey } from '../../lib/routes'
import { Topbar } from '../shell/Topbar'
import { SectionNav } from '../shell/SectionNav'
import { Chip } from '../ui/Chip'
import { RichText } from '../ui/RichText'
import '../../styles/hub.css'

function formatDate(value: string) {
  const [year, month, day] = value.split('-')
  return year && month && day ? `${day}/${month}/${year}` : value
}

/**
 * Grande menu: a primeira dobra do app. Destaca o manual mais recente e abre as
 * três seções (Manuais, Ranking, Rumores) em portais com arte real do jogo.
 */
export function HubScreen({
  onNavigate,
  onSelectHero,
}: {
  onNavigate: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void
  onSelectHero: (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => void
}) {
  const newest = heroes[heroes.length - 1]
  const newestHook = firstSentence(newest.coreRead[0] ?? newest.confidenceSummary, 165)
  const leaders = rankings.categories.map((category) => ({ role: category.role, entry: category.entries[0] }))
  const ranked = rankings.categories.reduce((sum, category) => sum + category.entries.length, 0)
  const rankedGuides = new Set(
    rankings.categories.flatMap((category) => category.entries.map((entry) => entry.guideId)).filter(Boolean),
  ).size
  const pendingRumors = rumors.filter((rumor) => rumor.status === 'aguardando-definicao').length
  const rumorHero = heroes.find((hero) => hero.id === rumors.find((rumor) => rumor.id === 'gorr')?.id)

  return (
    <main className="app-shell hub-shell">
      <Topbar
        nav={<SectionNav active="menu" onNavigate={onNavigate} />}
        actions={
          <span className="meta-pill" title="Manuais publicados no app">
            <BookOpenCheck size={15} aria-hidden="true" />
            {pluralize(heroes.length, 'manual', 'manuais')}
          </span>
        }
      />

      <section className="hub" aria-labelledby="hub-title">
        <article className="hub-spotlight">
          <span className="hub-spotlight-art" aria-hidden="true">
            <img src={newest.bannerUrl} alt="" />
          </span>

          <div className="hub-spotlight-copy">
            <p className="kicker">Manual mais recente · {newest.game}</p>
            <h1 id="hub-title">{newest.name}</h1>
            <p className="hub-spotlight-hook">
              <RichText text={newestHook} />
            </p>
            <div className="hub-spotlight-foot">
              <a
                className="hub-cta"
                href={heroPath(newest.id)}
                onClick={(event) => onSelectHero(newest.id, event, newest.roles[0])}
              >
                Abrir manual
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <span className="hub-spotlight-note">
                Atualizado em {formatDate(newest.lastVerified)} · {pluralize(newest.sources.length, 'fonte', 'fontes')}
              </span>
            </div>
          </div>
        </article>

        <nav className="hub-portals" aria-label="Seções do site">
          <a
            className="hub-portal is-manuals"
            href={manualsPath()}
            onClick={(event) => onNavigate('manuais', event)}
          >
            <span className="hub-portal-art is-mural" aria-hidden="true">
              {heroes.slice(0, 12).map((hero) => (
                <img key={hero.id} src={hero.selectionPortraitUrl ?? hero.portraitUrl} alt="" loading="lazy" />
              ))}
            </span>
            <span className="hub-portal-copy">
              <span className="kicker">Biblioteca de guias</span>
              <h2>Manuais</h2>
              <p>
                {pluralize(heroes.length, 'herói dissecado', 'heróis dissecados')} em truques, team-ups, ultimates e
                fontes rastreáveis.
              </p>
            </span>
            <span className="hub-portal-cta">
              Abrir manuais
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          </a>

          <a
            className="hub-portal is-ranking"
            href={rankingPath()}
            onClick={(event) => onNavigate('ranking', event)}
          >
            <span className="hub-portal-art is-podium" aria-hidden="true">
              {leaders.map(({ entry }) => (
                <img key={entry.slug} src={entry.portraitUrl} alt="" loading="lazy" />
              ))}
            </span>
            <span className="hub-portal-copy">
              <span className="kicker">Meta ranqueado</span>
              <h2>Ranking</h2>
              <p>
                {ranked} personagens por rating, taxa de vitória e pick rate — {rankedGuides} já com manual no app.
              </p>
            </span>
            <span className="hub-portal-leaders">
              {leaders.map(({ role, entry }) => {
                const Icon = roleIcon[role]

                return (
                  <span className="hub-leader" key={entry.slug}>
                    <Icon size={13} strokeWidth={2.4} aria-hidden="true" />
                    <span className="hub-leader-role">{roleLabel[role]}</span>
                    <strong>{entry.name}</strong>
                    <Chip tone="neutral">Tier {entry.tier}</Chip>
                  </span>
                )
              })}
            </span>
            <span className="hub-portal-cta">
              Ver ranking
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          </a>

          <a
            className="hub-portal is-rumors"
            href={rumorsPath()}
            onClick={(event) => onNavigate('rumores', event)}
          >
            <span className="hub-portal-art is-veiled" aria-hidden="true">
              {rumorHero ? <img src={rumorHero.bannerUrl} alt="" loading="lazy" /> : null}
            </span>
            <span className="hub-portal-copy">
              <span className="speculation-seal">
                <Eye size={14} aria-hidden="true" />
                Área de especulação
              </span>
              <h2>Rumores</h2>
              <p>
                {pluralize(rumors.length, 'rumor catalogado', 'rumores catalogados')} — {pluralize(pendingRumors, 'candidato ainda em investigação', 'candidatos ainda em investigação')}, sempre separados dos dados dos manuais.
              </p>
            </span>
            <span className="hub-portal-cta">
              Ver rumores
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          </a>
        </nav>

        <footer className="hub-status">
          <span className="hub-status-item">
            <Trophy size={14} aria-hidden="true" />
            {rankings.season} · ranking atualizado em {formatDate(rankings.updatedAt)} — fonte{' '}
            <a href={rankings.source.url} target="_blank" rel="noreferrer">
              {rankings.source.name}
            </a>
          </span>
          <span className="hub-status-item">
            <BookOpenCheck size={14} aria-hidden="true" />
            {pluralize(heroes.length, 'manual publicado', 'manuais publicados')} com fontes na íntegra
          </span>
          <span className="hub-status-item">
            <Eye size={14} aria-hidden="true" />
            {pluralize(rumors.length, 'rumor catalogado', 'rumores catalogados')}
          </span>
        </footer>
      </section>
    </main>
  )
}
