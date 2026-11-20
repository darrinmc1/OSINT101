import { NextRequest, NextResponse } from "next/server";
import { addToMailchimp } from "@/lib/mailchimp";
import { sendWelcome, sendAdminNotification } from "@/lib/email";
import { saveToHq } from "@/lib/hq-subscribe"
import { openSubmissionsDb, SUBMISSIONS_DB_ERROR, upsertSubscriber } from "@/lib/submissions"

const SITE_KEY = process.env.SITE_KEY || "osint101";
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
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? req.headers.get("x-real-ip") ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const { email, name, source, website } = body as { email?: string; name?: string; source?: string; website?: string };
  
  if (website && website !== '') {
    return NextResponse.json({ ok: true });
  }

  if (!email || !emailRe.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // A missing or blocked accounts URL fails closed. It does not fall back to Supabase.
  const db = openSubmissionsDb();
  if (!db) {
    return NextResponse.json({ error: SUBMISSIONS_DB_ERROR }, { status: 503 });
  }

  const dbWrote = await upsertSubscriber(db, {
    site: SITE_KEY,
    email,
    name: name ?? null,
    source: source ?? null,
  });

  // Copy the signup to the shared HQ subscribers list even when the local row did not land.
  const hqSaved = await saveToHq(SITE_KEY, email, source)

  const mc = await addToMailchimp({ email, name, tags: source ? [source] : [] });

  await Promise.allSettled([
    sendWelcome({ email, name }),
    sendAdminNotification({ kind: "subscribe", payload: { site: SITE_KEY, email, name, source, ip, dbWrote, hqSaved, mc: mc.ok } }),
  ]);

  if (!dbWrote && !hqSaved && !mc.ok) {
    return NextResponse.json(
      { error: "We couldn't save your email just now. Please try again." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true });
}
