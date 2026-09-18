import { ListChecks } from 'lucide-react'
import type { RoleGuide, UpgradeStep } from '../../types'
import { Panel } from '../ui/Panel'
import { SectionHead } from '../ui/SectionHead'
import { ControlBadge } from '../ui/ControlBadge'
import { RichParagraph } from '../ui/RichParagraph'
import { RichText } from '../ui/RichText'
import { More } from '../ui/More'
import { FactLine } from '../ui/FactLine'

function PriorityCard({ step }: { step: UpgradeStep }) {
  const hasExtras = Boolean(step.baseEffect || step.upgradeEffect || step.fightNote)

  return (
    <article className="priority-card">
      <div className="tool-card-head">
        <ControlBadge token={step.input} spellNumber={step.spellNumber} />
        <small>{String(step.rank).padStart(2, '0')}</small>
      </div>

      <h4>
        <RichText text={step.ability} />
      </h4>
      <p className="priority-label">
        <RichText text={step.label} />
      </p>

      <RichParagraph className="priority-why" text={step.why} clamp={4} moreLabel="Continuar lendo" />

      {step.swapWhen ? (
        <p className="priority-swap">
          <span className="priority-swap-label">Troca quando</span>
          <RichText text={step.swapWhen} />
        </p>
      ) : null}

      {hasExtras ? (
        <More label="Detalhes técnicos" className="priority-more">
          {step.baseEffect ? <FactLine label="Base" text={step.baseEffect} tone="neutral" clamp={3} /> : null}
          {step.upgradeEffect ? <FactLine label="Com upgrade" text={step.upgradeEffect} tone="upgrade" clamp={3} /> : null}
          {step.fightNote ? <FactLine label="Em luta" text={step.fightNote} tone="info" clamp={3} /> : null}
        </More>
      ) : null}
    </article>
  )
}

/** Hierarquia de execução: cada card é uma decisão de habilidade, não um upgrade fixo. */
export function PriorityGrid({ guide }: { guide: RoleGuide }) {
  return (
    <Panel id="guia-prioridade" full className="priority-panel">
      <SectionHead
        kicker={guide.priorityKicker ?? 'Prioridade'}
        title={guide.priorityTitle ?? 'Ordem de decisão'}
        description={guide.priorityDescription}
        icon={ListChecks}
      />

      <div className="priority-grid">
        {guide.upgradePlan.map((step) => (
          <PriorityCard key={`${guide.key}-${step.rank}`} step={step} />
        ))}
      </div>
    </Panel>
  )
}
