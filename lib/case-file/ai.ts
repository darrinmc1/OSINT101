import { compactCatalogForPrompt } from "./catalog"
import type { CaseFilePlan, PlanStep } from "./types"

type ChatMessage = { role: "system" | "user"; content: string }

type ChatChoice = {
  message?: { content?: string }
}

type ChatResponse = {
  choices?: ChatChoice[]
}

function aiConfig(): { url: string; key: string; model: string } | null {
  const gateway = process.env.AI_GATEWAY_API_KEY
  if (gateway) {
    return {
      url: process.env.AI_GATEWAY_BASE_URL || "https://ai-gateway.vercel.sh/v1/chat/completions",
      key: gateway,
      model: process.env.AI_MODEL || "openai/gpt-4o-mini",
    }
  }
  const openai = process.env.OPENAI_API_KEY
  if (openai) {
    return {
      url: "https://api.openai.com/v1/chat/completions",
      key: openai,
      model: process.env.AI_MODEL || "gpt-4o-mini",
    }
  }
  return null
}

export function isAiConfigured(): boolean {
  return aiConfig() !== null
}

function extractJsonObject(text: string): Record<string, unknown> | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i)
  const raw = (fenced?.[1] ?? text).trim()
  const start = raw.indexOf("{")
  const end = raw.lastIndexOf("}")
  if (start < 0 || end <= start) return null
  try {
    return JSON.parse(raw.slice(start, end + 1)) as Record<string, unknown>
  } catch {
    return null
  }
}

async function complete(messages: ChatMessage[]): Promise<string | null> {
  const config = aiConfig()
  if (!config) return null
  try {
    const response = await fetch(config.url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: config.model,
        temperature: 0.3,
        messages,
      }),
      signal: AbortSignal.timeout(12_000),
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
  if (!parsed) return plan

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
