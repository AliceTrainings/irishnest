# Irish Nest Deployment Notes

## Environment

Required for public Supabase form submissions and admin data:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

The site can render without Supabase values, but public forms will return a
configuration message instead of accepting live submissions.

## Supabase

Apply migrations in order:

1. `supabase/migrations/202607030001_phase_3_schema.sql`
2. `supabase/migrations/202607030002_phase_4_public_flows.sql`

Then apply `supabase/seed.sql` for placeholder categories, private suppliers,
starter products, and journal posts.

Bootstrap the first admin by creating a Supabase Auth user and inserting the
matching user id into `public.admin_users` with `role = 'super_admin'`.

## Validation

Run before deployment:

```bash
npm run lint
npm run typecheck
npm run format
npm run build
```

Optional local route smoke test while `npm run dev` is running:

```bash
node scripts/phase-6/smoke-routes.mjs
```

Optional Phase 5 visual verification:

```bash
node scripts/phase-5/verify-three.mjs
```

That script skips automatically unless Playwright is installed.

## Content Positioning

Public content is indicative only. Do not publish supplier names, final pricing,
planning certainty, warranty claims, delivery timelines, or performance claims
until supplier and professional confirmations are available.
