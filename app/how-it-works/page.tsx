import type { Metadata } from "next";

import {
  EditorialGrid,
  PublicPageShell,
} from "@/components/content/public-page-shell";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Irish Nest guides modular-home discovery, site conversations, reservations, procurement, and delivery coordination.",
};

const steps = [
  {
    title: "Discover",
    body: "Explore curated modular-home concepts and compare indicative size, layout, and use cases.",
  },
  {
    title: "Explore",
    body: "Review product pages, indicative finishes, floor plans, and 3D walkthroughs before submitting an enquiry.",
  },
  {
    title: "Discuss your site",
    body: "Share Eircode, access, services, timeline, and constraints so Irish Nest can prepare the right follow-up.",
  },
  {
    title: "Reserve carefully",
    body: "A reservation request stays pending until payment is actually received and next steps are confirmed.",
  },
  {
    title: "Procure and deliver",
    body: "Irish Nest coordinates with approved suppliers after consultation and final supplier confirmation.",
  },
];

export default function HowItWorksPage() {
  return (
    <PublicPageShell
      eyebrow="Process"
      title="A clear path from first enquiry to supplier-confirmed next steps."
      description="Irish Nest is designed to make modular-home decisions calmer and better informed without overstating planning, pricing, or delivery certainty."
    >
      <EditorialGrid items={steps} />
    </PublicPageShell>
  );
}
