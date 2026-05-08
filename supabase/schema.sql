create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  business_type text,
  service_interest text,
  budget_range text,
  timeline text,
  project_details text,
  preferred_contact_method text,
  source text default 'website',
  status text default 'new',
  routed_division text,
  created_at timestamptz not null default now()
);

create table if not exists public.chatbot_messages (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete set null,
  session_id text not null,
  role text not null check (role in ('visitor', 'assistant', 'system')),
  message text not null,
  routing_summary text,
  created_at timestamptz not null default now()
);

create table if not exists public.service_requests (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete set null,
  division text not null,
  service_type text not null,
  priority text default 'standard',
  status text default 'intake',
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.consultations (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete set null,
  calendly_event_uri text,
  scheduled_for timestamptz,
  status text default 'requested',
  created_at timestamptz not null default now()
);

create table if not exists public.divisions (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  positioning text,
  status text default 'active',
  created_at timestamptz not null default now()
);

create table if not exists public.automation_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete set null,
  event_type text not null,
  provider text,
  payload jsonb default '{}'::jsonb,
  status text default 'queued',
  created_at timestamptz not null default now()
);

create table if not exists public.client_accounts (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  company_name text,
  auth_user_id uuid,
  status text default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.uploaded_documents (
  id uuid primary key default gen_random_uuid(),
  client_account_id uuid references public.client_accounts(id) on delete cascade,
  storage_path text not null,
  document_type text,
  status text default 'uploaded',
  created_at timestamptz not null default now()
);

create table if not exists public.affiliate_links (
  id uuid primary key default gen_random_uuid(),
  division_id uuid references public.divisions(id) on delete set null,
  partner_name text not null,
  destination_url text not null,
  tracking_code text,
  status text default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete set null,
  stripe_payment_intent_id text,
  amount_cents integer,
  currency text default 'usd',
  status text default 'pending',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
alter table public.chatbot_messages enable row level security;
alter table public.service_requests enable row level security;
alter table public.consultations enable row level security;
alter table public.divisions enable row level security;
alter table public.automation_events enable row level security;
alter table public.client_accounts enable row level security;
alter table public.uploaded_documents enable row level security;
alter table public.affiliate_links enable row level security;
alter table public.payments enable row level security;
