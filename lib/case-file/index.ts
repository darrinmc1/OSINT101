import { canAccessAdvanced } from "./access"
import { isAiConfigured, enrichPlanWithAi } from "./ai"
import { validateQuery } from "./ethics"
import { applyAccessGate, buildCatalogPlan } from "./planner"
import { isCaseFileRefusal, type CaseFileResult } from "./types"

export async function createCaseFile(rawQuery: unknown): Promise<CaseFileResult> {
  const checked = validateQuery(rawQuery)
  if ("refused" in checked) return checked

  const advancedUnlocked = await canAccessAdvanced()
  const catalogPlan = buildCatalogPlan(checked.query)
  const enriched = await enrichPlanWithAi(catalogPlan)
  return applyAccessGate(enriched, advancedUnlocked, isAiConfigured())
}

export { isCaseFileRefusal, isAiConfigured, canAccessAdvanced }
export type { CaseFileResult, CaseFilePlan, CaseFileRefusal } from "./types"
