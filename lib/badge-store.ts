import { create } from "zustand"
import { persist } from "zustand/middleware"
import {
  TOPIC_BADGES,
  SPECIAL_BADGES,
  TIER_CONFIG,
  type Badge,
  type BadgeTier,
  type SpecialBadge,
  getBadgesForTopic,
} from "@/data/badges"

// =============================================================================
// BADGE / XP STORE — AI Mastery Hub (Robot Evolution Theme)
// =============================================================================
// Adapted from Peel Boss badge-store pattern for AI Hub's robot evolution tiers.
// =============================================================================

// ---- Types ----

export type UnlockedBadge = {
  badgeId: string
  unlockedAt: string // ISO date
  seen: boolean
}

export type TopicXP = {
  topicId: string
  xp: number
  lessonsCompleted: number
}

export type ActivityCompletion = {
  activityId: string
  activityType: string
  topicId: string
  score: number
  maxScore: number
  xpEarned: number
  completedAt: string
  attempts: number
}

export type SpecialBadgeContext = {
  modulesCompleted?: number
  totalModules?: number
  categoriesCompleted?: number
  streak?: number
  isFirstLesson?: boolean
  isEarlyMorning?: boolean
  isLateNight?: boolean
  completedModuleId?: string
  sessionDurationMinutes?: number
  returnAfterDays?: number
}

export type BadgeStoreState = {
  // Earned badges
  unlockedBadges: Record<string, UnlockedBadge>
  // XP per topic
  topicXP: Record<string, TopicXP>
  // Total XP
  totalXP: number
  // Pending notifications
  pendingNotifications: string[]
  // Quiz scores for special badge checks
  quizScores: { moduleId: string; score: number; date: string }[]
  // Session tracking
  sessionStartTime: string | null
  // Activity tracking
  completedActivities: Record<string, ActivityCompletion>

  // ---- Actions ----
  addTopicXP: (topicId: string, xp: number) => void
  completeLesson: (topicId: string) => void
  checkAndUnlockBadges: (topicId: string) => string[]
  checkSpecialBadges: (context: SpecialBadgeContext) => string[]
  markBadgeSeen: (badgeId: string) => void
  markAllSeen: () => void
  dismissNotification: (badgeId: string) => void
  recordQuizScore: (moduleId: string, score: number) => void
  startSession: () => void
  completeActivity: (input: {
    activityId: string
    activityType: string
    topicId: string
    score: number
    maxScore: number
    xpEarned: number
  }) => string[]

  // ---- Getters ----
  isBadgeUnlocked: (badgeId: string) => boolean
  getTopicTier: (topicId: string) => BadgeTier | null
  getTopicProgress: (topicId: string) => {
    currentTier: BadgeTier | null
    nextTier: BadgeTier | null
    xp: number
    xpNeeded: number
    lessons: number
    lessonsNeeded: number
    percent: number
  }
  getUnlockedCount: () => number
  getTotalBadgeCount: () => number
}

// ---- Tier order for progression ----
const TIER_ORDER: BadgeTier[] = [
  "basic-bot",
  "smart-assistant",
  "neural-network",
  "deep-mind",
  "superintelligence",
]

// ---- Store ----

