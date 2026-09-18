import { cx } from '../../lib/cx'
import { useControlLabel } from './keys'

/**
 * Keycap de controle — única forma de exibir tecla/botão na interface.
 * Aceita `token` (ex.: "LMB", "E / F") ou `spellNumber` (Deadpool).
 */
export function ControlBadge({
  token,
  spellNumber,
  className,
}: {
  token?: string
  spellNumber?: number
  className?: string
}) {
  const label = useControlLabel(token, spellNumber)

  return <kbd className={cx('control-badge', className)}>{label}</kbd>
}
