// app/api/feedback/route.ts — unified feedback endpoint
// Writes to Supabase, sends admin notification via Resend.

import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendAdminNotification } from "@/lib/email";

const SITE_KEY = process.env.SITE_KEY ?? "unknown";
const VALID_CATEGORIES = ["Bug", "Suggestion", "Content Request", "Other"];

const rateLimit = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;
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

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const { rating, category, message, page, email } = body as {
    rating?: number; category?: string; message?: string; page?: string; email?: string;
  };

  if (!rating || !category || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Rating must be 1-5" }, { status: 400 });
  }
  if (!VALID_CATEGORIES.includes(category)) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  // 1. Persist to Supabase
  let dbWrote = false;
  if (supabaseAdmin) {
    const { error } = await supabaseAdmin
      .from("feedback")
      .insert({ site: SITE_KEY, rating, category, message, page: page ?? null, email: email ?? null });
    if (error) console.error("[feedback] supabase error", error);
    else dbWrote = true;
  }

  // 2. Notify admin
  await sendAdminNotification({
    kind: "feedback",
    payload: { site: SITE_KEY, rating, category, message, page, email, ip, dbWrote },
  });

  return NextResponse.json({ ok: true });
}
