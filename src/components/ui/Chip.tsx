import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

type ChipTone = 'neutral' | 'accent' | 'soft' | 'warn' | 'danger'

/** Pílula compacta de metadado (role, HP, dificuldade, fonte…). */
export function Chip({
  children,
  icon: Icon,
  tone = 'neutral',
  className,
  title,
}: {
  children: ReactNode
  icon?: LucideIcon
  tone?: ChipTone
  className?: string
  title?: string
}) {
  return (
    <span className={cx('chip', `is-${tone}`, className)} title={title}>
      {Icon ? <Icon size={14} aria-hidden="true" /> : null}
      <span>{children}</span>
    </span>
  )
}
