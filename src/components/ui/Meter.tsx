import { cx } from '../../lib/cx'
import { RichText } from './RichText'

/** Visualizador de estado (anéis, stances, cargas): grade de pips rótulo + valor. */
export function Meter({
  items,
  className,
}: {
  items: Array<{ label: string; value: string }>
  className?: string
}) {
  return (
    <div className={cx('system-meter', className)}>
      {items.map(({ label, value }) => (
        <div className="system-pip" key={label}>
          <span className="system-pip-label">
            <RichText text={label} />
          </span>
          <strong className="system-pip-value">
            <RichText text={value} />
          </strong>
        </div>
      ))}
    </div>
  )
}
