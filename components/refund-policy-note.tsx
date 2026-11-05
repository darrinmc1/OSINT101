import { REFUND_POLICY } from "@/lib/refund-policy"

export function RefundPolicyNote({
  className = "mt-2 text-xs text-slate-500 leading-relaxed",
}: {
  className?: string
}) {
  return <p className={className}>{REFUND_POLICY}</p>
}
