insert into public.product_categories (name, slug, description, sort_order)
values
  ('Garden Rooms', 'garden-rooms', 'Compact garden studios and rooms.', 10),
  ('Studio and Office Pods', 'studio-and-office-pods', 'Focused modular work and retreat spaces.', 20),
  ('One-Bed Homes', 'one-bed-homes', 'Compact one-bedroom homes.', 30),
  ('Two-Bed Homes', 'two-bed-homes', 'Two-bedroom modular home concepts.', 40),
  ('Three-Bed Homes', 'three-bed-homes', 'Family-scale modular home concepts.', 50),
  ('Holiday and Glamping Units', 'holiday-and-glamping-units', 'Guest, retreat, and hospitality-led concepts.', 60)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  sort_order = excluded.sort_order;

insert into public.suppliers (name, contact_name, email, status, notes)
values
  ('Approved Supplier A', 'Procurement Lead', 'supplier-a@example.ie', 'active', 'Placeholder private supplier record. Do not publish publicly.'),
  ('Approved Supplier B', 'Commercial Lead', 'supplier-b@example.ie', 'active', 'Placeholder private supplier record. Do not publish publicly.')
on conflict do nothing;

with category_map as (
  select id, slug from public.product_categories
),
supplier_pick as (
  select id from public.suppliers order by created_at limit 1
)
insert into public.products (
  supplier_id,
  category_id,
  name,
  slug,
  status,
  short_description,
  long_description,
  bedroom_count,
  bathroom_count,
  floor_area_sqm,
  width_m,
  length_m,
  height_m,
  featured,
  included_features,
  optional_upgrades,
  seo_title,
  seo_description
)
values
  (
    (select id from supplier_pick),
    (select id from category_map where slug = 'one-bed-homes'),
    'Rath One-Bed Home',
    'rath-one-bed-home',
    'published',
    'A considered one-bedroom modular home concept.',
    'A modest, warm modular home concept for Irish sites, subject to final supplier confirmation.',
    1,
    1,
    46,
    4.6,
    10.2,
    3.4,
    true,
    '["Kitchen allowance","Bathroom sanitaryware allowance","Warm white lighting"]'::jsonb,
    '["Enhanced kitchen package","Terrace interface","Solar-ready electrical allowance"]'::jsonb,
    'Rath One-Bed Home',
    'One-bedroom curated modular home concept for Ireland.'
  ),
  (
    (select id from supplier_pick),
    (select id from category_map where slug = 'two-bed-homes'),
    'Dun Two-Bed Lodge',
    'dun-two-bed-lodge',
    'published',
    'A generous two-bedroom lodge concept.',
    'A two-bedroom modular lodge concept with central living and a sheltered arrival edge.',
    2,
    1,
    72,
    5.8,
    12.8,
    3.6,
    false,
    '["Kitchen allowance","Bathroom allowance","Internal finish allowance"]'::jsonb,
    '["Second bathroom review","Covered deck interface","Utility storage package"]'::jsonb,
    'Dun Two-Bed Lodge',
    'Two-bedroom curated modular lodge concept for Irish sites.'
  )
on conflict (slug) do update set
  status = excluded.status,
  short_description = excluded.short_description,
  long_description = excluded.long_description,
  bedroom_count = excluded.bedroom_count,
  bathroom_count = excluded.bathroom_count,
  floor_area_sqm = excluded.floor_area_sqm,
  width_m = excluded.width_m,
  length_m = excluded.length_m,
  height_m = excluded.height_m,
  featured = excluded.featured,
  included_features = excluded.included_features,
  optional_upgrades = excluded.optional_upgrades,
  seo_title = excluded.seo_title,
  seo_description = excluded.seo_description;

insert into public.journal_posts (title, slug, excerpt, body, status, published_at)
values
  (
    'How Modular Homes Work in Ireland',
    'how-modular-homes-work-in-ireland',
    'A clear introduction to modular-home procurement, supplier confirmation, and site conversations.',
    '{"blocks":[{"type":"paragraph","text":"Placeholder CMS content for Phase 3."}]}'::jsonb,
    'published',
    now()
  ),
  (
    'Planning Your Site Before You Buy',
    'planning-your-site-before-you-buy',
    'Access, services, orientation, drainage, and professional advice to consider before choosing a home.',
    '{"blocks":[{"type":"paragraph","text":"Placeholder CMS content for Phase 3."}]}'::jsonb,
    'published',
    now()
  ),
  (
    'Choosing the Right Home Size',
    'choosing-the-right-home-size',
    'How to think about floor area, storage, bedrooms, and daily rituals before requesting a quote.',
    '{"blocks":[{"type":"paragraph","text":"Placeholder CMS content for Phase 3."}]}'::jsonb,
    'published',
    now()
  )
on conflict (slug) do update set
  excerpt = excluded.excerpt,
  body = excluded.body,
  status = excluded.status,
  published_at = excluded.published_at;
