import type { ReactNode } from 'react'
import { getSpellControl, resolveInput } from '../../data/platformControls'
import type { Platform } from '../../data/platformControls'
import { usePlatform } from '../../context/platformState'

const TOKEN_PATTERN = /\[key:([^\]]+)\]|\b(LMB|RMB|Shift|Melee)\b/g

/**
 * Substitui tokens `[key:TOKEN]` (e teclas soltas LMB/RMB/Shift/Melee)
 * por keycaps dinâmicos que respeitam a plataforma ativa.
 * Strings sem tokens retornam intactas — custo zero de runtime.
 */
export function renderInlineKeys(text: string, platform: Platform): ReactNode {
  if (!text.includes('[key:') && !/(LMB|RMB|Shift|Melee)/.test(text)) {
    return text
  }

  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  TOKEN_PATTERN.lastIndex = 0
  while ((match = TOKEN_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    parts.push(
      <kbd key={`${match.index}-${match[0]}`} className="control-badge">
        {resolveInput(match[1] ?? match[2], platform)}
      </kbd>,
    )
    lastIndex = TOKEN_PATTERN.lastIndex
  }

  if (parts.length === 0) return text
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts
}

/** Resolve o rótulo visual de um input de ability para a plataforma ativa. */
export function useControlLabel(token?: string, spellNumber?: number): string {
  const { platform } = usePlatform()

  if (spellNumber !== undefined) {
    return getSpellControl(spellNumber, platform)
  }

  return resolveInput(token ?? '', platform)
}
