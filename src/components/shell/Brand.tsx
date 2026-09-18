import type { MouseEvent } from 'react'
import { baseUrl } from '../../lib/routes'

/** Marca do app — favicon + wordmark; clicar volta ao menu principal. */
export function Brand({
  onOpenMenu,
}: {
  onOpenMenu?: (event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <a className="brand" href={baseUrl()} onClick={onOpenMenu} aria-label="Voltar ao menu principal">
      <img className="brand-mark" src={`${baseUrl()}favicon.ico?v=4`} alt="" aria-hidden="true" />
      <span className="brand-copy">
        <span className="brand-eyebrow">Next fight</span>
        <span className="brand-title">Rivals Coach</span>
      </span>
    </a>
  )
}
