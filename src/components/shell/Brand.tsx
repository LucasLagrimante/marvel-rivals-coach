import type { MouseEvent } from 'react'
import { baseUrl } from '../../lib/routes'

/** Marca do app — selo + nome; clicar volta ao início. */
export function Brand({
  onOpenMenu,
}: {
  onOpenMenu?: (event?: MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <a className="brand" href={baseUrl()} onClick={onOpenMenu} aria-label="Rivals Coach — voltar ao início">
      <img className="brand-mark" src={`${baseUrl()}favicon.ico?v=4`} alt="" width={32} height={32} aria-hidden="true" />
      <span className="brand-title">
        Rivals<span>Coach</span>
      </span>
    </a>
  )
}
