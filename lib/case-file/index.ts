import { isAiConfigured, enrichPlanWithAi } from "./ai"
import { validateQuery } from "./ethics"
import { applyAccessGate, buildCatalogPlan } from "./planner"
import { isCaseFileRefusal, type CaseFileResult } from "./types"

export async function createCaseFile(rawQuery: unknown): Promise<CaseFileResult> {
  const checked = validateQuery(rawQuery)
  if ("refused" in checked) return checked

  const catalogPlan = buildCatalogPlan(checked.query)
  const enriched = await enrichPlanWithAi(catalogPlan)
  return applyAccessGate(enriched, true, isAiConfigured())
}

export { canAccessAdvanced } from "./access"
export { isCaseFileRefusal, isAiConfigured }
export type { CaseFileResult, CaseFilePlan, CaseFileRefusal } from "./types"
