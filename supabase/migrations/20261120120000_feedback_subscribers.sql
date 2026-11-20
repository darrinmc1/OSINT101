-- OSINT 101 feedback and email subscribers on plain Postgres (Neon).
-- Keep this file in the repo. The app does not apply it.
-- Run it by hand on the database in ACCOUNTS_DATABASE_URL.
-- Do not run it against Supabase project radlwbqfzrzmgdldyifi.
-- Old rows stay in Supabase. This file does not read, copy, or delete them.
-- The server connects as the table owner with parameterised queries.
-- Row level security is on and there are no policies, so a non-owner role
-- cannot read or write these tables. The owner bypasses row level security.
--
-- Columns match the values written by app/api/feedback/route.ts and
-- app/api/subscribe/route.ts. id and created_at are defaults the routes
-- do not send. subscribers (site, email) is the upsert key.

create extension if not exists pgcrypto;

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  site text not null,
  category text not null
    check (category in ('Bug', 'Suggestion', 'Content Request', 'Other')),
  rating integer not null check (rating between 1 and 5),
  message text not null,
  page text,
  page_url text,
  email text,
  ip_address text,
  feedback_type text not null
    check (feedback_type in ('bug', 'suggestion', 'content_request', 'general')),
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists feedback_status_created_idx
  on public.feedback (status, created_at);

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  site text not null,
  email text not null,
  name text,
  source text,
  created_at timestamptz not null default now(),
  unique (site, email)
);

create index if not exists subscribers_site_created_idx
  on public.subscribers (site, created_at desc);

alter table public.feedback enable row level security;
alter table public.subscribers enable row level security;

-- Supabase role names are not present on Neon. Revoke only when they exist.
do $$
begin
  if exists (select 1 from pg_roles where rolname = 'anon') then
    execute 'revoke all on table public.feedback from anon';
    execute 'revoke all on table public.subscribers from anon';
  end if;
  if exists (select 1 from pg_roles where rolname = 'authenticated') then
    execute 'revoke all on table public.feedback from authenticated';
    execute 'revoke all on table public.subscribers from authenticated';
  end if;
end $$;
