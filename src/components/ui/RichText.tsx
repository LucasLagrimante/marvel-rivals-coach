import { usePlatform } from '../../context/platformState'
import { renderInlineKeys } from './keys'

/**
 * Renderiza texto corrido convertendo `[key:TOKEN]` em keycaps de controle.
 * Use em QUALQUER campo textual que possa citar teclas de controle.
 */
export function RichText({ text }: { text: string }) {
  const { platform } = usePlatform()
  return <>{renderInlineKeys(text, platform)}</>
}
