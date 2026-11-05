/**
 * Public support address from NEXT_PUBLIC_SUPPORT_EMAIL.
 * Unset, blank, or an @example.com placeholder returns null so the site
 * does not publish a fake inbox.
 */
export function getSupportEmail(): string | null {
  const email = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim()
  if (!email || !email.includes("@")) return null
  if (email.toLowerCase().endsWith("@example.com")) return null
  return email
}
