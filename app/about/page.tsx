import type { Metadata } from "next";

import {
  EditorialGrid,
  PublicPageShell,
} from "@/components/content/public-page-shell";

export const metadata: Metadata = {
  title: "About Irish Nest",
  description:
    "About Irish Nest, a curated modular-home partner for modern Irish living.",
};

const items = [
  {
    title: "Curated, not generic",
    body: "Irish Nest presents a focused modular-home collection and keeps supplier selection private during the MVP.",
  },
  {
    title: "Guidance before certainty",
    body: "Every product detail remains indicative until consultation, site assessment, and supplier confirmation.",
  },
  {
    title: "Built for replacement",
    body: "Images, floor plans, copy, dimensions, and product records are structured so the admin system can replace placeholder content.",
  },
  {
    title: "Irish context",
    body: "The experience is shaped around Irish sites, countryside architecture, practical procurement, and careful language.",
  },
];

export default function AboutPage() {
  return (
    <PublicPageShell
      eyebrow="About"
      title="A curated modular-home partner for careful decisions."
      description="Irish Nest does not present itself as a factory or inventory owner. It helps customers explore, enquire, reserve carefully, and move toward supplier-confirmed procurement."
    >
      <EditorialGrid items={items} />
    </PublicPageShell>
  );
}
