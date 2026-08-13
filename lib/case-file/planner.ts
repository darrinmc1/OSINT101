import { cite, getModuleCatalog, isFoundationModule } from "./catalog"
import { disclaimer } from "./ethics"
import type {
  CaseFilePlan,
  CatalogModule,
  Citation,
  CyclePhase,
  ModuleTeaser,
  PlanEngine,
  PlanStep,
} from "./types"

interface TopicRule {
  keys: string[]
  moduleIds: string[]
}

const TOPIC_RULES: TopicRule[] = [
  {
    keys: ["email", "username", "handle", "account", "gmail", "outlook"],
    moduleIds: ["email-osint", "digital-identity-analysis", "breach-data-analysis"],
  },
  {
    keys: ["person", "people", "individual", "subject", "who is", "profile", "identity"],
    moduleIds: ["people-profiling", "digital-identity-analysis", "email-osint"],
  },
  {
    keys: ["company", "business", "vendor", "corporate", "organisation", "organization", "due diligence"],
    moduleIds: ["business-osint", "domain-investigations", "osint-reporting"],
  },
  {
    keys: ["domain", "website", "whois", "dns", "subdomain", "certificate", "hosting"],
    moduleIds: ["domain-investigations", "network-recon", "business-osint"],
  },
  {
    keys: ["social", "twitter", "facebook", "instagram", "linkedin", "tiktok", "socmint"],
    moduleIds: ["social-media-investigations", "social-media", "digital-identity-analysis"],
  },
  {
    keys: ["telegram", "channel", "group chat"],
    moduleIds: ["telegram-osint", "social-media-investigations"],
  },
  {
    keys: ["location", "geolocat", "photo", "image", "satellite", "map", "where was"],
    moduleIds: ["geospatial-intelligence", "geolocation-osint", "social-media-investigations"],
  },
  {
    keys: ["crypto", "bitcoin", "wallet", "blockchain", "ethereum"],
    moduleIds: ["cryptocurrency-investigations"],
  },
  {
    keys: ["dark web", "tor", "onion", "hidden service"],
    moduleIds: ["dark-web-research"],
  },
  {
    keys: ["network", "nmap", "kali", "recon", "passive recon", "infrastructure"],
    moduleIds: ["network-recon", "kali-tools", "domain-investigations"],
  },
  {
    keys: ["forensic", "evidence", "disk", "artifact", "chain of custody"],
    moduleIds: ["digital-forensics", "osint-reporting"],
  },
  {
    keys: ["breach", "leak", "password", "have i been", "credential"],
    moduleIds: ["breach-data-analysis", "email-osint"],
  },
  {
    keys: ["report", "brief", "disseminat", "presentation", "confidence"],
    moduleIds: ["osint-reporting", "osint-fundamentals"],
  },
]

const ALWAYS_INCLUDE = new Set(["osint-fundamentals", "osint-methodology"])

function uniqueById<T extends { id: string }>(items: T[]): T[] {
  return items.filter((item, index, arr) => arr.findIndex((other) => other.id === item.id) === index)
}

function scoreModules(query: string): CatalogModule[] {
  const q = query.toLowerCase()
  const scores = new Map<string, number>()

  for (const id of ALWAYS_INCLUDE) scores.set(id, 8)

  for (const rule of TOPIC_RULES) {
    const hits = rule.keys.filter((key) => q.includes(key)).length
    if (!hits) continue
    for (const id of rule.moduleIds) {
      scores.set(id, (scores.get(id) ?? 0) + hits * 3)
    }
  }

  const catalog = getModuleCatalog()
  for (const mod of catalog) {
    const haystack = `${mod.title} ${mod.description} ${mod.sections.map((s) => s.title).join(" ")}`.toLowerCase()
    for (const word of q.split(/[^a-z0-9]+/).filter((w) => w.length > 4)) {
      if (haystack.includes(word)) scores.set(mod.id, (scores.get(mod.id) ?? 0) + 1)
    }
  }

  return catalog
    .map((mod) => ({ mod, score: scores.get(mod.id) ?? 0 }))
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((row) => row.mod)
}

function mustCite(moduleId: string, sectionTitle?: string): Citation {
  const citation = cite(moduleId, sectionTitle)
  if (!citation) {
    throw new Error(`Missing catalog citation: ${moduleId} / ${sectionTitle ?? "(first section)"}`)
  }
  return citation
}

