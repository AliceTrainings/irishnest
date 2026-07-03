create extension if not exists pgcrypto;

create type public.admin_role as enum (
  'super_admin',
  'admin',
  'sales',
  'content_editor'
);

create type public.product_status as enum (
  'draft',
  'published',
  'archived'
);

create type public.lead_status as enum (
  'new',
  'contacted',
  'qualified',
  'site_review',
  'quote_sent',
  'consultation_booked',
  'reservation_pending',
  'reserved',
  'closed_won',
  'closed_lost'
);

create type public.reservation_status as enum (
  'pending_payment',
  'paid',
  'cancelled',
  'refunded',
  'expired'
);

create type public.quote_status as enum (
  'draft',
  'sent',
  'accepted',
  'declined',
  'expired'
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  phone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.admin_users (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  role public.admin_role not null default 'sales',
  display_name text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.suppliers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_name text,
  email text,
  phone text,
  website text,
  notes text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.product_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  description text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.media_assets (
  id uuid primary key default gen_random_uuid(),
  storage_path text not null,
  alt_text text,
  caption text,
  mime_type text,
  width integer,
  height integer,
  size_bytes bigint,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  supplier_id uuid references public.suppliers(id) on delete set null,
  category_id uuid references public.product_categories(id) on delete set null,
  name text not null,
  slug text not null unique,
  status public.product_status not null default 'draft',
  short_description text,
  long_description text,
  bedroom_count integer not null default 0,
  bathroom_count integer not null default 0,
  floor_area_sqm numeric(8, 2),
  width_m numeric(8, 2),
  length_m numeric(8, 2),
  height_m numeric(8, 2),
  featured boolean not null default false,
  main_image_asset_id uuid references public.media_assets(id) on delete set null,
  floor_plan_asset_id uuid references public.media_assets(id) on delete set null,
  model_url text,
  included_features jsonb not null default '[]'::jsonb,
  optional_upgrades jsonb not null default '[]'::jsonb,
  seo_title text,
  seo_description text,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.product_media (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  media_asset_id uuid not null references public.media_assets(id) on delete cascade,
  media_type text not null default 'gallery',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique (product_id, media_asset_id, media_type)
);

create table public.product_features (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  title text not null,
  description text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.product_specifications (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  label text not null,
  value text not null,
  group_name text not null default 'General',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.product_hotspots (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  label text not null,
  title text not null,
  description text,
  material text,
  position jsonb not null default '{}'::jsonb,
  camera_target jsonb not null default '{}'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.products(id) on delete set null,
  full_name text not null,
  email text not null,
  phone text,
  eircode text,
  desired_home_type text,
  timeline text,
  message text,
  consent boolean not null default false,
  status public.lead_status not null default 'new',
  source text not null default 'website',
  assigned_to uuid references public.admin_users(id) on delete set null,
  internal_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  enquiry_id uuid references public.enquiries(id) on delete set null,
  product_id uuid references public.products(id) on delete set null,
  full_name text not null,
  email text not null,
  phone text,
  preferred_date date,
  preferred_time text,
  meeting_type text not null default 'consultation',
  notes text,
  status text not null default 'requested',
  assigned_to uuid references public.admin_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.reservations (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.products(id) on delete set null,
  full_name text not null,
  email text not null,
  phone text,
  eircode text,
  preferred_timeline text,
  notes text,
  deposit_amount_cents integer not null default 0,
  currency text not null default 'EUR',
  status public.reservation_status not null default 'pending_payment',
  payment_provider text,
  payment_reference text,
  disclaimer_accepted boolean not null default false,
  assigned_to uuid references public.admin_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.quotes (
  id uuid primary key default gen_random_uuid(),
  enquiry_id uuid references public.enquiries(id) on delete set null,
  product_id uuid references public.products(id) on delete set null,
  quote_number text not null unique,
  status public.quote_status not null default 'draft',
  customer_name text not null,
  customer_email text not null,
  currency text not null default 'EUR',
  subtotal_cents integer not null default 0,
  notes text,
  valid_until date,
  created_by uuid references public.admin_users(id) on delete set null,
  assigned_to uuid references public.admin_users(id) on delete set null,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.quote_items (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid not null references public.quotes(id) on delete cascade,
  description text not null,
  quantity numeric(10, 2) not null default 1,
  unit_amount_cents integer not null default 0,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.lead_assignments (
  id uuid primary key default gen_random_uuid(),
  enquiry_id uuid references public.enquiries(id) on delete cascade,
  reservation_id uuid references public.reservations(id) on delete cascade,
  quote_id uuid references public.quotes(id) on delete cascade,
  assigned_to uuid not null references public.admin_users(id) on delete cascade,
  assigned_by uuid references public.admin_users(id) on delete set null,
  note text,
  created_at timestamptz not null default now(),
  constraint lead_assignments_target_check check (
    num_nonnulls(enquiry_id, reservation_id, quote_id) = 1
  )
);

create table public.journal_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  body jsonb not null default '{}'::jsonb,
  status public.product_status not null default 'draft',
  cover_asset_id uuid references public.media_assets(id) on delete set null,
  seo_title text,
  seo_description text,
  published_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.site_feasibility_requests (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.products(id) on delete set null,
  eircode text not null,
  desired_home_type text,
  timeline text,
  full_name text not null,
  email text not null,
  phone text,
  consent boolean not null default false,
  status public.lead_status not null default 'new',
  notes text,
  assigned_to uuid references public.admin_users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.activity_log (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references auth.users(id) on delete set null,
  actor_admin_id uuid references public.admin_users(id) on delete set null,
  entity_table text not null,
  entity_id uuid not null,
  action text not null,
  old_data jsonb,
  new_data jsonb,
  created_at timestamptz not null default now()
);

create index products_status_idx on public.products(status);
create index products_featured_idx on public.products(featured);
create index enquiries_status_idx on public.enquiries(status);
create index enquiries_created_at_idx on public.enquiries(created_at desc);
create index appointments_preferred_date_idx on public.appointments(preferred_date);
create index reservations_status_idx on public.reservations(status);
create index quotes_status_idx on public.quotes(status);
create index feasibility_status_idx on public.site_feasibility_requests(status);
create index activity_log_entity_idx on public.activity_log(entity_table, entity_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.current_admin_role()
returns public.admin_role
language sql
stable
security definer
set search_path = public
as $$
  select role
  from public.admin_users
  where user_id = auth.uid()
    and is_active = true
  limit 1;
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.current_admin_role() is not null;
$$;

create or replace function public.is_admin_role(allowed_roles public.admin_role[])
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.current_admin_role() = any(allowed_roles);
$$;

create or replace function public.log_admin_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  admin_record public.admin_users;
begin
  select *
  into admin_record
  from public.admin_users
  where user_id = auth.uid()
    and is_active = true
  limit 1;

  insert into public.activity_log (
    actor_user_id,
    actor_admin_id,
    entity_table,
    entity_id,
    action,
    old_data,
    new_data
  )
  values (
    auth.uid(),
    admin_record.id,
    tg_table_name,
    coalesce(new.id, old.id),
    tg_op,
    case when tg_op in ('UPDATE', 'DELETE') then to_jsonb(old) else null end,
    case when tg_op in ('INSERT', 'UPDATE') then to_jsonb(new) else null end
  );

  return coalesce(new, old);
end;
$$;

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

create trigger admin_users_set_updated_at
before update on public.admin_users
for each row execute function public.set_updated_at();

create trigger suppliers_set_updated_at
before update on public.suppliers
for each row execute function public.set_updated_at();

create trigger product_categories_set_updated_at
before update on public.product_categories
for each row execute function public.set_updated_at();

create trigger media_assets_set_updated_at
before update on public.media_assets
for each row execute function public.set_updated_at();

create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

create trigger enquiries_set_updated_at
before update on public.enquiries
for each row execute function public.set_updated_at();

create trigger appointments_set_updated_at
before update on public.appointments
for each row execute function public.set_updated_at();

create trigger reservations_set_updated_at
before update on public.reservations
for each row execute function public.set_updated_at();

create trigger quotes_set_updated_at
before update on public.quotes
for each row execute function public.set_updated_at();

create trigger journal_posts_set_updated_at
before update on public.journal_posts
for each row execute function public.set_updated_at();

create trigger feasibility_set_updated_at
before update on public.site_feasibility_requests
for each row execute function public.set_updated_at();

create trigger audit_products
after insert or update or delete on public.products
for each row execute function public.log_admin_update();

create trigger audit_enquiries
after insert or update or delete on public.enquiries
for each row execute function public.log_admin_update();

create trigger audit_reservations
after insert or update or delete on public.reservations
for each row execute function public.log_admin_update();

create trigger audit_quotes
after insert or update or delete on public.quotes
for each row execute function public.log_admin_update();

alter table public.profiles enable row level security;
alter table public.admin_users enable row level security;
alter table public.suppliers enable row level security;
alter table public.product_categories enable row level security;
alter table public.media_assets enable row level security;
alter table public.products enable row level security;
alter table public.product_media enable row level security;
alter table public.product_features enable row level security;
alter table public.product_specifications enable row level security;
alter table public.product_hotspots enable row level security;
alter table public.enquiries enable row level security;
alter table public.appointments enable row level security;
alter table public.reservations enable row level security;
alter table public.quotes enable row level security;
alter table public.quote_items enable row level security;
alter table public.lead_assignments enable row level security;
alter table public.journal_posts enable row level security;
alter table public.media_assets enable row level security;
alter table public.site_feasibility_requests enable row level security;
alter table public.activity_log enable row level security;

create policy "Admins can manage profiles"
on public.profiles for all
using (public.is_admin())
with check (public.is_admin());

create policy "Users can read own profile"
on public.profiles for select
using (id = auth.uid());

create policy "Users can update own profile"
on public.profiles for update
using (id = auth.uid())
with check (id = auth.uid());

create policy "Super admins manage admin users"
on public.admin_users for all
using (public.is_admin_role(array['super_admin']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin']::public.admin_role[]));

create policy "Admins can read admin users"
on public.admin_users for select
using (public.is_admin());

create policy "Admins manage suppliers"
on public.suppliers for all
using (public.is_admin_role(array['super_admin','admin']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin']::public.admin_role[]));

create policy "Admins read suppliers"
on public.suppliers for select
using (public.is_admin());

create policy "Admins manage categories"
on public.product_categories for all
using (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]));

create policy "Public reads categories"
on public.product_categories for select
using (true);

create policy "Admins manage media"
on public.media_assets for all
using (public.is_admin())
with check (public.is_admin());

create policy "Public reads media"
on public.media_assets for select
using (true);

create policy "Admins manage products"
on public.products for all
using (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]));

create policy "Public reads published products"
on public.products for select
using (status = 'published');

create policy "Admins manage product media"
on public.product_media for all
using (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]));

create policy "Public reads product media"
on public.product_media for select
using (
  exists (
    select 1 from public.products
    where products.id = product_media.product_id
      and products.status = 'published'
  )
);

create policy "Admins manage product features"
on public.product_features for all
using (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]));

create policy "Public reads product features"
on public.product_features for select
using (
  exists (
    select 1 from public.products
    where products.id = product_features.product_id
      and products.status = 'published'
  )
);

create policy "Admins manage product specifications"
on public.product_specifications for all
using (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]));

create policy "Public reads product specifications"
on public.product_specifications for select
using (
  exists (
    select 1 from public.products
    where products.id = product_specifications.product_id
      and products.status = 'published'
  )
);

create policy "Admins manage product hotspots"
on public.product_hotspots for all
using (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]));

create policy "Public reads product hotspots"
on public.product_hotspots for select
using (
  exists (
    select 1 from public.products
    where products.id = product_hotspots.product_id
      and products.status = 'published'
  )
);

create policy "Public creates enquiries"
on public.enquiries for insert
with check (consent = true);

create policy "Sales admins manage enquiries"
on public.enquiries for all
using (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]));

create policy "Public creates appointments"
on public.appointments for insert
with check (true);

create policy "Sales admins manage appointments"
on public.appointments for all
using (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]));

create policy "Public creates reservations"
on public.reservations for insert
with check (disclaimer_accepted = true and status = 'pending_payment');

create policy "Sales admins manage reservations"
on public.reservations for all
using (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]));

create policy "Sales admins manage quotes"
on public.quotes for all
using (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]));

create policy "Sales admins manage quote items"
on public.quote_items for all
using (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]));

create policy "Sales admins manage lead assignments"
on public.lead_assignments for all
using (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]));

create policy "Public reads published journal"
on public.journal_posts for select
using (status = 'published' and published_at is not null);

create policy "Admins manage journal"
on public.journal_posts for all
using (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','content_editor']::public.admin_role[]));

create policy "Public creates feasibility requests"
on public.site_feasibility_requests for insert
with check (consent = true);

create policy "Sales admins manage feasibility requests"
on public.site_feasibility_requests for all
using (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]))
with check (public.is_admin_role(array['super_admin','admin','sales']::public.admin_role[]));

create policy "Admins read activity"
on public.activity_log for select
using (public.is_admin());
