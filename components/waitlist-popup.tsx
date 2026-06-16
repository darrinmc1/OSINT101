"use client"

import { useEffect, useState } from "react"

const MAILCHIMP_ACTION_URL =
    "https://gmail.us19.list-manage.com/subscribe/post?u=b8898b94266e53179fa3bc7ff&id=cc2cbb82cb&f_id=0018f7e3f0"
const HONEYPOT_FIELD_NAME = "b_b8898b94266e53179fa3bc7ff_cc2cbb82cb"
const POPUP_STORAGE_KEY = "osint101-waitlist-seen"

const SHOW_AFTER_MS = 5000
const SUPPRESS_DAYS = 30

export function WaitlistPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const lastSeen = localStorage.getItem(POPUP_STORAGE_KEY)
        if (lastSeen) {
            const daysSince =
                (Date.now() - parseInt(lastSeen, 10)) / (1000 * 60 * 60 * 24)
            if (daysSince < SUPPRESS_DAYS) return
        }
        const timer = setTimeout(() => setIsOpen(true), SHOW_AFTER_MS)
        return () => clearTimeout(timer)
    }, [])

    const markSeen = () => localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString())
    const handleClose = () => { setIsOpen(false); markSeen() }
    const handleSubmit = () => markSeen()

    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
                zIndex: 9998,
            }} />
            {/* Modal */}
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
                {/* Close button */}
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
                            Join the waitlist and lock in founder pricing — 50% off when we launch. Learn to find what's already there.
                        </p>

                        <iframe
                            name="mailchimp-target"
                            style={{ display: "none" }}
                            title="Mailchimp submission target"
                            onLoad={() => { if (email) setSubmitted(true) }}
                        />
                        <form
                            action={MAILCHIMP_ACTION_URL}
                            method="post"
                            target="mailchimp-target"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="email"
                                name="EMAIL"
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
                            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                <input type="text" name={HONEYPOT_FIELD_NAME} tabIndex={-1} defaultValue="" />
                            </div>
                            <button
                                type="submit"
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    borderRadius: "8px",
                                    border: "none",
                                    backgroundColor: "#6366f1",
                                    color: "#fff",
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    marginBottom: "12px",
                                }}
                            >
                                Join the Waitlist — Get 50% Off
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
                            We&apos;ll email your 50% discount code the day we launch.
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
