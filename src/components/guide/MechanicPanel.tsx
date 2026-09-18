import { Layers3, Zap } from 'lucide-react'
import type { RoleGuide } from '../../types'
import { Callout } from '../ui/Callout'
import { RichText } from '../ui/RichText'
import { SectionHead } from '../ui/SectionHead'
import { ListBlock } from '../ui/ListBlock'

/** Mecânica-chave (dash/avanço) + treino prático para dominá-la. */
export function MechanicPanel({ guide }: { guide: RoleGuide }) {
  return (
    <>
      <SectionHead kicker="Mecânica-chave" title={guide.dashGuide.ability} icon={Zap} />

      <Callout tone="rule" className="mechanic-rule">
        <RichText text={guide.dashGuide.shortRule} />
      </Callout>

      <div className="mini-grid">
        <div className="mini-col">
          <p className="kicker">Mecânica</p>
          <ListBlock items={guide.dashGuide.mechanics} limit={2} tone="info" moreLabel="Ver mecânica" />
        </div>
        <div className="mini-col">
          <p className="kicker">Treino</p>
          <ListBlock items={guide.dashGuide.drills} limit={1} tone="check" moreLabel="Ver treinos" />
        </div>
      </div>
    </>
  )
}

/** Sistema secundário do herói (team-up, recurso de apoio, passiva extra). */
export function SecondarySystemPanel({ system }: { system: { name: string; heading?: string; facts: string[] } }) {
  return (
    <>
      <SectionHead kicker={system.name} title={system.heading ?? system.name} icon={Layers3} />
      <ListBlock items={system.facts} limit={2} tone="info" moreLabel="Ver sistema" />
    </>
  )
}
