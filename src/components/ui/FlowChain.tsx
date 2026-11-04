import { ChevronRight } from 'lucide-react'
import { cx } from '../../lib/cx'
import { ControlBadge } from './ControlBadge'
import { RichText } from './RichText'
import { BuySlotBadge } from './BuySlotBadge'

export interface FlowStep {
  token?: string
  spellNumber?: number
  title: string
  note?: string
  /** Slot de compra no livro de upgrades (exibido como tecla numérica no PC). */
  buySlot?: number
}

/**
 * Corrente visual de habilidades (loop/rotação).
 * Os passos são conectados por setas e quebram linha sem quebrar o layout.
 */
export function FlowChain({
  steps,
  className,
  ariaLabel = 'Loop de habilidades',
}: {
  steps: FlowStep[]
  className?: string
  ariaLabel?: string
}) {
  return (
    <div className={cx('ability-loop', className)} role="list" aria-label={ariaLabel}>
      {steps.map((step, index) => (
        <div className="ability-loop-track" role="listitem" key={`${step.title}-${index}`}>
          {index > 0 ? (
            <span className="ability-loop-arrow" aria-hidden="true">
              <ChevronRight size={16} />
            </span>
          ) : null}
          <article className="ability-loop-step">
            {step.buySlot !== undefined ? <BuySlotBadge slot={step.buySlot} /> : null}
            {step.token !== undefined || step.spellNumber !== undefined ? (
              <ControlBadge token={step.token} spellNumber={step.spellNumber} className="ability-loop-key" />
            ) : null}
            <strong>
              <RichText text={step.title} />
            </strong>
            {step.note ? (
              <p>
                <RichText text={step.note} />
              </p>
            ) : null}
          </article>
        </div>
      ))}
    </div>
  )
}
