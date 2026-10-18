# OSINT 101

Training site with a Case File planner at `/case-file` (`POST /api/case-file`).

## Environment

Copy `.env.example` to `.env.local`. Do not commit real keys.

| Variable | Required | Purpose |
| --- | --- | --- |
| `OPENROUTER_API_KEY` | For live AI | Case File planner. When this is unset, or the OpenRouter call fails, the route returns the catalog plan (`engine: "catalog"`, `aiAvailable: false` when the key is absent). |
| `OPENROUTER_MODEL` | No | OpenRouter model id. Defaults to `google/gemini-2.5-flash`. |
| `NEXT_PUBLIC_SITE_NAME` | No | Public site name. Defaults in email copy. |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement id. |
| `SITE_KEY` | No | Site identifier for subscribe and feedback routes. |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | For auth | Clerk publishable key. |
| `CLERK_SECRET_KEY` | For auth | Clerk secret. Advanced Case File steps stay locked until auth is configured and the visitor is signed in. |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | No | Clerk sign-in path. |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | No | Clerk sign-up path. |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | No | Post sign-in redirect. |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | No | Post sign-up redirect. |
| `NEXT_PUBLIC_SUPABASE_URL` | No | Supabase project URL. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No | Supabase anon key. |
| `SUPABASE_SERVICE_ROLE_KEY` | No | Supabase service role key. Server only. |
| `RESEND_API_KEY` | No | Resend API key. |
| `RESEND_FROM` | No | From address for Resend. |
| `RESEND_REPLY_TO` | No | Reply-to address for Resend. |
| `NOTIFY_EMAIL` | No | Inbox that receives site notifications. |
| `MAILCHIMP_API_KEY` | No | Mailchimp API key. |
| `MAILCHIMP_SERVER_PREFIX` | No | Mailchimp datacenter prefix. |
| `MAILCHIMP_AUDIENCE_ID` | No | Mailchimp audience id. |
| `MAILCHIMP_SITE_TAG` | No | Tag applied to Mailchimp subscribers. |

`OPENROUTER_API_KEY` is set in Vercel Production and Preview. The Case File route calls `https://openrouter.ai/api/v1` with `HTTP-Referer` and `X-Title`, a 30 second timeout, and a `max_tokens` cap.
