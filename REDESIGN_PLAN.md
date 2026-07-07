# REDESIGN PLAN

## Files to preserve
*   `app/admin/` (admin dashboard, with minor refinements)
*   `lib/supabase/` (Supabase logic, authentication, database schema, RLS)
*   `lib/validation/` (validation)
*   `app/actions/` (lead workflows, reservation workflow)
*   `public/brand/` (brand assets, but may need updates)
*   `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg` (generic assets, likely preserved)
*   `eslint.config.mjs`, `next.config.ts`, `package-lock.json`, `package.json`, `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json` (project configuration)
*   `README.md`, `DEPLOYMENT.md`, `CLAUDE.md`, `AGENTS.md` (documentation)
*   `app/layout.tsx`, `app/globals.css` (global layout and styling, but will be heavily modified)
*   `app/error.tsx`, `app/loading.tsx`, `app/not-found.tsx` (error/loading pages)
*   `app/robots.ts`, `app/sitemap.ts` (SEO foundation)
*   `app/about/page.tsx`, `app/contact/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/refundable-deposit-terms/page.tsx`, `app/how-it-works/page.tsx`, `app/land-and-site-guide/page.tsx` (static pages, content will be modified, but structure likely preserved)
*   `app/journal/` (journal/blog, likely preserved but content/styling updated)
*   `app/request-a-quote/`, `app/reserve/` (forms and reservation flow, preserved but styling/prefill updated)

## Files to modify
*   `app/page.tsx` (Homepage - rebuild completely)
*   `app/homes/[slug]/page.tsx` (Product detail pages - rebuild completely)
*   `app/collection/page.tsx` (Product collection page - will be replaced by homepage sections or removed/redirected)
*   `components/home/` (all components here will likely be modified or replaced for the homepage rebuild)
*   `components/layout/footer.tsx`, `components/layout/navigation.tsx` (global layout components, will be redesigned)
*   `components/ui/product-card.tsx` (likely removed or heavily modified as "chunky boxed cards" are to be avoided)
*   `components/ui/reveal.tsx` (motion system, will be modified for restrained motion)
*   `components/three/` (generic 3D components, will be disabled/removed unless licensed 3D model is available)
*   `lib/mock-data.ts` (will be updated for the three authorized products)
*   `lib/site.ts`, `lib/utils.ts` (utility functions, may need updates)
*   `public/placeholders/` (placeholder images, will be replaced with authorized product media)
*   `supabase/seed.sql`, `supabase/migrations/` (Supabase data and schema, will need migrations for product data correction)

## Files to remove
*   `app/collection/page.tsx` (if homepage becomes the primary product display)
*   `components/ui/product-card.tsx` (if not used in the new design)
*   `components/three/home-explorer.tsx`, `components/three/procedural-home-scene.tsx` (generic 3D components, to be disabled/removed)
*   Any components related to unapproved product categories or generic placeholders.

## Data migrations required
*   Update product data to exactly three authorized products.
*   Update product categories to only those necessary for the three products.
*   Update supplier record to Home Modular.
*   Enable public supplier disclosure.
*   Remove obsolete categories, supplier records, and mock products.

## Component map for redesigned homepage and product pages

### Homepage:
*   Section 1: Hero (Full viewport image, minimal header, headline, supporting text, CTAs, scroll cue)
*   Section 2: Introduction (Editorial split layout, copy, image, "Discover Irish Nest" link)
*   Section 3: The Collection (Horizontal/editorial grid for three homes, large image, area, bedrooms, price, CTA)
*   Section 4: Designed for Everyday Living (Full-width interior image, editorial copy)
*   Section 5: 45 m² Layout Explorer (Refined tabbed image experience, layout images, descriptions, CTA)
*   Section 6: What Comes With Your Home (Restrained comparison layout, inclusions, link to full specifications)
*   Section 7: Tell Us About Your Site (Full-width background, Eircode feasibility enquiry form)
*   Section 8: How It Works (Simple editorial sequence, numbered typography, thin dividers)
*   Section 9: Final CTA (Headline, "Request a Quote" and "Book a Consultation" buttons)

### Product Detail Page:
*   Full-bleed product hero image
*   Product name, price, area, bedroom count
*   Brief product introduction
*   Large image gallery
*   "Made for living" content section
*   What is included (grouped)
*   Floor plan or layout section
*   Product-specific information
*   Quote CTA
*   Related homes
*   Partner and specification disclaimers
*   Slim sticky side panel (desktop) / Subtle fixed bottom CTA (mobile)

## Risks or assumptions
*   **Risk:** Existing Supabase logic, authentication, database schema, RLS, lead workflows, reservation workflow, SEO foundation, and deployment configuration are complex and tightly coupled. Changes to product data or forms could inadvertently break these.
*   **Risk:** The "authorised Home Modular product information and imagery" might not be readily available or might require significant effort to integrate into the existing media system.
*   **Risk:** Redesigning the motion system to be "restrained and intentional" while retaining Framer Motion requires careful implementation to avoid unintended side effects or performance issues.
*   **Assumption:** The existing media system is robust enough to handle new product imagery and can be easily updated.
*   **Assumption:** The existing form and validation logic can be adapted to the new product scope and prefill requirements without major refactoring.
*   **Assumption:** The "generic 3D components" can be easily disabled or removed without impacting other parts of the application.
*   **Assumption:** The "admin data cleanup and minor dashboard refinement" will not introduce regressions in admin functionality.
