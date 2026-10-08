// Shared Empire signup sink.
// Every email signup is also sent to the HQ subscriber webhook
// (n8n.peelboss.com -> Supabase `subscribers` table, one row per site + email),
// so signups land in one place even when this site's own Supabase, Mailchimp
// or Resend settings are missing. Returns true only when HQ confirms the save.
const HQ_SUBSCRIBE_URL =
  process.env.HQ_SUBSCRIBE_URL || "https://n8n.peelboss.com/webhook/hq-subscribe"

export async function saveToHq(
  site: string,
  email: string,
  source?: string | null,
): Promise<boolean> {
  try {
    const res = await fetch(HQ_SUBSCRIBE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ site, email: email.trim(), source: source || "website" }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    })
    const data = (await res.json().catch(() => null)) as { ok?: boolean } | null
    if (!res.ok || !data?.ok) {
      console.error("[hq-subscribe] signup not saved", res.status)
      return false
    }
    return true
  } catch (err) {
    console.error("[hq-subscribe] request failed", err)
    return false
  }
}
