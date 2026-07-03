# Supabase Phase 3

This folder contains the Phase 3 database foundation for Irish Nest.

## Files

- `migrations/202607030001_phase_3_schema.sql` creates the schema, enums,
  triggers, audit logging, indexes, and row-level security policies.
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
