import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

export interface StatItem {
  label: ReactNode
  value: ReactNode
}

/** Grid de estatísticas rápidas (role, foco, primeira decisão…). */
export function StatGrid({
  items,
  className,
  variant = 'tile',
}: {
  items: StatItem[]
  className?: string
  variant?: 'tile' | 'inline'
}) {
  return (
    <dl className={cx('stat-grid', `is-${variant}`, className)}>
      {items.map((item, index) => (
        <div className="stat" key={index}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
