import { Gauge } from 'lucide-react'
import type { HeroGuide } from '../../types'
import { Panel } from '../ui/Panel'
import { SectionHead } from '../ui/SectionHead'
import { Meter } from '../ui/Meter'
import { ListBlock } from '../ui/ListBlock'

/**
 * Painel do sistema principal do herói (recurso, passiva ou mecânica central).
 * Não repete o coreRead do banner — mostra o estado do recurso e as regras de uso.
 */
export function SystemPanel({ system }: { system: HeroGuide['systems'][number] }) {
  return (
    <Panel id="guia-sistema" full tone="system" className="system-panel">
      <SectionHead
        kicker={system.name}
        title={system.heading ?? system.name}
        icon={Gauge}
      />

      {system.meter ? <Meter items={system.meter} /> : null}

      <ListBlock items={system.facts} limit={2} tone="info" moreLabel="Ver regras do sistema" />
    </Panel>
  )
}
