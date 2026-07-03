create table if not exists public.admin_tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  status text not null default 'open',
  priority text not null default 'normal',
  entity_table text,
  entity_id uuid,
  assigned_to uuid references public.admin_users(id) on delete set null,
  due_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists admin_tasks_status_idx
on public.admin_tasks(status);

create index if not exists admin_tasks_entity_idx
on public.admin_tasks(entity_table, entity_id);

drop trigger if exists admin_tasks_set_updated_at on public.admin_tasks;

create trigger admin_tasks_set_updated_at
before update on public.admin_tasks
for each row execute function public.set_updated_at();

alter table public.admin_tasks enable row level security;

drop policy if exists "Admins manage tasks" on public.admin_tasks;

create policy "Admins manage tasks"
on public.admin_tasks for all
using (public.is_admin())
with check (public.is_admin());
