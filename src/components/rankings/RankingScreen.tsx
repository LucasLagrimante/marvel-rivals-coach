import type { MouseEvent } from 'react'
import { rankings } from '../../data/rankings'
import type { RoleKey } from '../../types'
import type { SectionKey } from '../../lib/routes'
import { Topbar } from '../shell/Topbar'
import { SectionNav } from '../shell/SectionNav'
import { RankingsBoard } from './RankingsBoard'
import '../../styles/hub.css'

/** Tela /ranking: o tier list completo da temporada. */
export function RankingScreen({
  onNavigate,
  onSelectHero,
}: {
  onNavigate: (target: SectionKey, event?: MouseEvent<HTMLAnchorElement>) => void
  onSelectHero: (heroId: string, event?: MouseEvent<HTMLAnchorElement>, role?: RoleKey) => void
}) {
  return (
    <main className="app-shell hub-shell">
      <Topbar sections={<SectionNav active="ranking" onNavigate={onNavigate} />} />

      <section className="page screen" aria-labelledby="ranking-screen-title">
        <header className="screen-heading">
          <h1 id="ranking-screen-title">Ranking</h1>
          <span className="screen-heading-meta">
            <span>Meta ranqueado</span>
            <span>{rankings.season}</span>
          </span>
          <p>
            {rankings.scope}. O rating vai de 0 a 100 conforme a taxa de vitória ajustada por amostra — quem tem mais
            partidas ranqueadas pesa mais que quem tem poucas.
          </p>
        </header>

        <RankingsBoard onSelectHero={onSelectHero} />
      </section>
    </main>
  )
}
