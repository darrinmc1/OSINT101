// app/api/feedback/route.ts - unified feedback endpoint
// Writes a new row to the Neon accounts database and notifies via Resend.
// After a successful save, kicks the existing n8n feedback webhook.

import { NextRequest, NextResponse } from "next/server";
import { sendAdminNotification } from "@/lib/email";
import { notifyFeedbackWebhook } from "@/lib/feedback-webhook";
import { insertFeedback, openSubmissionsDb, SUBMISSIONS_DB_ERROR } from "@/lib/submissions";

const SITE_KEY = process.env.SITE_KEY ?? "osint101";
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

  // Resolve the full page URL (widget sends a relative pathname; the pipeline maps
  // the site by this URL's domain, so a full URL is required).
  const origin =
    req.headers.get("origin") ??
    (req.headers.get("host") ? `https://${req.headers.get("host")}` : null);
  const pageUrl =
    page && page.startsWith("http")
      ? page
      : origin && page
      ? `${origin}${page.startsWith("/") ? page : `/${page}`}`
      : origin ?? null;
  const feedbackType =
    category === "Bug" ? "bug"
      : category === "Suggestion" ? "suggestion"
      : category === "Content Request" ? "content_request"
      : "general";

  // 1. Persist on Neon. Status "new" matches the value the ingest workflow looks for.
  // A missing or blocked accounts URL fails closed. It does not fall back to Supabase.
  const db = openSubmissionsDb();
  if (!db) {
    return NextResponse.json({ error: SUBMISSIONS_DB_ERROR }, { status: 503 });
  }

  const dbWrote = await insertFeedback(db, {
    site: SITE_KEY,
    category,
    rating,
    message,
    page: page ?? null,
    pageUrl,
    email: email ?? null,
    ipAddress: ip,
    feedbackType,
    status: "new",
  });
  if (dbWrote) {
    // Instant n8n kick. Failures stay inside the helper and do not change this response.
    await notifyFeedbackWebhook();
  }

  // 2. Notify admin
  await sendAdminNotification({
    kind: "feedback",
    payload: { site: SITE_KEY, rating, category, message, page, email, ip, dbWrote },
  });

  return NextResponse.json({ ok: true });
}
