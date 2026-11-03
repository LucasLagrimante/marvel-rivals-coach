import { useEffect } from 'react'

function isEditable(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)
}

/** Letra/dígito simples (inclui acentuadas) — o que inicia a busca "digitando em qualquer lugar". */
const PRINTABLE = /^[\p{L}\p{N}]$/u

/**
 * Atalhos da busca global:
 * - Ctrl/⌘ + K alterna a busca em qualquer tela;
 * - "/" abre a busca;
 * - com `typeToSearch`, começar a digitar uma letra fora de um campo abre a
 *   busca já com essa letra (a tecla não se perde).
 */
export function useSearchHotkeys({
  open,
  onOpen,
  onToggle,
  typeToSearch,
}: {
  open: boolean
  onOpen: (initialQuery?: string) => void
  onToggle: () => void
  typeToSearch: boolean
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.isComposing) return

      if ((event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        onToggle()
        return
      }

      if (open || isEditable(event.target) || event.ctrlKey || event.metaKey || event.altKey) return

      if (event.key === '/') {
        event.preventDefault()
        onOpen()
        return
      }

      if (typeToSearch && PRINTABLE.test(event.key)) {
        event.preventDefault()
        onOpen(event.key)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onOpen, onToggle, typeToSearch])
}
