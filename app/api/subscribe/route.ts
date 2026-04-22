// app/api/subscribe/route.ts — unified subscribe endpoint
// Replaces the old nodemailer+JSON-file pattern.
// Writes to Supabase, upserts into Mailchimp, sends welcome via Resend.

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { addToMailchimp } from "@/lib/mailchimp";
import { sendWelcome, sendAdminNotification } from "@/lib/email";

const SITE_KEY = process.env.SITE_KEY ?? "unknown";

// Simple in-memory rate limit (per-server-instance — good enough for now).
const rateLimit = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const e = rateLimit.get(ip);
  if (!e || now > e.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  e.count += 1;
  return e.count > MAX_PER_WINDOW;
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const { email, name, source } = body as {
    email?: string; name?: string; source?: string;
  };
  if (!email || !emailRe.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // 1. Persist to Supabase (source of truth)
  let dbWrote = false;
  if (supabaseAdmin) {
    const { error } = await supabaseAdmin
      .from("subscribers")
      .upsert(
        { site: SITE_KEY, email, name: name ?? null, source: source ?? null },
        { onConflict: "site,email" }
      );
    if (error) console.error("[subscribe] supabase error", error);
    else dbWrote = true;
  }

  // 2. Push to Mailchimp (best-effort — don't fail the request if this errors)
  const mc = await addToMailchimp({ email, name, tags: source ? [source] : [] });

  // 3. Fire-and-forget welcome email + admin notification
  await Promise.allSettled([
    sendWelcome({ email, name }),
    sendAdminNotification({
      kind: "subscribe",
      payload: { site: SITE_KEY, email, name, source, ip, dbWrote, mc: mc.ok },
    }),
  ]);

  return NextResponse.json({ ok: true });
}
