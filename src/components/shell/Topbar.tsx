import type { MouseEvent, ReactNode } from 'react'
import { Brand } from './Brand'
import { PlatformSelector } from './PlatformSelector'
import { SearchTrigger } from '../search/SearchTrigger'

/**
 * Barra superior do app — marca, navegação de seções, contexto opcional,
 * busca global, plataforma e ações. `nav` é a segunda linha (seções do guia).
 */
export function Topbar({
  sections,
  center,
  actions,
  nav,
  onOpenMenu,
}: {
  sections?: ReactNode
  center?: ReactNode
  actions?: ReactNode
  nav?: ReactNode
  onOpenMenu?: (event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <header className="topbar">
      <div className="topbar-row">
        <Brand onOpenMenu={onOpenMenu} />
        {sections ? <div className="topbar-sections">{sections}</div> : null}
        {center ? <div className="topbar-center">{center}</div> : null}
        <div className="topbar-actions">
          <SearchTrigger />
          <PlatformSelector />
          {actions}
        </div>
      </div>
      {nav ? <div className="topbar-nav">{nav}</div> : null}
    </header>
  )
}
