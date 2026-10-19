import { SELF_URL } from "@/lib/network"
import { siteConfig } from "@/lib/site-config"
import { compactCatalogForPrompt } from "./catalog"
import type { CaseFilePlan, PlanStep } from "./types"

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
const DEFAULT_MODEL = "google/gemini-2.5-flash"
const REQUEST_TIMEOUT_MS = 30_000
const MAX_TOKENS = 4096

type ChatMessage = { role: "system" | "user"; content: string }

type ChatChoice = {
  message?: { content?: string }
}

type ChatResponse = {
  choices?: ChatChoice[]
}

function openRouterConfig(): { key: string; model: string } | null {
  const key = process.env.OPENROUTER_API_KEY?.trim()
  if (!key) return null
  return {
    key,
    model: process.env.OPENROUTER_MODEL?.trim() || DEFAULT_MODEL,
  }
}

export function isAiConfigured(): boolean {
  return openRouterConfig() !== null
}

function stripTrailingCommas(raw: string): string {
  return raw.replace(/,\s*([}\]])/g, "$1")
}

/** Close any brackets and strings left open by a reply that was cut off. */
function closeTruncatedJson(raw: string): string {
  const stack: string[] = []
  let inString = false
  let escaped = false
  for (const ch of raw) {
    if (inString) {
      if (escaped) escaped = false
      else if (ch === "\\") escaped = true
      else if (ch === '"') inString = false
      continue
    }
    if (ch === '"') inString = true
    else if (ch === "{") stack.push("}")
    else if (ch === "[") stack.push("]")
    else if ((ch === "}" || ch === "]") && stack.length) stack.pop()
  }
  let out = raw
  if (inString) out += '"'
  out = out.replace(/,\s*$/, "").replace(/:\s*$/, ": null")
  return out + stack.reverse().join("")
}

function tryParse(raw: string): Record<string, unknown> | null {
  try {
    const value = JSON.parse(raw)
    return value && typeof value === "object" && !Array.isArray(value)
      ? (value as Record<string, unknown>)
      : null
  } catch {
    return null
  }
}

/**
 * Pull a JSON object out of a model reply: strip code fences, take the
 * outermost {...}, then try a strict parse, a parse without trailing commas,
 * and finally a parse that closes a reply cut off mid-object.
 */
export function extractJsonObject(text: string): Record<string, unknown> | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)(?:```|$)/i)
  const raw = (fenced?.[1] ?? text).trim()
  const start = raw.indexOf("{")
  if (start < 0) return null
  const end = raw.lastIndexOf("}")
  const outer = end > start ? raw.slice(start, end + 1) : raw.slice(start)
  const candidates = [outer, stripTrailingCommas(outer), stripTrailingCommas(closeTruncatedJson(raw.slice(start)))]
  for (const candidate of candidates) {
    const parsed = tryParse(candidate)
    if (parsed) return parsed
  }
  return null
}

async function complete(messages: ChatMessage[]): Promise<string | null> {
  const config = openRouterConfig()
  if (!config) return null
  try {
    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.key}`,
        "Content-Type": "application/json",
        "HTTP-Referer": SELF_URL,
        "X-Title": siteConfig.name,
      },
      body: JSON.stringify({
        model: config.model,
        temperature: 0.3,
        max_tokens: MAX_TOKENS,
        reasoning: { effort: "none" },
        messages,
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!response.ok) {
      console.warn("[case-file] AI HTTP", response.status)
      return null
    }
    const data = (await response.json()) as ChatResponse
    return data.choices?.[0]?.message?.content ?? null
  } catch (error) {
    console.warn("[case-file] AI unavailable", error)
    return null
  }
}

function asString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null
}

function asStringArray(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null
  const items = value.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
  return items.length ? items : null
}

function mergeSteps(base: PlanStep[], updates: unknown): PlanStep[] {
  if (!Array.isArray(updates)) return base
  return base.map((step) => {
    const match = updates.find(
      (item) =>
        item &&
        typeof item === "object" &&
        "id" in item &&
        (item as { id?: unknown }).id === step.id
    ) as { title?: unknown; detail?: unknown; why?: unknown } | undefined
    if (!match) return step
    return {
      ...step,
      title: asString(match.title) ?? step.title,
      detail: asString(match.detail) ?? step.detail,
      why: asString(match.why) ?? step.why,
    }
  })
}

export async function enrichPlanWithAi(
  plan: Omit<CaseFilePlan, "advancedUnlocked" | "aiAvailable">
): Promise<Omit<CaseFilePlan, "advancedUnlocked" | "aiAvailable">> {
  if (!isAiConfigured()) return plan

  const stepDigest = [...plan.foundations, ...plan.advanced].map((step) => ({
    id: step.id,
    title: step.title,
    detail: step.detail,
    why: step.why,
    citations: step.citations.map((c) => `${c.moduleId} / ${c.sectionTitle}`),
  }))

  const content = await complete([
    {
      role: "system",
      content: `You refine OSINT 101 case-file investigation PLANS. You do not run investigations, invent modules, or provide exploits, payloads, unauthorized access steps, or malware.

Rules:
- Educational and lawful use only.
- Keep every step tied to the provided step ids and citations.
- Do not add new module ids. You may rewrite objective, assumptions, and step title/detail/why.
- Stay practical and specific to the user's question.
- Return JSON only.

Catalog (for context, do not invent from it):
${compactCatalogForPrompt()}`,
    },
    {
      role: "user",
      content: JSON.stringify({
        query: plan.query,
        currentObjective: plan.objective,
        steps: stepDigest,
        want: {
          objective: "string",
          assumptions: ["string"],
          intelligenceCycle: plan.intelligenceCycle,
          steps: [{ id: "existing-id", title: "string", detail: "string", why: "string" }],
        },
      }),
    },
  ])

  if (!content) return plan
  const parsed = extractJsonObject(content)
  if (!parsed) {
    console.warn("[case-file] AI reply was not parseable JSON", content.length)
    return plan
  }

  const cycle = parsed.intelligenceCycle as Record<string, unknown> | undefined

  return {
    ...plan,
    engine: "ai",
    objective: asString(parsed.objective) ?? plan.objective,
    assumptions: asStringArray(parsed.assumptions) ?? plan.assumptions,
    intelligenceCycle: {
      direction: asString(cycle?.direction) ?? plan.intelligenceCycle.direction,
      collection: asString(cycle?.collection) ?? plan.intelligenceCycle.collection,
      processing: asString(cycle?.processing) ?? plan.intelligenceCycle.processing,
      analysis: asString(cycle?.analysis) ?? plan.intelligenceCycle.analysis,
      dissemination: asString(cycle?.dissemination) ?? plan.intelligenceCycle.dissemination,
    },
    foundations: mergeSteps(plan.foundations, parsed.steps),
    advanced: mergeSteps(plan.advanced, parsed.steps),
  }
}
