# Irish Nest

Premium modular homes platform for Ireland. Phase 1 establishes the Next.js
application shell, brand system, layout, reusable primitives, and seeded mock
homepage data. Phase 2 adds the full public homepage sequence, collection page,
dynamic product detail pages, and replaceable placeholder visual assets. Phase
3 adds the Supabase database foundation, row-level security, typed clients,
validation schemas, and the private admin workspace. Phase 4 connects public
forms to Supabase-backed lead, consultation, feasibility, and reservation
workflows. Phase 5 adds the lightweight 3D explorer and product walkthrough
experience. Phase 6 adds SEO file conventions, public content-route coverage,
error/loading states, deployment notes, and smoke-test support.

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

## Phase 4 Additions

- `/request-a-quote`, `/book`, `/reserve`, `/reserve/confirmation`, and
  `/contact` provide public form flows.
- The homepage feasibility section now submits to Supabase through a server
  action instead of a placeholder shell.
- `app/actions/public-leads.ts` validates submissions server-side with Zod and
  inserts through the Supabase anon client, relying on public insert-only RLS.
- `lib/payments/reservation-payment.ts` abstracts the reservation payment
  boundary. The MVP creates `pending_payment` reservations only and never claims
  payment or reservation confirmation.
- `supabase/migrations/202607030002_phase_4_public_flows.sql` adds
  `admin_tasks` so reservation submissions can create a private follow-up task
  when the service-role key is configured.
- Placeholder privacy, terms, and refundable deposit terms pages are available
  for the MVP legal links.

## Phase 5 Additions

- `components/three/` contains a dynamically loaded React Three Fiber explorer,
  procedural modular-home geometry, 3D hotspot buttons, camera transitions, and
  static fallback UI.
- The homepage featured explorer loads the 3D scene only near viewport and uses
  a static image fallback for reduced-motion or missing WebGL support.
- `/homes/[slug]/walkthrough` provides a fullscreen walkthrough entry for every
  seeded product.
- Product detail walkthrough links now point to the dedicated 3D route.

## Phase 6 Additions

- `app/sitemap.ts` and `app/robots.ts` generate sitemap and robots metadata.
- Root metadata includes canonical, Open Graph, Twitter, and robots fields.
- Public navigation routes now resolve: `/how-it-works`,
  `/land-and-site-guide`, `/journal`, and `/about`.
- Global `loading`, `error`, and `not-found` states provide accessible fallback
  UI.
- `DEPLOYMENT.md` documents environment variables, Supabase migration order,
  validation commands, and content-positioning constraints.
- `scripts/phase-6/smoke-routes.mjs` checks core public routes, SEO endpoints,
  and legal pages against a running local server.

## Product Notes

All product and feasibility content is placeholder content. Public supplier
names, pricing, delivery timelines, planning outcomes, and final specifications
must be confirmed in later phases through the admin and Supabase workflow.