function step(input: {
  id: string
  phase: CyclePhase
  title: string
  detail: string
  why: string
  moduleId: string
  sectionTitle?: string
  extraCitations?: Array<{ moduleId: string; sectionTitle?: string }>
}): PlanStep {
  const citations = [
    mustCite(input.moduleId, input.sectionTitle),
    ...(input.extraCitations ?? []).map((item) => mustCite(item.moduleId, item.sectionTitle)),
  ]
  const primary = citations[0]
  return {
    id: input.id,
    phase: input.phase,
    title: input.title,
    detail: input.detail,
    why: input.why,
    citations,
    tier: isFoundationModule(primary) ? "foundations" : "advanced",
  }
}

function teaser(mod: CatalogModule, reason: string): ModuleTeaser {
  return {
    moduleId: mod.id,
    moduleTitle: mod.title,
    level: mod.level,
    href: mod.href,
    reason,
  }
}

function collectionStepsFor(mod: CatalogModule, index: number): PlanStep[] {
  const first = mod.sections[0]
  const second = mod.sections[1]
  const steps: PlanStep[] = [
    step({
      id: `collect-${mod.id}-1`,
      phase: "collection",
      title: `${mod.title}: start with ${first.title}`,
      detail: `${first.synopsis} Work this as a collection lane, not a fishing trip. Capture URLs, dates, and why the source mattered.`,
      why: mod.description,
      moduleId: mod.id,
      sectionTitle: first.title,
    }),
  ]
  if (second) {
    steps.push(
      step({
        id: `collect-${mod.id}-2`,
        phase: index % 2 === 0 ? "processing" : "analysis",
        title: `${mod.title}: ${second.title}`,
        detail: `${second.synopsis} Keep facts, assumptions, and unanswered questions in separate notes.`,
        why: `This section is how ${mod.title} turns raw hits into something you can defend.`,
        moduleId: mod.id,
        sectionTitle: second.title,
      })
    )
  }
  return steps
}

function collectCitations(steps: PlanStep[]): Citation[] {
  const seen = new Set<string>()
  const out: Citation[] = []
  for (const item of steps) {
    for (const citation of item.citations) {
      const key = `${citation.moduleId}:${citation.sectionTitle}`
      if (seen.has(key)) continue
      seen.add(key)
      out.push(citation)
    }
  }
  return out
}

export function buildCatalogPlan(query: string, engine: PlanEngine = "catalog"): Omit<
  CaseFilePlan,
  "advancedUnlocked" | "aiAvailable"
