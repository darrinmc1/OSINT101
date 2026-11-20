import { getViewer } from "@/lib/viewer"

/** Advanced case-file lanes follow the stored entitlement. A free account does not unlock them. */
export async function canAccessAdvanced(): Promise<boolean> {
  const viewer = await getViewer()
  return viewer.entitlement === "base" || viewer.entitlement === "field_collection"
}
