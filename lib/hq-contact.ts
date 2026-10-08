// Contact form relay.
// Posts JSON {name, email, message} to Empire HQ, which emails Darrin
// with Reply-To set to the visitor. Subscribe stays on the hq-subscribe webhook.
const HQ_CONTACT_URL =
  process.env.HQ_CONTACT_URL || "https://hq.peelboss.com/api/send-email"

const SITE = "osint101"

export async function sendContactToHq(input: {
  name: string
  email: string
  message: string
}): Promise<boolean> {
  const name = input.name.trim()
  const email = input.email.trim()
  const message = input.message.trim()

  try {
    const res = await fetch(HQ_CONTACT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${name} (${SITE})`,
        email,
        message: `[${SITE} contact form]\n${message}`,
      }),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    })
    if (!res.ok) {
      console.error("[hq-contact] send failed", res.status)
      return false
    }
    return true
  } catch (err) {
    console.error("[hq-contact] request failed", err)
    return false
  }
}
