# Irish Nest

Premium modular homes platform for Ireland. Phase 1 establishes the Next.js
application shell, brand system, layout, reusable primitives, and seeded mock
homepage data. Phase 2 adds the full public homepage sequence, collection page,
dynamic product detail pages, and replaceable placeholder visual assets. Phase
3 adds the Supabase database foundation, row-level security, typed clients,
validation schemas, and the private admin workspace.

## Stack

- Next.js App Router, TypeScript, React
- Tailwind CSS v4 tokens in `app/globals.css`
- Supabase schema, seed data, typed clients, and admin-ready data loaders
- Framer Motion, React Three Fiber, Drei, Three.js, Lucide, Zod, React Hook Form

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm run format
```

## Phase 1 Structure

- `app/` contains the App Router layout, metadata, global tokens, and homepage.
- `components/layout/` contains the public navigation, logo, and footer.
- `components/home/` contains the Phase 1 homepage shell sections.
- `components/ui/` contains low-level reusable primitives.
- `lib/` contains site constants, utility helpers, and seeded mock catalogue data.
- `public/brand/` contains temporary replaceable brand assets.

## Phase 2 Additions

- `/collection` lists all seeded modular-home concepts.
- `/homes/[slug]` statically generates premium product detail pages.
- `public/placeholders/` contains original SVG placeholder renders, interiors,
  and floor plans that can be replaced from the future admin/media workflow.
- The featured explorer is a performant hotspot preview. The full React Three
  Fiber walkthrough is reserved for Phase 5.

## Phase 3 Additions

- `supabase/migrations/` defines the Phase 3 schema, enums, indexes, triggers,
  audit logging, and RLS policies.
- `supabase/seed.sql` creates private supplier placeholders, product categories,
  starter product records, and journal posts.
- `lib/supabase/` contains browser, server, service-role, env, and generated
  database type helpers. The service-role key is only used from server modules.
- `lib/validation/admin.ts` contains Zod schemas for admin login, products, and
  quote line items.
- `/admin` contains the private operational dashboard with products, suppliers,
  enquiries, consultations, reservations, quotes, journal, media, settings, and
  CSV export scaffolding.
- `/admin/login` is ready for Supabase Auth once a matching `admin_users` record
  is bootstrapped.

The admin dashboard can render with fallback records when Supabase env vars are
empty. When `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and
`SUPABASE_SERVICE_ROLE_KEY` are configured, server-side admin loaders read from
Supabase.

## Product Notes

All product and feasibility content is placeholder content. Public supplier
names, pricing, delivery timelines, planning outcomes, and final specifications
must be confirmed in later phases through the admin and Supabase workflow.
