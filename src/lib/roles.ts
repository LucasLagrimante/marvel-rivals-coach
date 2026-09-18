import { Shield, Sparkles, Swords, type LucideIcon } from 'lucide-react'
import type { RoleKey } from '../types'

export const roleIcon: Record<RoleKey, LucideIcon> = {
  vanguard: Shield,
  duelist: Swords,
  strategist: Sparkles,
}

export const roleLabel: Record<RoleKey, string> = {
  vanguard: 'Vanguarda',
  duelist: 'Duelista',
  strategist: 'Estrategista',
}

export const selectionRoleOrder: RoleKey[] = ['vanguard', 'duelist', 'strategist']
