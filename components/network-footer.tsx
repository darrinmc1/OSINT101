import { MerchantDisclosure } from "@/components/merchant-disclosure"
import { clusterFor, SELF_URL } from "@/lib/network"

export function NetworkFooter({ max = 5 }: { max?: number }) {
  const peers = clusterFor(SELF_URL, max)
  return (
    <div className="text-center text-xs text-slate-400">
      <MerchantDisclosure className="text-xs text-slate-500 leading-relaxed max-w-2xl mx-auto" />
      <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
        {peers.map((p) => (
          <li key={p.url}>
            <a href={p.url} title={p.blurb} className="hover:text-cyan-400">
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
