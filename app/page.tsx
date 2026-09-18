import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Award, Zap, Star, Lock, ChevronRight, Trophy, Target, Flame } from "lucide-react"
import { EmailCapture } from "@/components/email-capture"

const badgeProgression = [
  {
    id: 1,
    name: "Novice",
    icon: Shield,
    color: "from-slate-400 to-slate-500",
    borderColor: "border-slate-400",
    textColor: "text-slate-400",
    xp: 0,
    unlocked: true,
    skills: ["Basic Prompting", "AI Awareness"]
  },
  {
    id: 2,
    name: "Practitioner",
    icon: BookOpen,
    color: "from-emerald-400 to-emerald-600",
    borderColor: "border-emerald-400",
    textColor: "text-emerald-400",
    xp: 500,
    unlocked: true,
    skills: ["Chain-of-Thought", "Few-Shot Learning"]
  },
  {
    id: 3,
    name: "Engineer",
    icon: Zap,
    color: "from-blue-400 to-blue-600",
    borderColor: "border-blue-400",
    textColor: "text-blue-400",
    xp: 1500,
    unlocked: false,
    skills: ["RAG Systems", "Fine-tuning"]
  },
  {
    id: 4,
    name: "Architect",
    icon: Star,
    color: "from-purple-400 to-purple-600",
    borderColor: "border-purple-400",
    textColor: "text-purple-400",
    xp: 3500,
    unlocked: false,
    skills: ["Multi-Agent", "LLMOps"]
  },
  {
    id: 5,
    name: "Master",
    icon: Trophy,
    color: "from-amber-400 to-orange-500",
    borderColor: "border-amber-400",
    textColor: "text-amber-400",
    xp: 7500,
    unlocked: false,
    skills: ["Research", "Innovation"]
  }
]

const featuredBadges = [
  { name: "First Prompt", icon: "🎯", rarity: "Common", color: "bg-slate-700" },
  { name: "Speed Learner", icon: "⚡", rarity: "Rare", color: "bg-blue-900" },
  { name: "Streak Master", icon: "🔥", rarity: "Epic", color: "bg-purple-900" },
  { name: "AI Pioneer", icon: "🏆", rarity: "Legendary", color: "bg-amber-900" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">PromptCraft</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/lessons" className="text-slate-400 hover:text-white text-sm transition-colors">Lessons</Link>
            <Link href="/dashboard" className="text-slate-400 hover:text-white text-sm transition-colors">Dashboard</Link>
            <Link href="/login" className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm px-4 py-2 rounded-lg transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                <Flame className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-medium">Gamified AI Learning</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Master AI Prompting
                <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Level by Level
                </span>
              </h1>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Earn badges, climb skill trees, and track your progression from Novice to AI Master. 
                Structured lessons with real XP rewards keep you motivated every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lessons"
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl transition-colors"
                >
                  Browse Lessons
                </Link>
              </div>
              {/* Social proof */}
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span>2,400+ badges earned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>48 skill lessons</span>
                </div>
              </div>
            </div>

            {/* Right: Badge Progression Visual */}
            <div className="relative">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Your Skill Path</p>
                    <h3 className="font-semibold text-white">AI Prompting Mastery</h3>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5">
                    <span className="text-emerald-400 text-xs font-bold">750 XP</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span>Practitioner → Engineer</span>
                    <span>750 / 1,500 XP</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full transition-all"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>

                {/* Badge Progression Tree */}
                <div className="flex items-center justify-between mb-6">
                  {badgeProgression.map((badge, index) => {
                    const Icon = badge.icon
                    return (
                      <div key={badge.id} className="flex items-center">
                        <div className="flex flex-col items-center gap-1.5">
                          <div
                            className={`relative w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all ${
                              badge.unlocked
                                ? `${badge.borderColor} bg-gradient-to-br ${badge.color} shadow-lg`
                                : "border-slate-700 bg-slate-800"
                            }`}
                          >
                            {badge.unlocked ? (
                              <Icon className="w-5 h-5 text-white" />
                            ) : (
                              <Lock className="w-4 h-4 text-slate-600" />
                            )}
                            {badge.id === 2 && (
                              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
                            )}
                          </div>
                          <span className={`text-xs font-medium ${
                            badge.unlocked ? badge.textColor : "text-slate-600"
                          }`}>
                            {badge.name}
                          </span>
                        </div>
                        {index < badgeProgression.length - 1 && (
                          <div className={`w-6 h-0.5 mx-1 mb-5 ${
                            badgeProgression[index + 1].unlocked ? "bg-emerald-500" : "bg-slate-700"
                          }`} />
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* Featured Badges */}
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Achievement Badges</p>
                  <div className="grid grid-cols-4 gap-2">
                    {featuredBadges.map((badge) => (
                      <div
                        key={badge.name}
                        className={`${badge.color} border border-slate-700 rounded-xl p-2.5 flex flex-col items-center gap-1.5 hover:scale-105 transition-transform cursor-default`}
                      >
                        <span className="text-xl">{badge.icon}</span>
                        <span className="text-xs text-slate-300 text-center leading-tight font-medium">{badge.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                          badge.rarity === "Legendary" ? "bg-amber-500/20 text-amber-400" :
                          badge.rarity === "Epic" ? "bg-purple-500/20 text-purple-400" :
                          badge.rarity === "Rare" ? "bg-blue-500/20 text-blue-400" :
                          "bg-slate-600/50 text-slate-400"
                        }`}>
                          {badge.rarity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current streak */}
                <div className="mt-4 flex items-center gap-3 bg-slate-800/50 rounded-xl p-3">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Flame className="w-4 h-4 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-400">Current Streak</p>
                    <p className="text-sm font-semibold text-white">7 days 🔥</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">Next reward</p>
                    <p className="text-xs text-emerald-400 font-medium">+50 XP</p>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-blue-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to earn your first badge?</h2>
          <p className="text-slate-400 mb-8">Join thousands of learners leveling up their AI skills daily.</p>
          <EmailCapture />
        </div>
      </section>
    </div>
  )
}
