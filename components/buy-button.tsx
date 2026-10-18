"use client"

import { useState } from "react"
import { HoneypotField } from "@/components/HoneypotField"
import { MerchantDisclosure } from "@/components/merchant-disclosure"
import { RefundPolicyNote } from "@/components/refund-policy-note"
import { CHECKOUT_OFFERS, offerIsPurchasable, type CheckoutSku } from "@/lib/offers"
import { getSupportEmail } from "@/lib/support-email"

/**
 * Buy stays a disabled "Coming soon: $…" control, and never calls
 * /api/checkout, unless NEXT_PUBLIC_STRIPE_ENABLED is "true" AND the offer's
 * available flag is true. The server flag STRIPE_ENABLED is a separate gate.
 *
 * launchOfferLabel is computed on the server from LAUNCH_OFFER_ENDS. Pass null
 * once the offer has ended so the line is not shown.
 */
export function BuyButton({
  sku,
  launchOfferLabel = null,
  showWaitlist = true,
}: {
  sku: CheckoutSku
  launchOfferLabel?: string | null
  showWaitlist?: boolean
}) {
  const offer = CHECKOUT_OFFERS[sku]
  const supportEmail = getSupportEmail()
  const onSale = offerIsPurchasable(offer)

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {onSale ? (
          <EnabledBuy sku={sku} label={`Buy — ${offer.priceLabel}`} />
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="cursor-not-allowed rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center font-bold text-slate-300 opacity-80"
          >
            Coming soon: {offer.priceLabel}
          </button>
        )}
        {launchOfferLabel ? (
          <p className="text-sm font-semibold text-emerald-300">{launchOfferLabel}</p>
        ) : null}
      </div>

      <MerchantDisclosure />
      <RefundPolicyNote />

      {supportEmail ? (
        <p className="mt-2 text-xs text-slate-500">
          Questions about a purchase?{" "}
          <a href={`mailto:${supportEmail}`} className="text-slate-300 hover:text-white">
            {supportEmail}
          </a>
        </p>
      ) : null}

      {!onSale && showWaitlist ? <WaitlistNote sku={sku} /> : null}
    </div>
  )
}

function WaitlistNote({ sku }: { sku: CheckoutSku }) {
  return (
    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-5">
      <p className="mb-1 text-sm font-semibold text-white">Notify me when checkout opens</p>
      <p className="mb-4 text-sm text-slate-400">
        Checkout is not open for this plan yet. Join the waitlist and we&apos;ll email you when it is.
      </p>
      <NotifyForm source={`waitlist-${sku}`} />
    </div>
  )
}

function NotifyForm({ source }: { source: string }) {
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (website !== "") {
      setStatus("done")
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source, website }),
      })
      setStatus(res.ok ? "done" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "done") {
    return <p className="text-sm text-emerald-300">You&apos;re on the list.</p>
  }

  return (
    <form onSubmit={onSubmit} className="relative flex flex-col gap-2 sm:flex-row">
      <HoneypotField />
      <input type="hidden" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-bold text-white hover:bg-indigo-400 disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Notify me"}
      </button>
      {status === "error" ? (
        <p className="text-xs text-red-400 sm:basis-full">Could not join the list. Try again.</p>
      ) : null}
    </form>
  )
}

function EnabledBuy({ sku, label }: { sku: CheckoutSku; label: string }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onBuy() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sku }),
      })
      if (res.status === 401) {
        const next = encodeURIComponent(window.location.pathname)
        window.location.href = `/sign-in?redirect_url=${next}`
        return
      }
      const data = (await res.json().catch(() => null)) as { url?: string; error?: string } | null
      if (res.ok && data?.url) {
        window.location.href = data.url
        return
      }
      setError(data?.error ?? "Checkout is not available right now.")
      setLoading(false)
    } catch {
      setError("Checkout is not available right now.")
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={onBuy}
        disabled={loading}
        className="rounded-xl bg-indigo-500 px-6 py-3 text-center font-bold text-white transition-colors hover:bg-indigo-400 disabled:opacity-60"
      >
        {loading ? "Redirecting…" : label}
      </button>
      {error ? <p className="basis-full text-xs text-red-400">{error}</p> : null}
    </>
  )
}
