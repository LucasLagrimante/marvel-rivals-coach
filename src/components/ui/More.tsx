import { useState, type ReactNode } from 'react'
import { cx } from '../../lib/cx'

/**
 * Disclosure progressivo — mantém o detalhe acessível sem inflar a primeira leitura.
 * `collapsed` mostra o preview fechado; `children` é o conteúdo completo (montado só quando aberto).
 */
export function More({
  label = 'Ver mais',
  count,
  collapsed,
  children,
  className,
}: {
  label?: string
  count?: number
  collapsed?: ReactNode
  children: ReactNode
  className?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={cx('more', open && 'is-open', className)}>
      {open ? <div className="more-content">{children}</div> : collapsed ? <div className="more-preview">{collapsed}</div> : null}
      <button
        type="button"
        className="more-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Ver menos' : label}
        {!open && count ? <span className="more-count">+{count}</span> : null}
      </button>
    </div>
  )
}
