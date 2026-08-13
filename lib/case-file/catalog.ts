import { learningModules, type LearningModule } from "@/data/modules"
import type { CatalogModule, CatalogSection, Citation, ModuleLevel } from "./types"

function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#>*_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function toCatalog(mod: LearningModule): CatalogModule {
  const sections: CatalogSection[] = mod.sections.map((section) => ({
    title: section.title,
    duration: section.duration,
    synopsis: stripMarkdown(section.content).slice(0, 320),
  }))

  return {
    id: mod.id,
    title: mod.title,
    description: mod.description,
    level: mod.level,
    estimatedTime: mod.estimatedTime,
    href: `/modules/${mod.id}`,
    sections,
  }
}

let cached: CatalogModule[] | null = null

export function getModuleCatalog(): CatalogModule[] {
  if (cached) return cached
  cached = Object.values(learningModules).map(toCatalog)
  return cached
}

export function getCatalogModule(id: string): CatalogModule | null {
  return getModuleCatalog().find((mod) => mod.id === id) ?? null
}

export function isFoundationModule(mod: { level: ModuleLevel }): boolean {
  return mod.level === "Beginner"
}

export function cite(
  moduleId: string,
  sectionTitle?: string
): Citation | null {
  const mod = getCatalogModule(moduleId)
  if (!mod) return null
  const section =
    (sectionTitle && mod.sections.find((item) => item.title === sectionTitle)) ||
    mod.sections[0]
  if (!section) return null
  return {
    moduleId: mod.id,
    moduleTitle: mod.title,
    level: mod.level as ModuleLevel,
    sectionTitle: section.title,
    href: mod.href,
  }
}

export function compactCatalogForPrompt(): string {
  return getModuleCatalog()
    .map((mod) => {
      const sections = mod.sections.map((section) => section.title).join("; ")
      return `- ${mod.id} [${mod.level}] ${mod.title}: ${mod.description} Sections: ${sections}`
    })
    .join("\n")
}
