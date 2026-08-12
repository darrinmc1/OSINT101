// Empire HQ network — canonical URL list.
// Single source of truth for cross-site links. Every URL verified live 2026-08-12.
// NEVER link a bare .com that Empire HQ does not own (devops101.com, moneymastery.com,
// freelancepro.com, aiforsmb.com, aitraining.com, intelacademy.com, pilatesflow.com,
// landscapedesign.com are all owned by third parties; abcsofcyber.com and
// renovation101.com do not exist).

export type Cluster = "security" | "career" | "money" | "trades-au" | "lifestyle" | "tools"

export type NetworkSite = {
  name: string
  url: string
  blurb: string
  cluster: Cluster
}

export const HUB = "https://hq.peelboss.com"

export const NETWORK: NetworkSite[] = [
  // security & intel
  { name: "OSINT 101", url: "https://www.osint101.com", blurb: "Open-source intelligence training", cluster: "security" },
  { name: "ABC of Cyber", url: "https://abcofcyber.com", blurb: "Cyber security without the scare tactics", cluster: "security" },
  { name: "Intel Analyst Academy", url: "https://theintelanalystacademy.com", blurb: "Intelligence analysis training", cluster: "security" },
  { name: "CertSprint", url: "https://certsprint.vercel.app", blurb: "IT certification exam prep", cluster: "security" },
  { name: "DevOps 101", url: "https://devops101-six.vercel.app", blurb: "CI/CD and cloud infrastructure", cluster: "security" },

  // career & management
  { name: "Peel Boss", url: "https://www.peelboss.com", blurb: "Management training that doesn't suck", cluster: "career" },
  { name: "pm101toPro", url: "https://www.pm101topro.com", blurb: "Project management training", cluster: "career" },
  { name: "Freelance Pro", url: "https://freelancepro-teal.vercel.app", blurb: "Run your freelance business properly", cluster: "career" },
  { name: "Master The Revolution", url: "https://www.mastertherevolution.com", blurb: "Beginner to advanced AI training", cluster: "career" },
  { name: "AI for SMB", url: "https://aiforsmb.vercel.app", blurb: "Practical AI for small business", cluster: "career" },

  // money & exit
  { name: "Money Mastery", url: "https://moneymastery.vercel.app", blurb: "Personal finance and tax strategy", cluster: "money" },
  { name: "ExitCalc", url: "https://exitcalc-rose.vercel.app", blurb: "AU super and FIRE calculators", cluster: "money" },
  { name: "Your Exit Plans", url: "https://yourexitplans.com", blurb: "Validated ways out of the 9-5", cluster: "money" },
  { name: "wimsw", url: "https://wimsw.com", blurb: "What is my stuff worth - reseller pricing", cluster: "money" },

  // Australian trades & property
  { name: "TradieDocs", url: "https://tradiedocs-opal.vercel.app", blurb: "SWMS and compliance paperwork", cluster: "trades-au" },
  { name: "Renos101", url: "https://renos101.com", blurb: "Home renovation guides and tools", cluster: "trades-au" },
  { name: "Landscape Design", url: "https://landscapedesign-orcin.vercel.app", blurb: "Landscaping and horticulture design", cluster: "trades-au" },
  { name: "Monty's MMM", url: "https://montysmmm.vercel.app", blurb: "Real estate agent training (AU)", cluster: "trades-au" },
  { name: "Allisons Accounting", url: "https://allisons-one.vercel.app", blurb: "Toolkit for Australian accountants", cluster: "trades-au" },

  // lifestyle
  { name: "PetPro Academy", url: "https://petproacademy.vercel.app", blurb: "Dog training and pet business", cluster: "lifestyle" },
  { name: "Pilates Flow", url: "https://pilatesflow-psi.vercel.app", blurb: "Workout builder for Pilates teachers", cluster: "lifestyle" },
  { name: "ticu.tv", url: "https://ticu.tv", blurb: "Interactive stories you vote on", cluster: "lifestyle" },

  // tools
  { name: "FlowVault", url: "https://flowvault-brown.vercel.app", blurb: "Done-for-you n8n automations", cluster: "tools" },
]

// This site's canonical origin. Must match one entry in NETWORK.
export const SELF_URL = "https://www.osint101.com"

/** Topically related sites first, capped so the footer stays a real
 *  recommendation rather than a 23-link footprint on every page. */
export function clusterFor(currentUrl: string = SELF_URL, max = 5): NetworkSite[] {
  const self = NETWORK.find((s) => s.url === currentUrl)
  const others = NETWORK.filter((s) => s.url !== currentUrl)
  if (!self) return others.slice(0, max)
  const same = others.filter((s) => s.cluster === self.cluster)
  const rest = others.filter((s) => s.cluster !== self.cluster)
  return [...same, ...rest].slice(0, max)
}
