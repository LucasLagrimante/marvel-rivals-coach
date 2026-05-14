export type Platform = 'pc' | 'playstation' | 'xbox'

type ControlEntry = { pc: string; playstation: string; xbox: string }

const inputMap: Record<string, ControlEntry> = {
  LMB: { pc: 'Clique Esq.', playstation: 'R2', xbox: 'RT' },
  RMB: { pc: 'Clique Dir.', playstation: 'L2', xbox: 'LT' },
  Shift: { pc: 'Shift', playstation: 'R1', xbox: 'RB' },
  E: { pc: 'E', playstation: 'L1', xbox: 'LB' },
  Q: { pc: 'Q', playstation: 'Triângulo', xbox: 'Y' },
  F: { pc: 'F', playstation: 'Círculo', xbox: 'B' },
  C: { pc: 'C', playstation: '↑ D-pad', xbox: '↑ D-pad' },
  Melee: { pc: 'V', playstation: 'R3', xbox: 'RS' },
  Passiva: { pc: 'Passiva', playstation: 'Passiva', xbox: 'Passiva' },
  Recurso: { pc: 'Recurso', playstation: 'Recurso', xbox: 'Recurso' },
}

// Deadpool usa spellNumber em vez de input (sistema de stance pistola/katana)
export const spellNumberMap: Record<number, ControlEntry> = {
  1: { pc: 'Clique Esq.', playstation: 'R2', xbox: 'RT' },
  2: { pc: 'Clique Esq.', playstation: 'R2', xbox: 'RT' },
  3: { pc: 'Clique Dir.', playstation: 'L2', xbox: 'LT' },
  4: { pc: 'Clique Dir.', playstation: 'L2', xbox: 'LT' },
  5: { pc: 'E', playstation: 'L1', xbox: 'LB' },
  6: { pc: 'Q', playstation: 'Triângulo', xbox: 'Y' },
  7: { pc: 'Q', playstation: 'Triângulo', xbox: 'Y' },
}

function resolveToken(token: string, platform: Platform): string {
  const trimmed = token.trim()
  return inputMap[trimmed]?.[platform] ?? trimmed
}

export function resolveInput(input: string, platform: Platform): string {
  // 'C - Team-Up' → resolve 'C', manter sufixo
  const teamUpMatch = input.match(/^([A-Za-z]+)\s+-\s+(.+)$/)
  if (teamUpMatch) {
    const [, key, suffix] = teamUpMatch
    return `${resolveToken(key, platform)} - ${suffix}`
  }

  // 'E / F' → separador com espaços
  if (input.includes(' / ')) {
    return input.split(' / ').map((p) => resolveToken(p, platform)).join(' / ')
  }

  // 'RMB/E' → separador sem espaço
  if (input.includes('/')) {
    return input.split('/').map((p) => resolveToken(p, platform)).join('/')
  }

  return resolveToken(input, platform)
}

export function getSpellControl(spellNumber: number, platform: Platform): string {
  return spellNumberMap[spellNumber]?.[platform] ?? `Magia ${spellNumber}`
}
