import type { MouseEvent } from 'react'
import { rankings } from '../../data/rankings'
import type { RoleKey } from '../../types'
import { manualsPath, type SectionKey } from '../../lib/routes'
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
      <Topbar
        nav={<SectionNav active="ranking" onNavigate={onNavigate} />}
        actions={
          <a
            className="meta-pill"
            href={manualsPath()}
            onClick={(event) => onNavigate('manuais', event)}
            title="Ver a biblioteca de manuais"
          >
            Manuais de herói
          </a>
        }
      />

      <section className="screen" aria-labelledby="ranking-screen-title">
        <header className="screen-heading">
          <p className="kicker">Meta ranqueado · {rankings.season}</p>
          <h1 id="ranking-screen-title">Ranking</h1>
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
