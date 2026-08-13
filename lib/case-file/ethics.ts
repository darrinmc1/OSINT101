import { CASE_FILE_DISCLAIMER } from "@/data/case-file"
import type { CaseFileRefusal } from "./types"

const MIN_QUERY_LENGTH = 8
const MAX_QUERY_LENGTH = 2000

const HARD_REFUSE: Array<{ pattern: RegExp; message: string }> = [
  {
    pattern: /\b(csam|child\s*(porn|pornography|sexual|exploit)|underage\s+sex)/i,
    message: "This tool cannot be used for sexual or exploitative content involving minors.",
  },
  {
    pattern:
      /\b((how\s+to|help\s+me|please)\s+)?(hack(\s+into)?|pwn|break\s+into|brute[\s-]?force|sql\s*inject|ddos)\b.{0,40}\b(gmail|account|server|wifi|network|password|inbox)\b/i,
    message:
      "The planner will not help with unauthorized access, malware, phishing, or attack procedures. Use the training modules for lawful, educational recon only.",
  },
  {
    pattern: /\bhow\s+to\s+(hack|pwn|break\s+into|brute[\s-]?force|phish)\b/i,
    message:
      "The planner will not help with unauthorized access, malware, phishing, or attack procedures. Use the training modules for lawful, educational recon only.",
  },
  {
    pattern: /\b(write|build|deploy|spread)\s+(a\s+)?(ransomware|phishing\s+kit|malware)\b/i,
    message: "The planner will not help with malware or phishing kits.",
  },
  {
    pattern: /\b(phish|spearphish)\s+(them|him|her|this|that|the)\b/i,
    message: "The planner will not help with phishing or unauthorized access.",
  },
  {
    pattern: /\b(credit\s*card|cvv|fullz|carding)\b/i,
    message: "Requests involving stolen payment data are refused.",
  },
  {
    pattern: /\b(swat|bomb\s*threat|kill\s+(him|her|them))\b/i,
    message: "Violent or criminal tasking is refused.",
  },
]

const HARM_INTENT =
  /\b(doxx?|stalk|harass|revenge\s*porn|ruin\s+their|get\s+back\s+at|destroy\s+their\s+life)\b/i

export function normalizeQuery(raw: unknown): string {
  if (typeof raw !== "string") return ""
  return raw.replace(/\s+/g, " ").trim()
}

export function validateQuery(raw: unknown): CaseFileRefusal | { query: string } {
  const query = normalizeQuery(raw)
  if (query.length < MIN_QUERY_LENGTH) {
    return {
      refused: true,
      reason: "invalid",
      message: "Paste a collection target or investigation question (at least a short sentence).",
    }
  }
  if (query.length > MAX_QUERY_LENGTH) {
    return {
      refused: true,
      reason: "invalid",
      message: `Keep the question under ${MAX_QUERY_LENGTH} characters.`,
    }
  }

  for (const rule of HARD_REFUSE) {
    if (rule.pattern.test(query)) {
      return { refused: true, reason: "ethics", message: rule.message }
    }
  }

  if (HARM_INTENT.test(query) && !/\b(avoid|prevent|opsec|protect|against)\b/i.test(query)) {
    return {
      refused: true,
      reason: "ethics",
      message:
        "This looks like harm-focused tasking (doxxing, stalking, or harassment). The planner only supports lawful, educational collection design.",
    }
  }

  return { query }
}

export function disclaimer(): string {
  return CASE_FILE_DISCLAIMER
}
