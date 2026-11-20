-- OSINT 101 accounts and usage on plain Postgres (Neon).
-- Keep this file in the repo. The app does not apply it.
-- Run it by hand on the database in ACCOUNTS_DATABASE_URL.
-- Do not run it against Supabase project radlwbqfzrzmgdldyifi.
-- The server connects as the table owner with parameterised queries.
-- Row level security is on and there are no policies, so a non-owner role
-- cannot read or write these tables. The owner bypasses row level security.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  user_id text primary key,
  email text,
  entitlement text not null default 'free'
    check (entitlement in ('free', 'base', 'download_pack', 'field_collection')),
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

-- Supabase role names are not present on Neon. Revoke only when they exist.
do $$
begin
  if exists (select 1 from pg_roles where rolname = 'anon') then
    execute 'revoke all on table public.profiles from anon';
    execute 'revoke all on table public.usage_events from anon';
  end if;
  if exists (select 1 from pg_roles where rolname = 'authenticated') then
    execute 'revoke all on table public.profiles from authenticated';
    execute 'revoke all on table public.usage_events from authenticated';
  end if;
end $$;
