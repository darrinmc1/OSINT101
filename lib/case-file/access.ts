import { hasClerkPublishableKey } from "@/lib/clerk"

export async function canAccessAdvanced(): Promise<boolean> {
  if (!hasClerkPublishableKey() || !process.env.CLERK_SECRET_KEY) {
    return false
  }
  try {
    const { auth } = await import("@clerk/nextjs/server")
    const session = await auth()
    return Boolean(session.userId)
  } catch {
    return false
  }
}
