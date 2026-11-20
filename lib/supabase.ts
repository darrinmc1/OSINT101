// lib/supabase.ts - shared Supabase server client.
// Feedback and subscriber writes use the Neon accounts database instead.
// Nothing in the app reads the Supabase feedback or subscribers tables.

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.warn(
    "[supabase] NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set."
  );
}

export const supabaseAdmin =
  url && serviceKey
    ? createClient(url, serviceKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

export const hasSupabase = () => supabaseAdmin !== null;
