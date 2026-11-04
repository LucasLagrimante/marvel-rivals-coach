import { usePlatform } from '../../context/platformState'

/**
 * Número de compra no livro de upgrades (Deadpool). No PC o upgrade é comprado
 * apertando a tecla numérica, então vira keycap; no console mostra só o slot.
 */
export function BuySlotBadge({ slot }: { slot: number }) {
  const { platform } = usePlatform()

  return (
    <span className="buy-slot" title={`Upgrade nº ${slot} do livro`}>
      <span className="buy-slot-label">Comprar</span>
      {platform === 'pc' ? (
        <kbd className="control-badge buy-slot-key">{slot}</kbd>
      ) : (
        <span className="buy-slot-number">nº {slot}</span>
      )}
    </span>
  )
}
