import type { MouseEvent, ReactNode } from 'react'
import { Brand } from './Brand'
import { PlatformSelector } from './PlatformSelector'

/** Barra superior do app — marca, conteúdo central, ações e navegação opcional. */
export function Topbar({
  center,
  actions,
  nav,
  onOpenMenu,
}: {
  center?: ReactNode
  actions?: ReactNode
  nav?: ReactNode
  onOpenMenu?: (event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <header className="topbar">
      <Brand onOpenMenu={onOpenMenu} />
      {center ? <div className="topbar-center">{center}</div> : null}
      <div className="topbar-actions">
        <PlatformSelector />
        {actions}
      </div>
      {nav ? <div className="topbar-nav">{nav}</div> : null}
    </header>
  )
}
