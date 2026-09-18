import { cx } from '../../lib/cx'
import { More } from './More'
import { RichText } from './RichText'

export type ListTone = 'info' | 'warn' | 'danger' | 'check' | 'plain'

/**
 * Lista com marcador semântico e disclosure progressivo.
 * Mostra `limit` itens e esconde o resto atrás de "Ver mais".
 */
export function ListBlock({
  items,
  limit = 2,
  tone = 'info',
  className,
  itemClassName,
  moreLabel = 'Ver mais detalhes',
}: {
  items: string[]
  limit?: number
  tone?: ListTone
  className?: string
  itemClassName?: string
  moreLabel?: string
}) {
  if (items.length === 0) return null

  const visible = items.slice(0, limit)
  const hidden = items.slice(limit)
  const listClass = cx('bullet-list', `is-${tone}`, className)

  return (
    <>
      <ul className={listClass}>
        {visible.map((item) => (
          <li className={itemClassName} key={item}>
            <RichText text={item} />
          </li>
        ))}
      </ul>

      {hidden.length > 0 ? (
        <More label={moreLabel} count={hidden.length}>
          <ul className={listClass}>
            {hidden.map((item) => (
              <li className={itemClassName} key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </More>
      ) : null}
    </>
  )
}
