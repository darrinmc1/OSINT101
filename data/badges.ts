// Badges for OSINT 101 — shape matches template stubs expected by badge-store.ts.

import { siteConfig } from '@/lib/site-config'

export type BadgeTier = 0 | 1 | 2 | 3 | 4

export interface Badge {
  id: string
  name: string
  description: string
  emoji: string
  tier: BadgeTier
  topicId?: string
  category?: 'achievement' | 'streak' | 'milestone' | 'humor'
  xpRequired: number
  lessonsRequired: number
}

export type SpecialBadge = Badge & { category: NonNullable<Badge['category']> }

export const TIER_CONFIG = {
  tierNames: siteConfig.badges.tierNames,
  tierEmojis: siteConfig.badges.tierEmojis,
  xpPerTier: siteConfig.badges.xpPerTier,
  lessonsPerTier: siteConfig.badges.lessonsPerTier,
}

export const TOPIC_BADGES: Badge[] = []
export const SPECIAL_BADGES: SpecialBadge[] = []
export const ALL_BADGES: Badge[] = [...TOPIC_BADGES, ...SPECIAL_BADGES]

export function getBadgeById(id: string): Badge | null {
  return ALL_BADGES.find(b => b.id === id) ?? null
}

export function getBadgesForTopic(topicId: string): Badge[] {
  return ALL_BADGES.filter(b => b.topicId === topicId)
}
