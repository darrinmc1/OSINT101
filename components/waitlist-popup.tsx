"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { HoneypotField } from "@/components/HoneypotField"

const POPUP_STORAGE_KEY = "osint101-waitlist-seen"
const SHOW_AFTER_MS = 5000
const SUPPRESS_DAYS = 30

export function WaitlistPopup() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [honeypot, setHoneypot] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (pathname === "/") return
        const lastSeen = localStorage.getItem(POPUP_STORAGE_KEY)
        if (lastSeen) {
            const daysSince = (Date.now() - parseInt(lastSeen, 10)) / (1000 * 60 * 60 * 24)
            if (daysSince < SUPPRESS_DAYS) return
        }
        const timer = setTimeout(() => setIsOpen(true), SHOW_AFTER_MS)
        return () => clearTimeout(timer)
    }, [pathname])

    const markSeen = () => localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString())
    const handleClose = () => { setIsOpen(false); markSeen() }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (honeypot !== '') {
            handleClose()
            return
        }
        setLoading(true)
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'popup', website: honeypot }),
            })
            if (res.ok) {
                setSubmitted(true)
                markSeen()
            } else {
                handleClose()
            }
        } catch (error) {
            console.error('Error:', error)
            handleClose()
        } finally {
            setLoading(false)
        }
    }

    if (pathname === "/" || !isOpen) return null

    return (
        <>
            <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 9998 }} />
            <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 9999,
                backgroundColor: "#1e1e2e",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "32px",
                width: "100%",
                maxWidth: "440px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
            }}>
                <button
                    onClick={handleClose}
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "none",
                        border: "none",
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "20px",
                        cursor: "pointer",
                        lineHeight: 1,
                    }}
                    aria-label="Close"
                >
                    ✕
                </button>

                {!submitted ? (
                    <>
                        <div style={{ marginBottom: "8px", fontSize: "28px" }}>🔍</div>
                        <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>
                            Get 50% off OSINT101
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "24px", lineHeight: 1.5 }}>
                            Join the waitlist and lock in founder pricing – 50% off when we launch. Learn to find what's already there.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "12px 16px",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    backgroundColor: "rgba(255,255,255,0.05)",
                                    color: "#fff",
                                    fontSize: "14px",
                                    marginBottom: "12px",
                                    boxSizing: "border-box",
                                    outline: "none",
                                }}
                            />
                            <HoneypotField />
                            <input type="hidden" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "none",
                                    backgroundColor: "#6366f1",
                                    color: "#fff",
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    cursor: loading ? "not-allowed" : "pointer",
                                    marginBottom: "12px",
                                    opacity: loading ? 0.7 : 1,
                                }}
                            >
                                {loading ? "Joining..." : "Join the Waitlist – Get 50% Off"}
                            </button>
                            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textAlign: "center" }}>
                                Founder pricing locked in for early subscribers. No spam, unsubscribe anytime.
                            </p>
                        </form>
                    </>
                ) : (
                    <div style={{ textAlign: "center", padding: "16px 0" }}>
                        <div style={{ fontSize: "40px", marginBottom: "12px" }}>🎉</div>
                        <p style={{ color: "#fff", fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
                            On the list. Case opened.
                        </p>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "20px" }}>
                            We'll email your 50% discount code the day we launch.
                        </p>
                        <button
                            onClick={handleClose}
                            style={{
                                padding: "10px 24px",
                                borderRadius: "8px",
                                border: "1px solid rgba(255,255,255,0.2)",
                                backgroundColor: "transparent",
                                color: "#fff",
                                fontSize: "14px",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}
