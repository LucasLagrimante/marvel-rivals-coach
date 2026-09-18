import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'
import { RichText } from './RichText'

function renderText(value: ReactNode): ReactNode {
  return typeof value === 'string' ? <RichText text={value} /> : value
}

/** Cabeçalho de seção: kicker + título + descrição opcional + ícone. */
export function SectionHead({
  kicker,
  title,
  description,
  icon: Icon,
  compact,
  action,
  className,
}: {
  kicker?: ReactNode
  title?: ReactNode
  description?: ReactNode
  icon?: LucideIcon
  compact?: boolean
  action?: ReactNode
  className?: string
}) {
  return (
    <header className={cx('section-head', compact && 'is-compact', className)}>
      <div className="section-head-copy">
        {kicker ? <p className="kicker">{renderText(kicker)}</p> : null}
        {title ? <h3>{renderText(title)}</h3> : null}
        {description ? <p className="section-head-desc">{renderText(description)}</p> : null}
      </div>
      {action ?? (Icon ? <Icon className="section-head-icon" size={20} aria-hidden="true" /> : null)}
    </header>
  )
}
