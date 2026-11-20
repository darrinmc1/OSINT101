-- Historical Supabase draft. Do not run this on the Neon accounts database.
-- Accounts and usage use supabase/migrations/20261120000000_accounts_usage.sql.
--
-- Run this in the Supabase SQL editor for the OSINT 101 project.
-- It does not grant the browser access. The server uses the service role.

create table if not exists public.profiles (
  user_id text primary key,
  email text,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create table if not exists public.usage_events (
  id bigint generated always as identity primary key,
  user_id text not null,
  path text not null,
  created_at timestamptz not null default now()
);

create index if not exists usage_events_created_at_idx
  on public.usage_events (created_at desc);

create index if not exists usage_events_user_id_idx
  on public.usage_events (user_id);

alter table public.profiles enable row level security;
alter table public.usage_events enable row level security;
