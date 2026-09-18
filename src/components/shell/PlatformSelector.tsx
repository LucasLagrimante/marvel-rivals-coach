import { Gamepad2, Joystick, Monitor, type LucideIcon } from 'lucide-react'
import { usePlatform } from '../../context/platformState'
import type { Platform } from '../../data/platformControls'

const platformOptions: { id: Platform; label: string; sub: string; Icon: LucideIcon }[] = [
  { id: 'pc', label: 'PC', sub: 'Teclado/Mouse', Icon: Monitor },
  { id: 'playstation', label: 'PS5', sub: 'DualSense', Icon: Gamepad2 },
  { id: 'xbox', label: 'Xbox', sub: 'Controller', Icon: Joystick },
]

/** Seletor de plataforma — define como os keycaps de controle são exibidos. */
export function PlatformSelector() {
  const { platform, setPlatform } = usePlatform()

  return (
    <div className="platform-selector" role="group" aria-label="Plataforma de controle">
      {platformOptions.map(({ id, label, sub, Icon }) => (
        <button
          key={id}
          className={`platform-btn ${platform === id ? 'is-active' : ''}`}
          onClick={() => setPlatform(id)}
          type="button"
          aria-pressed={platform === id}
          title={`Mostrar controles para ${label}`}
        >
          <Icon size={15} strokeWidth={2} aria-hidden="true" />
          <span className="platform-btn-text">
            <span className="platform-btn-name">{label}</span>
            <span className="platform-btn-sub">{sub}</span>
          </span>
        </button>
      ))}
    </div>
  )
}
