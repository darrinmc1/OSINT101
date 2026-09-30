"use client"

import { siteConfig, getBadgeDisplay, getTierProgress } from "@/lib/site-config"
import { learningModules } from "@/data/modules"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  BookOpen,
  TrendingUp,
  Award,
  Zap,
  Clock,
  ChevronRight,
  Star,
  Lock,
} from "lucide-react"

// Mock data - will be replaced with real user state from zustand/API
const mockUser = {
  name: "Analyst",
  xp: 150,
  lessonsCompleted: 3,
  streakDays: 5,
  totalHours: 8.5,
  plan: "free" as "free" | "premium",
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
  const progressPercent = getTierProgress(siteConfig, mockUser.xp)
  const nextRankXp = badge.isMaxTier
    ? siteConfig.badges.xpPerTier[4]
    : siteConfig.badges.xpPerTier[badge.tier + 1]

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

      {/* Free Plan Upsell Banner */}
      {mockUser.plan === "free" && (
        <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-bold text-white mb-0.5">You&apos;re on the Free Plan</p>
            <p className="text-xs text-slate-300">
              <span className="text-emerald-400 font-semibold">Free:</span> 3 modules, basic badges &nbsp;·&nbsp;
              <span className="text-violet-300 font-semibold">Premium:</span> All modules, advanced certifications, priority support
            </p>
          </div>
          <Link
            href="/pricing"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
          >
            <Star className="h-4 w-4" />
            Upgrade to Premium
          </Link>
        </div>
      )}

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
        ].map(({ label, value, icon: Icon, color, bgColor }) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
          >
            <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center mb-3", bgColor)}>
              <Icon className={cn("h-5 w-5", color)} />
            </div>
            <p className="text-2xl font-extrabold text-white">{value}</p>
            <p className="text-xs text-slate-400 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Recent Lessons */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Recent Modules</h2>
          <Link
            href="/modules"
            className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors"
          >
            View all <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {recentLessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/modules/${lesson.id}`}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-indigo-500/40 hover:bg-white/[0.07] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{lesson.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white truncate group-hover:text-indigo-300 transition-colors">
                    {lesson.title}
                  </p>
                  <p className="text-xs text-slate-500 capitalize">{lesson.category}</p>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Progress</span>
                  <span>{lesson.progress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    style={{ width: `${lesson.progress}%` }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Earned Badges</h2>
          <span className="text-xs text-slate-500">
            {mockUser.plan === "free" ? (
              <Link href="/pricing" className="text-violet-400 hover:text-violet-300 font-semibold transition-colors flex items-center gap-1">
                <Lock className="h-3 w-3" /> Unlock advanced badges with Premium
              </Link>
            ) : (
              <span className="text-emerald-400 font-semibold">All badges unlocked</span>
            )}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {earnedBadges.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-center gap-4"
            >
              <span className="text-3xl">{b.emoji}</span>
              <div>
                <p className="text-sm font-bold text-white">{b.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{b.description}</p>
              </div>
            </div>
          ))}
          {mockUser.plan === "free" && (
            <Link
              href="/pricing"
              className="rounded-2xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-xl p-5 flex items-center gap-4 hover:border-violet-500/50 hover:bg-violet-500/20 transition-all group"
            >
              <span className="text-3xl">🏆</span>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">Advanced Badges</p>
                <p className="text-xs text-violet-400 mt-0.5">Upgrade to unlock</p>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* XP Progress */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white">Rank Progress</h2>
          </div>
          <span className="text-sm font-bold text-amber-400">{badge.name}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-slate-400">
            <span>{mockUser.xp} XP</span>
            <span>{nextRankXp} XP to next rank</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-700"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
