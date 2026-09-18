import { cx } from '../../lib/cx'
import { RichParagraph } from './RichParagraph'

type FactTone = 'neutral' | 'info' | 'warn' | 'danger' | 'upgrade'

/** Linha rótulo + texto (Uso, Execução, Troca quando, Base, Upgrade…). */
export function FactLine({
  label,
  text,
  tone = 'neutral',
  clamp = 3,
  className,
}: {
  label: string
  text: string
  tone?: FactTone
  clamp?: 2 | 3 | 4 | 5
  className?: string
}) {
  return (
    <div className={cx('fact-line', `is-${tone}`, className)}>
      <span className="fact-line-label">{label}</span>
      <RichParagraph text={text} clamp={clamp} />
    </div>
  )
}
