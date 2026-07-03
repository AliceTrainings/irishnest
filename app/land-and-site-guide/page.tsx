import type { Metadata } from "next";

import {
  EditorialGrid,
  PublicPageShell,
} from "@/components/content/public-page-shell";

export const metadata: Metadata = {
  title: "Land and Site Guide",
  description:
    "Initial land and site considerations before exploring curated modular homes in Ireland.",
};

const items = [
  {
    title: "Access",
    body: "Road width, turning, crane or transport access, gradients, and overhead constraints can all affect feasibility.",
  },
  {
    title: "Services",
    body: "Water, wastewater, electricity, drainage, and broadband routes should be reviewed before treating any concept as final.",
  },
  {
    title: "Planning",
    body: "Planning requirements vary by site and proposal. Irish Nest information is not a substitute for professional advice.",
  },
  {
    title: "Ground conditions",
    body: "Foundations, levels, drainage, exposure, and site preparation require appropriate technical review.",
  },
];

export default function LandGuidePage() {
  return (
    <PublicPageShell
      eyebrow="Land guide"
      title="Start with site realities before choosing a home."
      description="This guide is an initial orientation only. Final planning, engineering, access, and services decisions need proper professional review."
    >
      <EditorialGrid items={items} />
    </PublicPageShell>
  );
}
