import { useState } from 'react'
import { Search } from 'lucide-react'
import { shortcutLabel, useSearch } from '../../context/searchState'

/** Botão de busca do topbar — mostra o atalho do sistema (⌘K / Ctrl K). */
export function SearchTrigger() {
  const { openSearch } = useSearch()
  const [shortcut] = useState(shortcutLabel)

  return (
    <button
      type="button"
      className="search-trigger"
      onClick={() => openSearch()}
      aria-label={`Buscar herói (${shortcut})`}
      aria-keyshortcuts="Control+K Meta+K /"
    >
      <Search size={17} strokeWidth={2.4} aria-hidden="true" />
      <span className="search-trigger-label">Buscar herói</span>
      <kbd>{shortcut}</kbd>
    </button>
  )
}
