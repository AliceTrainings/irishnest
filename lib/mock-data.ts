export type ProductCategory =
  | "Garden Rooms"
  | "Studio and Office Pods"
  | "One-Bed Homes"
  | "Two-Bed Homes"
  | "Three-Bed Homes"
  | "Holiday and Glamping Units";

export type ProductSummary = {
  name: string;
  slug: string;
  category: ProductCategory;
  size: string;
  bedrooms: string;
  deliveryConcept: string;
  tone: "forest" | "stone" | "moss" | "slate";
};

export const productSummaries: ProductSummary[] = [
  {
    name: "Lark Garden Studio",
    slug: "lark-garden-studio",
    category: "Garden Rooms",
    size: "Approx. 18 sq m",
    bedrooms: "Flexible studio",
    deliveryConcept: "Indicative modular delivery after site review",
    tone: "moss",
  },
  {
    name: "Ash Workspace Pod",
    slug: "ash-workspace-pod",
    category: "Studio and Office Pods",
    size: "Approx. 24 sq m",
    bedrooms: "Work and retreat",
    deliveryConcept: "Subject to access and final supplier confirmation",
    tone: "slate",
  },
  {
    name: "Rath One-Bed Home",
    slug: "rath-one-bed-home",
    category: "One-Bed Homes",
    size: "Approx. 46 sq m",
    bedrooms: "1 bedroom",
    deliveryConcept: "Curated procurement following consultation",
    tone: "forest",
  },
  {
    name: "Dun Two-Bed Lodge",
    slug: "dun-two-bed-lodge",
    category: "Two-Bed Homes",
    size: "Approx. 72 sq m",
    bedrooms: "2 bedrooms",
    deliveryConcept: "Availability confirmed during consultation",
    tone: "stone",
  },
  {
    name: "Meadow Three-Bed Home",
    slug: "meadow-three-bed-home",
    category: "Three-Bed Homes",
    size: "Approx. 104 sq m",
    bedrooms: "3 bedrooms",
    deliveryConcept: "Subject to site assessment and supplier capacity",
    tone: "forest",
  },
  {
    name: "Cove Retreat Unit",
    slug: "cove-retreat-unit",
    category: "Holiday and Glamping Units",
    size: "Approx. 31 sq m",
    bedrooms: "Guest retreat",
    deliveryConcept: "Indicative information only",
    tone: "moss",
  },
];

export const homePrinciples = [
  {
    title: "Curated quality",
    description:
      "A considered collection under the Irish Nest brand, with public supplier names held back until consultation.",
  },
  {
    title: "Transparent guidance",
    description:
      "Clear next steps, careful disclaimers, and no unsupported claims about planning, pricing, or timelines.",
  },
  {
    title: "Designed around your site",
    description:
      "Early conversations focus on access, services, orientation, use case, and the realities of your land.",
  },
  {
    title: "Support to delivery",
    description:
      "Irish Nest acts as your curated modular-home partner from first enquiry through procurement coordination.",
  },
];
