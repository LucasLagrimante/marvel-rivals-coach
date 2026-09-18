import { ShieldAlert } from 'lucide-react'
import type { RoleGuide } from '../../types'
import { SectionHead } from '../ui/SectionHead'
import { ListBlock } from '../ui/ListBlock'

/** Leitura de jogo: adaptações, erros que entregam a luta e plano de jogo. */
export function ReadPanel({ guide }: { guide: RoleGuide }) {
  return (
    <>
      <SectionHead kicker="Leitura" title="Adaptações e erros" icon={ShieldAlert} />

      <div className="mini-grid">
        <div className="mini-col">
          <p className="kicker">Adapte quando</p>
          <ListBlock items={guide.adaptations} limit={2} tone="warn" moreLabel="Ver adaptações" />
        </div>
        <div className="mini-col">
          <p className="kicker">Erros que entregam a luta</p>
          <ListBlock items={guide.mistakes} limit={2} tone="danger" moreLabel="Ver erros" />
        </div>
      </div>

      {guide.playstyle.length > 0 ? (
        <div className="playstyle-block">
          <p className="kicker">Plano de jogo</p>
          <ListBlock items={guide.playstyle} limit={1} tone="plain" moreLabel="Ver plano de jogo" />
        </div>
      ) : null}
    </>
  )
}
