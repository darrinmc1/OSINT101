"use client"

import { useEffect, useRef } from "react"

/**
 * Decorative hero layers only. Scroll-linked translate, no 3D world.
 * Honors prefers-reduced-motion.
 */
export function HeroParallax() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const host = root?.parentElement
    if (!root || !host) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      const y = window.scrollY
      if (y > 1400) return
      host.style.setProperty("--hero-parallax", `${y}px`)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="scrollcraft-dots absolute -inset-x-8 -top-24 h-[140%]" />
      <div className="scrollcraft-glow absolute left-1/2 top-[12%] h-[28rem] w-[42rem] -translate-x-1/2" />
      <div className="scrollcraft-glow-side absolute -right-24 top-32 h-[22rem] w-[22rem]" />
    </div>
  )
}
