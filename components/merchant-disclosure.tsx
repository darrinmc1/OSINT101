import { MERCHANT_OF_RECORD_DISCLOSURE } from "@/lib/merchant-of-record"

/** Exact merchant-of-record disclosure. Do not paraphrase. */
export function MerchantDisclosure({
  className = "mt-2 text-xs text-slate-500 leading-relaxed",
}: {
  className?: string
}) {
  return <p className={className}>{MERCHANT_OF_RECORD_DISCLOSURE}</p>
}
