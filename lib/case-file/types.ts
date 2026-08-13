export type ModuleLevel = "Beginner" | "Intermediate" | "Advanced"
export type PlanTier = "foundations" | "advanced"
export type PlanEngine = "ai" | "catalog"
export type CyclePhase =
  | "direction"
  | "collection"
  | "processing"
  | "analysis"
  | "dissemination"
  | "opsec"

export interface CatalogSection {
  title: string
  duration: string
  synopsis: string
}

export interface CatalogModule {
  id: string
  title: string
  description: string
  level: ModuleLevel
  estimatedTime: string
  href: string
  sections: CatalogSection[]
}

export interface Citation {
  moduleId: string
  moduleTitle: string
  level: ModuleLevel
  sectionTitle: string
  href: string
}

export interface PlanStep {
  id: string
  phase: CyclePhase
  title: string
  detail: string
  why: string
  citations: Citation[]
  tier: PlanTier
}

export interface ModuleTeaser {
  moduleId: string
  moduleTitle: string
  level: ModuleLevel
  href: string
  reason: string
}

export interface CaseFilePlan {
  classification: "EDUCATIONAL"
  generatedAt: string
  engine: PlanEngine
  aiAvailable: boolean
  query: string
  objective: string
  assumptions: string[]
  outOfScope: string[]
  opsec: string[]
  legal: string[]
  intelligenceCycle: {
    direction: string
    collection: string
    processing: string
    analysis: string
    dissemination: string
  }
  foundations: PlanStep[]
  advanced: PlanStep[]
  advancedTeasers: ModuleTeaser[]
  advancedUnlocked: boolean
  citations: Citation[]
  stopConditions: string[]
  studyNext: ModuleTeaser[]
  disclaimer: string
}

export interface CaseFileRefusal {
  refused: true
  reason: "ethics" | "invalid"
  message: string
}

export type CaseFileResult = CaseFilePlan | CaseFileRefusal

export function isCaseFileRefusal(value: CaseFileResult): value is CaseFileRefusal {
  return "refused" in value && value.refused === true
}
