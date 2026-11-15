-- OSINT 101 accounts, entitlements, and usage.
-- Run this in the Supabase SQL editor for the project in NEXT_PUBLIC_SUPABASE_URL.
-- The Next.js server writes with SUPABASE_SERVICE_ROLE_KEY (server only).
-- Row level security is on and there are no anon or authenticated policies,
-- so a browser client using the anon key cannot read or write these tables.
-- The service role bypasses RLS. Do not put the service role key in NEXT_PUBLIC_*.

create table if not exists public.profiles (
  user_id text primary key,
  email text,
  entitlement text not null default 'free' check (entitlement in ('free', 'field_pack', 'full_library')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.usage_events (
  id uuid primary key default gen_random_uuid(),
  user_id text not null references public.profiles (user_id) on delete cascade,
  event_type text not null check (event_type in ('module_view', 'briefing_view', 'download', 'case_file_view', 'resource_view')),
  resource_id text not null,
  path text,
  created_at timestamptz not null default now()
);

create index if not exists usage_events_user_created_idx
  on public.usage_events (user_id, created_at desc);

create index if not exists usage_events_type_created_idx
  on public.usage_events (event_type, created_at desc);

alter table public.profiles enable row level security;
alter table public.usage_events enable row level security;

revoke all on table public.profiles from anon, authenticated;
revoke all on table public.usage_events from anon, authenticated;
