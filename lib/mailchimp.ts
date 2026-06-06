// lib/mailchimp.ts — Mailchimp add-contact helper
// Uses native fetch — no extra package needed.

const API_KEY = process.env.MAILCHIMP_API_KEY;
const SERVER = process.env.MAILCHIMP_SERVER_PREFIX;
const AUDIENCE = process.env.MAILCHIMP_AUDIENCE_ID;
const SITE_TAG = process.env.MAILCHIMP_SITE_TAG;

export type MailchimpResult =
  | { ok: true; id: string }
  | { ok: false; reason: string };

function md5Lower(email: string) {
  const crypto = require("crypto") as typeof import("crypto");
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
}

export async function addToMailchimp(args: {
  email: string;
  name?: string;
  tags?: string[];
}): Promise<MailchimpResult> {
  if (!API_KEY || !SERVER || !AUDIENCE) {
    console.warn("[mailchimp] API creds missing — skipping list add");
    return { ok: false, reason: "mailchimp_not_configured" };
  }

  const id = md5Lower(args.email);
  const url = `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE}/members/${id}`;
  const tags = [...(args.tags ?? []), ...(SITE_TAG ? [SITE_TAG] : [])];

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
    },
    body: JSON.stringify({
      email_address: args.email,
      status_if_new: "subscribed",
      merge_fields: args.name ? { FNAME: args.name } : undefined,
      tags,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("[mailchimp] upsert failed", res.status, body);
    return { ok: false, reason: `mailchimp_${res.status}` };
  }
  return { ok: true, id };
}
