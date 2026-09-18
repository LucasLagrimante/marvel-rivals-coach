/** Retorna a primeira frase de um texto, cortando com “…” se necessário. */
export function firstSentence(text: string, maxLength = 220): string {
  const clean = text.trim().replace(/\s+/g, ' ')
  const match = clean.match(/^(.+?[.!?])(\s|$)/)
  const sentence = match?.[1] ?? clean

  if (sentence.length <= maxLength) {
    return sentence
  }

  const cut = sentence.slice(0, maxLength)
  const lastSpace = cut.lastIndexOf(' ')

  return `${(lastSpace > 40 ? cut.slice(0, lastSpace) : cut).replace(/[,;:]$/, '')}…`
}

/** Localiza o primeiro ":" fora de tokens `[key:...]`. */
function findSafeSeparator(text: string): number {
  let inToken = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]

    if (char === '[') {
      inToken = true
    } else if (char === ']') {
      inToken = false
    } else if (char === ':' && !inToken) {
      return index
    }
  }

  return -1
}

/** Extrai o prefixo antes de ":" como título curto, quando ele existe e cabe. */
export function leadTitle(text: string, maxLength = 90): { title?: string; body: string } {
  const clean = text.trim()
  const separator = findSafeSeparator(clean)

  if (separator > 0) {
    const candidate = clean
      .slice(0, separator)
      .replace(/\[key:[^\]]+\]/g, '')
      .replace(/\(\s*(?:→|->|[-–/,]|\s)*\)/g, '')
      .replace(/\(\s*→\s*/g, '(')
      .replace(/\s{2,}/g, ' ')
      .trim()

    if (candidate.length >= 3 && candidate.length <= maxLength && !candidate.includes('. ')) {
      const body = clean.slice(separator + 1).trim()
      return { title: candidate, body: capitalize(body) }
    }
  }

  return { body: clean }
}

/** Rótulo curto para cards sem título natural: primeiras palavras do texto. */
export function shortLabel(text: string, maxChars = 52): string {
  const clean = text
    .replace(/\[key:[^\]]+\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  if (clean.length <= maxChars) return clean

  const cut = clean.slice(0, maxChars)
  const lastSpace = cut.lastIndexOf(' ')

  return `${(lastSpace > 24 ? cut.slice(0, lastSpace) : cut).replace(/[,;:]$/, '')}…`
}

export function capitalize(text: string) {
  return text.length > 0 ? text[0].toUpperCase() + text.slice(1) : text
}

export function pluralize(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`
}
