// lib/email.ts — Resend transactional send
// Install: npm i resend
//
// Usage:
//   import { sendWelcome, sendAdminNotification } from "@/lib/email";
//   await sendWelcome({ email, name });

import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const FROM = process.env.RESEND_FROM ?? "noreply@example.com";
const REPLY_TO = process.env.RESEND_REPLY_TO ?? undefined;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "Our site";
const NOTIFY = process.env.NOTIFY_EMAIL; // e.g. darrinmc1@yahoo.com

const resend = apiKey ? new Resend(apiKey) : null;

type SendResult = { ok: true } | { ok: false; reason: string };

async function send(
  to: string | string[],
  subject: string,
  html: string
): Promise<SendResult> {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping send");
    return { ok: false, reason: "resend_not_configured" };
  }
  const { error } = await resend.emails.send({
    from: FROM,
    to,
    subject,
    html,
    replyTo: REPLY_TO,
  });
  if (error) {
    console.error("[email] send failed", error);
    return { ok: false, reason: error.name ?? "send_error" };
  }
  return { ok: true };
}

export async function sendWelcome(args: { email: string; name?: string }) {
  const subject = `Welcome to ${SITE_NAME}`;
  const greeting = args.name ? `Hi ${args.name},` : "Hi there,";
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #2E4A7C;">Welcome to ${SITE_NAME}</h2>
      <p>${greeting}</p>
      <p>Thanks for signing up. You'll be the first to know about new modules, updates, and early-access features.</p>
      <p>If this wasn't you, just ignore this email and you won't hear from us again.</p>
      <p style="margin-top: 32px; color: #888; font-size: 14px;">— The ${SITE_NAME} team</p>
    </div>
  `;
  return send(args.email, subject, html);
}

export async function sendAdminNotification(args: {
  kind: "subscribe" | "feedback";
  payload: Record<string, unknown>;
}) {
  if (!NOTIFY) return { ok: false as const, reason: "notify_email_not_set" };
  const subject =
    args.kind === "subscribe"
      ? `[${SITE_NAME}] New subscriber`
      : `[${SITE_NAME}] New feedback`;
  const rows = Object.entries(args.payload)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px;color:#666;">${k}</td><td style="padding:4px 12px;"><code>${String(v)}</code></td></tr>`
    )
    .join("");
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px;">
      <h3 style="color:#2E4A7C;">${subject}</h3>
      <table style="border-collapse:collapse;">${rows}</table>
    </div>
  `;
  return send(NOTIFY, subject, html);
}
