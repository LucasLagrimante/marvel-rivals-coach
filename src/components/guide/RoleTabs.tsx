import type { RoleKey } from '../../types'
import { roleIcon, roleLabel } from '../../lib/roles'

/** Abas de role do herói (Deadpool tem 3, a maioria tem 1). */
export function RoleTabs({
  roles,
  active,
  onChange,
}: {
  roles: RoleKey[]
  active: RoleKey
  onChange: (role: RoleKey) => void
}) {
  if (roles.length < 2) return null

  return (
    <nav className="role-tabs" aria-label="Roles do personagem">
      {roles.map((role) => {
        const Icon = roleIcon[role]

        return (
          <button
            className={`role-tab ${role === active ? 'is-active' : ''}`}
            key={role}
            onClick={() => onChange(role)}
            type="button"
            aria-pressed={role === active}
          >
            <Icon size={17} aria-hidden="true" />
            {roleLabel[role]}
          </button>
        )
      })}
    </nav>
  )
}
