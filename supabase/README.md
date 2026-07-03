# Supabase Phase 3 and 4

This folder contains the database foundation for Irish Nest.

## Files

- `migrations/202607030001_phase_3_schema.sql` creates the schema, enums,
  triggers, audit logging, indexes, and row-level security policies.
- `migrations/202607030002_phase_4_public_flows.sql` adds admin follow-up tasks
  for public reservation flow handoff.
- `seed.sql` adds placeholder private suppliers, product categories, products,
  and journal posts.

## Apply Locally

```bash
supabase db reset
```

Or apply the migration and seed through the Supabase SQL editor in a hosted
project.

## Admin Bootstrap

Create a Supabase Auth user, then insert a matching row into
`public.admin_users` with `role = 'super_admin'`. Supplier records are private
admin data and should not be displayed publicly in the MVP.
