import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

type CalloutTone = 'info' | 'rule' | 'warn' | 'danger'

/** Caixa de destaque para regras, avisos e alertas. */
export function Callout({
  tone = 'info',
  title,
  className,
  children,
}: {
  tone?: CalloutTone
  title?: ReactNode
  className?: string
  children: ReactNode
}) {
  return (
    <aside className={cx('callout', `is-${tone}`, className)}>
      {title ? <p className="callout-title">{title}</p> : null}
      <div className="callout-body">{children}</div>
    </aside>
  )
}
