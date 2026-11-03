import { createContext, useContext } from 'react'

export interface SearchContextValue {
  /** Abre a busca global, opcionalmente já com um texto digitado. */
  openSearch: (initialQuery?: string) => void
}

export const SearchContext = createContext<SearchContextValue>({ openSearch: () => undefined })

export function useSearch() {
  return useContext(SearchContext)
}

/** Rótulo do atalho conforme o sistema (⌘K no Mac, Ctrl K no resto). */
export function shortcutLabel() {
  const platform =
    (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform ?? navigator.platform
  return /mac|iphone|ipad/i.test(platform) ? '⌘K' : 'Ctrl K'
}
