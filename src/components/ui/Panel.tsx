import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

type PanelTone = 'base' | 'system' | 'quiet'

/**
 * Superfície padrão de seção. Toda seção do guia usa Panel.
 * `tone="system"` dá destaque ao sistema principal do herói.
 */
export function Panel({
  id,
  tone = 'base',
  full,
  className,
  children,
}: {
  id?: string
  tone?: PanelTone
  full?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={cx('panel', `panel-${tone}`, full && 'panel-full', className)}>
      {children}
    </section>
  )
}
