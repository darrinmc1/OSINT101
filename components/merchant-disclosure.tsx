/** Exact merchant-of-record disclosure — do not paraphrase. */
export const MERCHANT_OF_RECORD_DISCLOSURE =
  "Part of the Empire HQ network. Payments are charged by TTPN Pty Ltd (statement may show as TTPN or TTPN* plus the product name)."

export function MerchantDisclosure({
  className = "text-xs text-slate-500 leading-relaxed",
}: {
  className?: string
}) {
  return <p className={className}>{MERCHANT_OF_RECORD_DISCLOSURE}</p>
}
