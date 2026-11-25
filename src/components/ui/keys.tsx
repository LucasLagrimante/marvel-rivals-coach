import type { ReactNode } from 'react'
import { getSpellControl, resolveInput } from '../../data/platformControls'
import type { Platform } from '../../data/platformControls'
import { usePlatform } from '../../context/platformState'

const TOKEN_PATTERN =
  /\[key:([^\]]+)\]|\((E|F|C|Q)\)|\btecla ([EFCQ])\b|\b(LMB|RMB|Shift|Melee)\b/g

/**
 * Substitui tokens `[key:TOKEN]` e referências legadas de tecla em prosa
 * (`(E)`, `(F)`, `(C)`, `(Q)`, `tecla C`, e LMB/RMB/Shift/Melee soltos) por
 * keycaps dinâmicos que respeitam a plataforma ativa.
 * Strings sem tecla retornam intactas — custo zero de runtime.
 * Guias novos devem usar sempre `[key:TOKEN]`; os padrões em prosa existem
 * para não deixar letra solta em conteúdo antigo.
 */
export function renderInlineKeys(text: string, platform: Platform): ReactNode {
  if (!/(?:\[key:|\((?:E|F|C|Q)\)|\btecla [EFCQ]\b|\b(?:LMB|RMB|Shift|Melee)\b)/.test(text)) {
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
        {resolveInput(match[1] ?? match[2] ?? match[3] ?? match[4], platform)}
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
