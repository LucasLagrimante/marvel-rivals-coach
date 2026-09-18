import { BadgeCheck, BookOpen, Database, Library, Video, type LucideIcon } from 'lucide-react'
import type { Confidence, SourceKind } from '../types'

export const sourceIcon: Record<SourceKind, LucideIcon> = {
  official: BadgeCheck,
  database: Database,
  guide: BookOpen,
  forum: Library,
  'video-transcript': Video,
}

export function sourceLabel(kind: SourceKind) {
  return {
    official: 'Oficial',
    database: 'Database',
    guide: 'Guia',
    forum: 'Fórum',
    'video-transcript': 'Vídeo',
  }[kind]
}

export function displayConfidence(confidence: Confidence | string) {
  return (
    {
      media: 'média',
      alta: 'alta',
      'em disputa': 'em disputa',
      pendente: 'pendente',
    }[confidence] ?? confidence
  )
}
