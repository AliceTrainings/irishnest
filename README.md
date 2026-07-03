# Irish Nest

Premium modular homes platform for Ireland. Phase 1 establishes the Next.js
application shell, brand system, layout, reusable primitives, and seeded mock
homepage data.

## Stack

- Next.js App Router, TypeScript, React
- Tailwind CSS v4 tokens in `app/globals.css`
- Supabase client dependency prepared for later phases
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

## Product Notes

All product and feasibility content is placeholder content. Public supplier
names, pricing, delivery timelines, planning outcomes, and final specifications
must be confirmed in later phases through the admin and Supabase workflow.