> {
  const selected = scoreModules(query)
  const foundationMods = selected.filter((mod) => isFoundationModule(mod))
  const advancedMods = selected.filter((mod) => !isFoundationModule(mod))

  const core: PlanStep[] = [
    step({
      id: "direction-cycle",
      phase: "direction",
      title: "Write the question before you collect",
      detail: `Restate the job as one sentence a colleague could run without you. Original ask: “${query}”. Decide what would count as enough, and what is out of scope.`,
      why: "Direction is the first stage of the intelligence cycle. Without it, collection becomes tab hoarding.",
      moduleId: "osint-fundamentals",
      sectionTitle: "The Intelligence Cycle",
      extraCitations: [{ moduleId: "osint-methodology", sectionTitle: "Why Methodology Matters" }],
    }),
    step({
      id: "direction-plan",
      phase: "direction",
      title: "Draft a one-page investigation plan",
      detail:
        "Record objective, source list, tools, time budget, and a stop condition. Use the PEAK model (Prepare, Explore, Analyze, Know) if the traditional cycle feels too formal for a short task.",
      why: "A five-minute plan prevents a ninety-minute wander.",
      moduleId: "osint-methodology",
      sectionTitle: "Why Methodology Matters",
      extraCitations: [{ moduleId: "osint-methodology", sectionTitle: "The OSINT Pyramid" }],
    }),
    step({
      id: "opsec-env",
      phase: "opsec",
      title: "Separate research identity from personal identity",
      detail:
        "Use a dedicated browser profile or VM. Do not log into personal accounts. Treat search personalization, metadata, and repeated patterns as attribution risks. Build a short environment checklist before the first query.",
      why: "OPSEC is how you avoid announcing the investigation.",
      moduleId: "osint-fundamentals",
      sectionTitle: "OPSEC and Anonymity",
    }),
    step({
      id: "collection-sources",
      phase: "collection",
      title: "Evaluate every source before you promote it",
      detail:
        "Ask who created it, when it was updated, whether it is firsthand, and whether independent sources agree. Rank confidence as low / moderate / high. Easy to find is not the same as true.",
      why: "Source evaluation is the difference between intelligence and a rumor with a citation.",
      moduleId: "osint-fundamentals",
      sectionTitle: "Source Evaluation and Confidence",
    }),
    step({
      id: "processing-docs",
      phase: "processing",
      title: "Log evidence so it survives contact with later-you",
      detail:
        "Capture URLs, access dates, screenshots of volatile pages, and the queries you ran. Separate facts, assumptions, and gaps. Name files with date, case, source type, and description.",
      why: "If it is not documented, it is a memory with good branding.",
      moduleId: "osint-fundamentals",
      sectionTitle: "Documentation and Evidence Handling",
      extraCitations: [{ moduleId: "osint-methodology", sectionTitle: "Documentation Standards" }],
    }),
    step({
      id: "analysis-report",
      phase: "analysis",
      title: "Turn findings into a short, honest product",
      detail:
        "Write objective, key findings, source notes, confidence, gaps, and next steps. Do not dump raw notes. Do not present guesses as fact. Bottom line up front.",
      why: "Collection without analysis is a folder, not a case file.",
      moduleId: "osint-fundamentals",
      sectionTitle: "Analysis and Reporting Basics",
    }),
  ]

  const topicFoundation = foundationMods
    .filter((mod) => !ALWAYS_INCLUDE.has(mod.id))
    .slice(0, 3)
    .flatMap((mod, index) => collectionStepsFor(mod, index))

  const topicAdvanced = advancedMods.slice(0, 4).flatMap((mod, index) => collectionStepsFor(mod, index))

  const foundations = uniqueById([...core, ...topicFoundation]).filter((item) => item.tier === "foundations")
  const advancedSteps = uniqueById([...core, ...topicFoundation, ...topicAdvanced]).filter(
    (item) => item.tier === "advanced"
  )

  const allSteps = [...foundations, ...advancedSteps]
  const citations = collectCitations(allSteps)

  const studyNext: ModuleTeaser[] = selected.slice(0, 6).map((mod) =>
    teaser(mod, isFoundationModule(mod) ? "Foundation module for this plan" : "Advanced technique module")
  )

  const advancedTeasers = advancedMods.slice(0, 6).map((mod) =>
    teaser(mod, `Unlock ${mod.title} methods (${mod.level})`)
  )

  return {
    classification: "EDUCATIONAL",
    generatedAt: new Date().toISOString(),
    engine,
    query,
    objective: `Design a lawful, documented collection plan for: ${query}`,
    assumptions: [
      "The operator has a legitimate purpose and authorization.",
      "Work stays inside public sources unless a later, lawful process says otherwise.",
      "This is a training plan, not a completed investigation.",
    ],
    outOfScope: [
      "Unauthorized access, phishing, malware, or bypassing authentication.",
      "Harassment, doxxing, or collecting sensitive data without necessity.",
      "Presenting unverified claims as high-confidence findings.",
    ],
    opsec: [
      "Dedicated browser profile or VM; no personal logins.",
      "Minimize direct contact with target infrastructure until scope requires it.",
      "Assume queries, downloads, and sockpuppet accounts can be attributed later.",
    ],
    legal: [
      "Education and authorized research only.",
      "Publicly available is not the same as ethically or legally collectable.",
      "Pause and escalate if the work drifts into criminal, safety, or counsel territory.",
    ],
    intelligenceCycle: {
      direction: "One-sentence objective, success criteria, and stop condition.",
      collection: "Start passive and public. Use only the module lanes that match the question.",
      processing: "Clean notes, timestamps, archives, and consistent filenames.",
      analysis: "Corroborate, rank confidence, and separate observation from inference.",
      dissemination: "A short case file a decision-maker can read without a séance.",
    },
    foundations,
    advanced: advancedSteps,
    advancedTeasers,
    citations,
    stopConditions: [
      "The original question is answered with cited, corroborable sources.",
      "Time budget is spent and remaining work is written as gaps, not vibes.",
      "A legal, ethical, or OPSEC line is approaching — stop and reassess.",
    ],
    studyNext,
    disclaimer: disclaimer(),
  }
}

export function applyAccessGate(
  plan: Omit<CaseFilePlan, "advancedUnlocked" | "aiAvailable">,
  advancedUnlocked: boolean,
  aiAvailable: boolean
): CaseFilePlan {
  if (advancedUnlocked) {
    return { ...plan, advancedUnlocked: true, aiAvailable }
  }
  return {
    ...plan,
    advancedUnlocked: false,
    aiAvailable,
    advanced: [],
    citations: collectCitations(plan.foundations),
  }
}
