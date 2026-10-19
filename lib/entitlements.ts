import { supabaseAdmin } from "@/lib/supabase"
import { stripeSiteKey } from "./offers"
import { scopeToSite, siteProductIdPattern, toStoredProductId } from "./entitlement-keys"

export interface Entitlement {
  id: string
  user_id: string
  product_id: string
  granted_at: string
  expires_at: string | null
}

export async function getUserEntitlements(userId: string): Promise<Entitlement[]> {
  if (!supabaseAdmin) return []
  const site = stripeSiteKey()
  const { data, error } = await supabaseAdmin
    .from("entitlements")
    .select("*")
    .eq("user_id", userId)
    .like("product_id", siteProductIdPattern(site))
  if (error) {
    console.error("[entitlements] fetch failed", error)
    return []
  }
  const now = Date.now()
  return scopeToSite(data ?? [], site).filter((row) => {
    if (!row.expires_at) return true
    return new Date(row.expires_at).getTime() > now
  })
}

export async function revokeEntitlement(userId: string, productId: string): Promise<boolean> {
  if (!supabaseAdmin) return false
  const { error } = await supabaseAdmin
    .from("entitlements")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", toStoredProductId(productId, stripeSiteKey()))
  if (error) {
    console.error("[entitlements] revoke failed", error)
    return false
  }
  return true
}

export async function grantEntitlement(userId: string, productId: string): Promise<boolean> {
  if (!supabaseAdmin) return false
  const { error } = await supabaseAdmin.from("entitlements").upsert(
    {
      user_id: userId,
      product_id: toStoredProductId(productId, stripeSiteKey()),
      granted_at: new Date().toISOString(),
    },
    { onConflict: "user_id,product_id" }
  )
  if (error) {
    console.error("[entitlements] grant failed", error)
    return false
  }
  return true
}
