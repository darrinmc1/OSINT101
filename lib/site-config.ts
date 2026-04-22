// Site Configuration for OSINT 101
// This is the ONLY file you need to change to create a new themed training site.
// All components read from this config for theming, copy, and structure.

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  domain: string
  theme: {
    id: string
    emoji: string
    primaryColor: string
    accentColor: string
    gradientFrom: string
    gradientTo: string
    darkMode: boolean
    bgClass: string
    textClass: string
    cardBg: string
    cardBorder: string
  }
  badges: {
    tierNames: [string, string, string, string, string]
    tierEmojis: [string, string, string, string, string]
    xpPerTier: [number, number, number, number, number]
    lessonsPerTier: [number, number, number, number, number]
  }
  categories: Array<{ id: string; name: string; emoji: string; description: string; color: string }>
  nav: {
    marketing: Array<{ label: string; href: string }>
    dashboard: Array<{ label: string; href: string; icon: string }>
  }
  copy: {
    heroTitle: string
    heroSubtitle: string
    ctaButton: string
    ctaSecondary: string
    emailCaptureHeading: string
    emailCaptureSubheading: string
  }
  pricing: {
    founder: { monthly: number; yearly: number }
    standard: { monthly: number; yearly: number }
    premium: { monthly: number; yearly: number }
  }
  contact: { email: string; github: string }
}

export const siteConfig: SiteConfig = {
  name: "OSINT 101",
  tagline: "Open-Source Intelligence, Explained",
  description: "OSINT 101 - Open-Source Intelligence, Explained. Free training with gamified badges and progression.",
  domain: "osint101.com",

  theme: {
    id: "detective",
    emoji: "🕵️",
    primaryColor: "indigo",
    accentColor: "violet",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-violet-600",
    darkMode: true,
    bgClass: "bg-slate-950",
    textClass: "text-slate-50",
    cardBg: "bg-white/5 backdrop-blur-xl",
    cardBorder: "border-white/10",
  },

  badges: {
    tierNames: ["Rookie", "Sleuth", "Investigator", "Analyst", "Spymaster"],
    tierEmojis: ["🎓", "🔍", "🕵️", "🗂️", "👑"],
    xpPerTier: [100, 300, 600, 1200, 2500],
    lessonsPerTier: [1, 2, 3, 4, 5],
  },

  categories: [
    { id: "beginner", name: "Beginner", emoji: "🌱", description: "Start here", color: "indigo" },
    { id: "intermediate", name: "Intermediate", emoji: "⚙️", description: "Level up", color: "violet" },
    { id: "advanced", name: "Advanced", emoji: "🧠", description: "Master class", color: "purple" },
  ],

  nav: {
    marketing: [
      { label: "Lessons", href: "/lessons" },
      { label: "About", href: "/about" },
    ],
    dashboard: [
      { label: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
      { label: "Lessons", href: "/lessons", icon: "BookOpen" },
      { label: "Badges", href: "/badges", icon: "Award" },
      { label: "Progress", href: "/progress", icon: "TrendingUp" },
    ],
  },

  copy: {
    heroTitle: "Open-Source Intelligence, Explained",
    heroSubtitle: "Free training with a twist. Earn badges, track progress, and actually enjoy learning.",
    ctaButton: "Start Learning",
    ctaSecondary: "Browse Lessons",
    emailCaptureHeading: "Stay Updated",
    emailCaptureSubheading: "Get notified when new lessons drop. Founding members get exclusive perks.",
  },

  pricing: {
    founder: { monthly: 5, yearly: 48 },
    standard: { monthly: 9, yearly: 90 },
    premium: { monthly: 19, yearly: 180 },
  },

  contact: {
    email: "darrinmc1@yahoo.com",
    github: "darrinmc1",
  },
} as const;

// =============================================================================
// Helpers (referenced by dashboard pages copied from AI Hub template).
// =============================================================================

export function getBadgeDisplay(config: SiteConfig, xp: number) {
  const { tierNames, tierEmojis, xpPerTier } = config.badges
  let tier: 0 | 1 | 2 | 3 | 4 = 0
  for (let i = 4; i >= 0; i--) {
    if (xp >= xpPerTier[i]) { tier = i as 0 | 1 | 2 | 3 | 4; break }
  }
  return {
    name: tierNames[tier],
    emoji: tierEmojis[tier],
    tier,
    isMaxTier: tier === 4,
  }
}

export function getTierProgress(config: SiteConfig, xp: number): number {
  const { xpPerTier } = config.badges
  const { tier, isMaxTier } = getBadgeDisplay(config, xp)
  if (isMaxTier) return 100
  const floor = xpPerTier[tier]
  const ceiling = xpPerTier[tier + 1]
  const span = ceiling - floor
  const offset = Math.max(0, xp - floor)
  return Math.min(100, Math.round((offset / span) * 100))
}
