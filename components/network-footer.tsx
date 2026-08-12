import { clusterFor, HUB, SELF_URL } from "@/lib/network"

export function NetworkFooter({ max = 5 }: { max?: number }) {
  const peers = clusterFor(SELF_URL, max)
  return (
    <div className="text-center text-xs text-slate-400">
      <p className="font-semibold text-slate-300 mb-2">
        Part of the{" "}
        <a href={HUB} className="hover:text-cyan-400 underline underline-offset-2">
          Empire HQ network
        </a>
      </p>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
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
