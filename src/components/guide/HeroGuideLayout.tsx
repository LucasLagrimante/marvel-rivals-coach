import type { HeroGuide, RoleGuide, Source } from '../../types'
import { PrimerSection } from './PrimerSection'
import { TeamUpPanel } from './TeamUpPanel'
import { SystemPanel } from './SystemPanel'
import { PriorityGrid } from './PriorityGrid'
import { MechanicPanel, SecondarySystemPanel } from './MechanicPanel'
import { UltimatePanel } from './UltimatePanel'
import { ReadPanel } from './ReadPanel'
import { PatternsPanel } from './PatternsPanel'
import { EvidenceDock } from './EvidenceDock'

/**
 * Layout universal do guia — ordem de leitura fixa para todos os heróis:
 * 1. Primer (V principal)          5. Ultimate + Leitura
 * 2. Team-Up ativo                 6. Roteiros de luta
 * 3. Sistema principal             7. Fontes (dock flutuante)
 * 4. Prioridade de habilidades
 * 5. Mecânica-chave + secundário
 */
export function HeroGuideLayout({
  guide,
  hero,
  evidenceOpen,
  onEvidenceOpenChange,
}: {
  guide: RoleGuide
  hero: HeroGuide
  evidenceOpen: boolean
  onEvidenceOpenChange: (open: boolean) => void
}) {
  const primarySystem = hero.systems[0]
  const secondarySystem = hero.systems[1]
  const sourceIds = Array.from(new Set([...guide.evidence, ...(hero.teamUps?.sourceIds ?? [])]))
  const evidenceSources = sourceIds
    .map((id) => hero.sources.find((source) => source.id === id))
    .filter((source): source is Source => Boolean(source))

  return (
    <div className="guide-grid">
      <PrimerSection guide={guide} hero={hero} />

      {hero.teamUps ? <TeamUpPanel teamUps={hero.teamUps} /> : null}

      {primarySystem ? <SystemPanel system={primarySystem} /> : null}

      <PriorityGrid guide={guide} />

      <section id="guia-mecanica" className="connected-panel full">
        <article className="connected-card">
          <MechanicPanel guide={guide} />
        </article>
        {secondarySystem ? (
          <article className="connected-card">
            <SecondarySystemPanel system={secondarySystem} />
          </article>
        ) : null}
      </section>

      <section id="guia-ultimate" className="connected-panel full">
        <article className="connected-card">
          <UltimatePanel guide={guide} />
        </article>
        <article className="connected-card">
          <ReadPanel guide={guide} />
        </article>
      </section>

      <PatternsPanel guide={guide} />

      <EvidenceDock
        hero={hero}
        sources={evidenceSources}
        open={evidenceOpen}
        onOpenChange={onEvidenceOpenChange}
      />
    </div>
  )
}
