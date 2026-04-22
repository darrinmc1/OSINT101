import { create } from "zustand"
import { persist } from "zustand/middleware"

// =============================================================================
// USER PROGRESS STORE — AI Mastery Hub
// =============================================================================
// Tracks lesson completion, reading progress, streak data, and bookmarks.
// Same pattern as Peel Boss, adapted for AI Hub modules.
// =============================================================================

export type LessonProgress = {
  moduleId: string
  started: boolean
  completed: boolean
  startedAt: string | null
  completedAt: string | null
  /** Scroll position (0-100) for resume functionality */
  scrollPercent: number
  /** Time spent reading in seconds */
  timeSpentSeconds: number
}

export type UserProgressState = {
  // Lesson progress keyed by module ID
  lessonProgress: Record<string, LessonProgress>
  // Bookmarked module IDs
  bookmarks: string[]
  // Streak tracking
  currentStreak: number
  longestStreak: number
  lastActivityDate: string | null
  // Total stats
  totalLessonsCompleted: number
  totalTimeSpentSeconds: number

  // ---- Actions ----
  startLesson: (moduleId: string) => void
  completeLesson: (moduleId: string) => void
  updateScrollProgress: (moduleId: string, percent: number) => void
  addReadingTime: (moduleId: string, seconds: number) => void
  toggleBookmark: (moduleId: string) => void
  updateStreak: () => void
  resetProgress: () => void

  // ---- Getters ----
  isLessonStarted: (moduleId: string) => boolean
  isLessonCompleted: (moduleId: string) => boolean
  isBookmarked: (moduleId: string) => boolean
  getLessonProgress: (moduleId: string) => LessonProgress | null
  getCompletedModuleIds: () => string[]
  getCompletionPercent: (totalModules: number) => number
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

function daysBetween(dateA: string, dateB: string): number {
  const a = new Date(dateA).getTime()
  const b = new Date(dateB).getTime()
  return Math.floor(Math.abs(b - a) / (1000 * 60 * 60 * 24))
}

export const useUserProgressStore = create<UserProgressState>()(
  persist(
    (set, get) => ({
      lessonProgress: {},
      bookmarks: [],
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: null,
      totalLessonsCompleted: 0,
      totalTimeSpentSeconds: 0,

      startLesson: (moduleId) =>
        set((state) => {
          const existing = state.lessonProgress[moduleId]
          if (existing?.started) return state
          return {
            lessonProgress: {
              ...state.lessonProgress,
              [moduleId]: {
                moduleId,
                started: true,
                completed: false,
                startedAt: new Date().toISOString(),
                completedAt: null,
                scrollPercent: 0,
                timeSpentSeconds: 0,
              },
            },
          }
        }),

      completeLesson: (moduleId) =>
        set((state) => {
          const existing = state.lessonProgress[moduleId]
          if (existing?.completed) return state
          return {
            lessonProgress: {
              ...state.lessonProgress,
              [moduleId]: {
                ...(existing || {
                  moduleId,
                  started: true,
                  startedAt: new Date().toISOString(),
                  scrollPercent: 100,
                  timeSpentSeconds: 0,
                }),
                completed: true,
                completedAt: new Date().toISOString(),
                scrollPercent: 100,
              },
            },
            totalLessonsCompleted: state.totalLessonsCompleted + 1,
          }
        }),

      updateScrollProgress: (moduleId, percent) =>
        set((state) => {
          const existing = state.lessonProgress[moduleId]
          if (!existing) return state
          return {
            lessonProgress: {
              ...state.lessonProgress,
              [moduleId]: {
                ...existing,
                scrollPercent: Math.max(existing.scrollPercent, percent),
              },
            },
          }
        }),

      addReadingTime: (moduleId, seconds) =>
        set((state) => {
          const existing = state.lessonProgress[moduleId]
          if (!existing) return state
          return {
            lessonProgress: {
              ...state.lessonProgress,
              [moduleId]: {
                ...existing,
                timeSpentSeconds: existing.timeSpentSeconds + seconds,
              },
            },
            totalTimeSpentSeconds: state.totalTimeSpentSeconds + seconds,
          }
        }),

      toggleBookmark: (moduleId) =>
        set((state) => {
          const isBookmarked = state.bookmarks.includes(moduleId)
          return {
            bookmarks: isBookmarked
              ? state.bookmarks.filter((id) => id !== moduleId)
              : [...state.bookmarks, moduleId],
          }
        }),

      updateStreak: () =>
        set((state) => {
          const today = todayKey()
          const last = state.lastActivityDate

          if (last === today) return state

          let newStreak = 1
          if (last && daysBetween(last, today) === 1) {
            newStreak = state.currentStreak + 1
          }

          return {
            currentStreak: newStreak,
            longestStreak: Math.max(state.longestStreak, newStreak),
            lastActivityDate: today,
          }
        }),

      resetProgress: () =>
        set({
          lessonProgress: {},
          bookmarks: [],
          currentStreak: 0,
          longestStreak: 0,
          lastActivityDate: null,
          totalLessonsCompleted: 0,
          totalTimeSpentSeconds: 0,
        }),

      // ---- Getters ----

      isLessonStarted: (moduleId) =>
        !!get().lessonProgress[moduleId]?.started,

      isLessonCompleted: (moduleId) =>
        !!get().lessonProgress[moduleId]?.completed,

      isBookmarked: (moduleId) => get().bookmarks.includes(moduleId),

      getLessonProgress: (moduleId) =>
        get().lessonProgress[moduleId] || null,

      getCompletedModuleIds: () =>
        Object.values(get().lessonProgress)
          .filter((p) => p.completed)
          .map((p) => p.moduleId),

      getCompletionPercent: (totalModules) => {
        if (totalModules === 0) return 0
        return Math.round(
          (get().totalLessonsCompleted / totalModules) * 100
        )
      },
    }),
    {
      name: "ai-hub-progress-storage",
    }
  )
)
