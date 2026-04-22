"use client"

import { siteConfig, getBadgeDisplay, getTierProgress } from "@/lib/site-config"
import { learningModules } from "@/data/modules"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  TrendingUp,
  Award,
  Zap,
  Clock,
  ChevronRight,
} from "lucide-react"

// Mock data — will be replaced with real user state from zustand/API
const mockUser = {
  name: "Analyst",
  xp: 150,
  lessonsCompleted: 3,
  streakDays: 5,
  totalHours: 8.5,
}

const moduleEmojis = ["\u{1F50D}", "\u{1F5A5}", "\u{1F9D1}"]
const moduleProgress = [100, 65, 30]

const recentLessons = Object.values(learningModules)
  .slice(0, 3)
  .map((mod, i) => ({
    id: mod.id,
    title: mod.title,
    category: mod.level.toLowerCase(),
    progress: moduleProgress[i] ?? 0,
    emoji: moduleEmojis[i] ?? "\u{1F3AF}",
  }))

const earnedBadges = [
  {
    name: "First Steps",
    emoji: "\u{1F463}",
    description: "Complete your first lesson",
  },
  {
    name: "Prompt Rookie",
    emoji: "\u{1F3AF}",
    description: "Write 10 effective prompts",
  },
  {
    name: "Streak Starter",
    emoji: "\u{1F525}",
    description: "Maintain a 3-day learning streak",
  },
]

export default function DashboardPage() {
  const badge = getBadgeDisplay(siteConfig, mockUser.xp)
  const progress = getTierProgress(siteConfig, mockUser.xp)

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
          Welcome back, {mockUser.name} {badge.emoji}
        </h1>
        <p className="text-slate-400 mt-1">
          Keep going &mdash; you&apos;re evolving nicely.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Total XP",
            value: mockUser.xp.toLocaleString(),
            icon: Zap,
            color: "text-cyan-400",
            bgColor: "bg-cyan-500/10",
          },
          {
            label: "Lessons Done",
            value: mockUser.lessonsCompleted,
            icon: BookOpen,
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
          },
          {
            label: "Day Streak",
            value: mockUser.streakDays,
            icon: TrendingUp,
            color: "text-indigo-400",
            bgColor: "bg-indigo-500/10",
          },
          {
            label: "Hours Learned",
            value: mockUser.totalHours,
            icon: Clock,
            color: "text-violet-400",
            bgColor: "bg-violet-500/10",
          },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <div className="relative z-10">
              <div
                className={cn(
                  "h-10 w-10 rounded-xl flex items-center justify-center mb-3",
                  stat.bgColor
                )}
              >
                <stat.icon className={cn("h-5 w-5", stat.color)} />
              </div>
              <p className="text-2xl font-extrabold text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tier Progress */}
      <div className="glass-card p-6">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{badge.emoji}</span>
              <div>
                <h3 className="font-bold text-white">{badge.name}</h3>
                <p className="text-xs text-slate-500">
                  {badge.isMaxTier
                    ? "Maximum tier reached!"
                    : `${progress}% to ${
                        siteConfig.badges.tierNames[badge.tier + 1]
                      }`}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-cyan-400">
                {mockUser.xp} XP
              </p>
              <p className="text-xs text-slate-500">
                {badge.isMaxTier
                  ? "Max tier"
                  : `${siteConfig.badges.xpPerTier[badge.tier + 1]} XP needed`}
              </p>
            </div>
          </div>
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            {siteConfig.badges.tierEmojis.map((emoji, i) => (
              <span
                key={i}
                className={cn(
                  "text-lg transition-opacity",
                  i <= badge.tier ? "opacity-100" : "opacity-30"
                )}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Lessons */}
        <div className="glass-card p-6">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white font-display">
                Recent Lessons
              </h3>
              <a
                href="/dashboard/lessons"
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                View All <ChevronRight className="h-3 w-3" />
              </a>
            </div>
            <div className="space-y-3">
              {recentLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <span className="text-2xl">{lesson.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {lesson.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            lesson.progress === 100
                              ? "bg-emerald-500"
                              : "bg-cyan-500"
                          )}
                          style={{ width: `${lesson.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-500">
                        {lesson.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges Earned */}
        <div className="glass-card p-6">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white font-display">
                Badges Earned
              </h3>
              <a
                href="/dashboard/badges"
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                View All <ChevronRight className="h-3 w-3" />
              </a>
            </div>
            <div className="space-y-3">
              {earnedBadges.map((b) => (
                <div
                  key={b.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5"
                >
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <span className="text-xl">{b.emoji}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{b.name}</p>
                    <p className="text-xs text-slate-500">{b.description}</p>
                  </div>
                  <Award className="h-4 w-4 text-cyan-500/50 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