export const useBadgeStore = create<BadgeStoreState>()(
  persist(
    (set, get) => ({
      unlockedBadges: {},
      topicXP: {},
      totalXP: 0,
      pendingNotifications: [],
      quizScores: [],
      sessionStartTime: null,
      completedActivities: {},

      addTopicXP: (topicId, xp) =>
        set((state) => {
          const current = state.topicXP[topicId] || {
            topicId,
            xp: 0,
            lessonsCompleted: 0,
          }
          return {
            topicXP: {
              ...state.topicXP,
              [topicId]: { ...current, xp: current.xp + xp },
            },
            totalXP: state.totalXP + xp,
          }
        }),

      completeLesson: (topicId) =>
        set((state) => {
          const current = state.topicXP[topicId] || {
            topicId,
            xp: 0,
            lessonsCompleted: 0,
          }
          const xpGain = 50
          return {
            topicXP: {
              ...state.topicXP,
              [topicId]: {
                ...current,
                xp: current.xp + xpGain,
                lessonsCompleted: current.lessonsCompleted + 1,
              },
            },
            totalXP: state.totalXP + xpGain,
          }
        }),

      checkAndUnlockBadges: (topicId) => {
        const state = get()
        const topicData = state.topicXP[topicId]
        if (!topicData) return []

        const topicBadges = getBadgesForTopic(topicId)
        const newlyUnlocked: string[] = []

        for (const badge of topicBadges) {
          if (state.unlockedBadges[badge.id]) continue
          if (
            topicData.xp >= badge.xpRequired &&
            topicData.lessonsCompleted >= badge.lessonsRequired
          ) {
            newlyUnlocked.push(badge.id)
          }
        }

        if (newlyUnlocked.length > 0) {
          set((state) => {
            const updated = { ...state.unlockedBadges }
            for (const id of newlyUnlocked) {
              updated[id] = {
                badgeId: id,
                unlockedAt: new Date().toISOString(),
                seen: false,
              }
            }
            return {
              unlockedBadges: updated,
              pendingNotifications: [
                ...state.pendingNotifications,
                ...newlyUnlocked,
              ],
            }
          })
        }

        return newlyUnlocked
      },

      checkSpecialBadges: (context) => {
        const state = get()
        const newlyUnlocked: string[] = []

        const check = (badge: SpecialBadge): boolean => {
          if (state.unlockedBadges[badge.id]) return false

          switch (badge.condition) {
            case "first_lesson":
              return context.isFirstLesson === true
            case "all_modules_completed":
              return (
                (context.totalModules ?? 0) > 0 &&
                (context.modulesCompleted ?? 0) >= (context.totalModules ?? 0)
              )
            case "half_modules":
              return (
                (context.totalModules ?? 0) > 0 &&
                (context.modulesCompleted ?? 0) >=
                  Math.ceil((context.totalModules ?? 0) / 2)
              )
            case "categories_3":
              return (context.categoriesCompleted ?? 0) >= 3
            case "total_xp_1000":
              return state.totalXP >= 1000
            case "total_xp_5000":
              return state.totalXP >= 5000
            case "total_xp_10000":
              return state.totalXP >= 10000
            case "streak_7":
              return (context.streak ?? 0) >= 7
            case "streak_30":
              return (context.streak ?? 0) >= 30
            case "streak_100":
              return (context.streak ?? 0) >= 100
            case "early_morning":
              return context.isEarlyMorning === true
            case "late_night":
              return context.isLateNight === true
            case "marathon_session":
              return (context.sessionDurationMinutes ?? 0) >= 120
            case "procrastination_return":
              return (context.returnAfterDays ?? 0) >= 7
            case "quiz_redemption": {
              const scores = state.quizScores
              const failedModules = new Set(
                scores.filter((s) => s.score < 70).map((s) => s.moduleId)
              )
              return Array.from(failedModules).some((mId) =>
                scores.some((s) => s.moduleId === mId && s.score === 100)
              )
            }
            default:
              // Handle "complete_<moduleId>" pattern
              if (badge.condition.startsWith("complete_")) {
                const moduleId = badge.condition.replace("complete_", "")
                return context.completedModuleId === moduleId
              }
              return false
          }
        }

        for (const badge of SPECIAL_BADGES) {
          if (check(badge)) {
            newlyUnlocked.push(badge.id)
          }
        }

        if (newlyUnlocked.length > 0) {
          set((state) => {
            const updated = { ...state.unlockedBadges }
            for (const id of newlyUnlocked) {
              updated[id] = {
                badgeId: id,
                unlockedAt: new Date().toISOString(),
                seen: false,
              }
            }
            return {
              unlockedBadges: updated,
              pendingNotifications: [
                ...state.pendingNotifications,
                ...newlyUnlocked,
              ],
            }
          })
        }

        return newlyUnlocked
      },

      markBadgeSeen: (badgeId) =>
        set((state) => ({
          unlockedBadges: {
            ...state.unlockedBadges,
            [badgeId]: { ...state.unlockedBadges[badgeId], seen: true },
          },
        })),

      markAllSeen: () =>
        set((state) => {
          const updated = { ...state.unlockedBadges }
          for (const key of Object.keys(updated)) {
            updated[key] = { ...updated[key], seen: true }
          }
          return { unlockedBadges: updated, pendingNotifications: [] }
        }),

      dismissNotification: (badgeId) =>
        set((state) => ({
          pendingNotifications: state.pendingNotifications.filter(
            (id) => id !== badgeId
          ),
          unlockedBadges: {
            ...state.unlockedBadges,
            [badgeId]: { ...state.unlockedBadges[badgeId], seen: true },
          },
        })),

      recordQuizScore: (moduleId, score) =>
        set((state) => ({
          quizScores: [
            ...state.quizScores,
            { moduleId, score, date: new Date().toISOString() },
          ],
        })),

      startSession: () => set({ sessionStartTime: new Date().toISOString() }),

      completeActivity: ({
        activityId,
        activityType,
        topicId,
        score,
        maxScore,
        xpEarned,
      }) => {
        set((state) => {
          const prev = state.completedActivities[activityId]
          const isBetter = !prev || xpEarned > prev.xpEarned
          const nextRecord: ActivityCompletion = isBetter
            ? {
                activityId,
                activityType,
                topicId,
                score,
                maxScore,
                xpEarned,
                completedAt: new Date().toISOString(),
                attempts: (prev?.attempts ?? 0) + 1,
              }
            : { ...prev, attempts: prev.attempts + 1 }

          const xpDelta = isBetter ? xpEarned - (prev?.xpEarned ?? 0) : 0
          const topicData = state.topicXP[topicId] || {
            topicId,
            xp: 0,
            lessonsCompleted: 0,
          }

          return {
            completedActivities: {
              ...state.completedActivities,
              [activityId]: nextRecord,
            },
            topicXP:
              xpDelta > 0
                ? {
                    ...state.topicXP,
                    [topicId]: {
                      ...topicData,
                      xp: topicData.xp + xpDelta,
                    },
                  }
                : state.topicXP,
            totalXP: state.totalXP + xpDelta,
          }
        })

        return get().checkAndUnlockBadges(topicId)
      },

      // ---- Getters ----

      isBadgeUnlocked: (badgeId) => !!get().unlockedBadges[badgeId],

      getTopicTier: (topicId) => {
        const state = get()
        const topicData = state.topicXP[topicId]
        if (!topicData) return null

        const reversedTiers = [...TIER_ORDER].reverse()
        const topicBadges = getBadgesForTopic(topicId)

        for (const tier of reversedTiers) {
          const badge = topicBadges.find((b) => b.tier === tier)
          if (badge && state.unlockedBadges[badge.id]) return tier
        }
        return null
      },

      getTopicProgress: (topicId) => {
        const state = get()
        const topicData = state.topicXP[topicId] || {
          xp: 0,
          lessonsCompleted: 0,
        }
        const currentTier = state.getTopicTier(topicId)

        const currentIndex = currentTier
          ? TIER_ORDER.indexOf(currentTier)
          : -1
        const nextTier =
          currentIndex < TIER_ORDER.length - 1
            ? TIER_ORDER[currentIndex + 1]
            : null

        const topicBadges = getBadgesForTopic(topicId)
        const nextBadge = nextTier
          ? topicBadges.find((b) => b.tier === nextTier)
          : null

        const xpNeeded = nextBadge ? nextBadge.xpRequired : 0
        const lessonsNeeded = nextBadge ? nextBadge.lessonsRequired : 0
        const percent = nextBadge
          ? Math.min(
              100,
              Math.round(
                (topicData.xp / nextBadge.xpRequired) * 50 +
                  (topicData.lessonsCompleted / nextBadge.lessonsRequired) * 50
              )
            )
          : 100

        return {
          currentTier,
          nextTier,
          xp: topicData.xp,
          xpNeeded,
          lessons: topicData.lessonsCompleted,
          lessonsNeeded,
          percent,
        }
      },

      getUnlockedCount: () => Object.keys(get().unlockedBadges).length,

      getTotalBadgeCount: () => TOPIC_BADGES.length + SPECIAL_BADGES.length,
    }),
    {
      name: "ai-hub-badge-storage",
    }
  )
)
