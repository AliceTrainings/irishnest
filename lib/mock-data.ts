export type ProductCategory =
  | "Garden Rooms"
  | "Studio and Office Pods"
  | "One-Bed Homes"
  | "Two-Bed Homes"
  | "Three-Bed Homes"
  | "Holiday and Glamping Units";

export type ProductTone = "forest" | "stone" | "moss" | "slate" | "brass";

export type ProductHotspot = {
  title: string;
  label: string;
  description: string;
  material: string;
};

export type Product = {
  name: string;
  slug: string;
  category: ProductCategory;
  status: "featured" | "available" | "preview";
  shortDescription: string;
  longDescription: string;
  size: string;
  bedrooms: string;
  bedroomCount: number;
  bathrooms: string;
  bathroomCount: number;
  floorArea: string;
  dimensions: {
    width: string;
    length: string;
    height: string;
  };
  deliveryConcept: string;
  tone: ProductTone;
  heroImage: string;
  gallery: string[];
  floorPlan: string;
  keyFeatures: string[];
  includedFittings: string[];
  optionalUpgrades: string[];
  specifications: { label: string; value: string }[];
  hotspots: ProductHotspot[];
  faq: { question: string; answer: string }[];
  seoDescription: string;
};

const commonFaq = [
  {
    question: "Is the information final?",
    answer:
      "No. All dimensions, finishes, availability, pricing, site requirements, and delivery timelines are indicative until consultation and final supplier confirmation.",
  },
  {
    question: "Does Irish Nest own the factory or stock?",
    answer:
      "No. Irish Nest is a curated modular-home partner. Approved suppliers are managed through the procurement process after the order path is agreed.",
  },
  {
    question: "Can this replace planning advice?",
    answer:
      "No. Planning, engineering, access, foundations, services, and compliance questions require appropriate professional review for your site.",
  },
];

export const products: Product[] = [
  {
    name: "Lark Garden Studio",
    slug: "lark-garden-studio",
    category: "Garden Rooms",
    status: "available",
    shortDescription:
      "A compact insulated garden room for quiet work, creative practice, or a refined guest-ready retreat.",
    longDescription:
      "Lark is a calm single-volume studio concept designed for gardens where every metre matters. The placeholder specification favours warm timber, generous glazing, and a simple services strategy that can be refined during consultation.",
    size: "Approx. 18 sq m",
    bedrooms: "Flexible studio",
    bedroomCount: 0,
    bathrooms: "Optional WC",
    bathroomCount: 0,
    floorArea: "18 sq m",
    dimensions: { width: "3.2 m", length: "5.8 m", height: "3.1 m" },
    deliveryConcept: "Indicative modular delivery after site review",
    tone: "moss",
    heroImage: "/placeholders/lark-garden-studio.svg",
    gallery: [
      "/placeholders/lark-garden-studio.svg",
      "/placeholders/interior-workspace.svg",
      "/placeholders/interior-living.svg",
    ],
    floorPlan: "/placeholders/floorplan-studio.svg",
    keyFeatures: [
      "Compact studio footprint",
      "Full-height garden-facing glazing",
      "Timber-lined interior concept",
      "Optional compact WC configuration",
    ],
    includedFittings: [
      "Insulated envelope concept",
      "Pre-finished internal wall lining",
      "Warm white lighting allowance",
      "External cladding subject to supplier range",
    ],
    optionalUpgrades: [
      "Acoustic wall lining",
      "Integrated desk joinery",
      "Compact WC and basin",
      "Enhanced exterior lighting",
    ],
    specifications: [
      { label: "Use case", value: "Garden room, studio, workspace" },
      { label: "Indicative footprint", value: "3.2 m x 5.8 m" },
      { label: "Structure", value: "Supplier-confirmed modular timber system" },
      { label: "Services", value: "Electrical fit-out; plumbing optional" },
    ],
    hotspots: [
      {
        title: "Exterior cladding",
        label: "Cladding",
        description:
          "A restrained timber or composite cladding direction, selected after supplier and maintenance review.",
        material: "Weathered timber",
      },
      {
        title: "Workspace wall",
        label: "Work",
        description:
          "A quiet wall for desk, shelving, and integrated task lighting.",
        material: "Oak, linen, matte black",
      },
      {
        title: "Garden glazing",
        label: "Light",
        description:
          "Large glazing is positioned to frame garden views while managing privacy and solar gain.",
        material: "Warm white, low-glare glass",
      },
    ],
    faq: commonFaq,
    seoDescription:
      "Compact curated garden studio concept for Irish homes, subject to site assessment and final supplier confirmation.",
  },
  {
    name: "Ash Workspace Pod",
    slug: "ash-workspace-pod",
    category: "Studio and Office Pods",
    status: "available",
    shortDescription:
      "A focused office pod concept with a deeper plan for work, equipment, and short-stay flexibility.",
    longDescription:
      "Ash is shaped for people who need a separate work setting without losing the texture of home. The placeholder layout allows a generous desk wall, a relaxed reading corner, and an optional compact services zone.",
    size: "Approx. 24 sq m",
    bedrooms: "Work and retreat",
    bedroomCount: 0,
    bathrooms: "Optional WC",
    bathroomCount: 0,
    floorArea: "24 sq m",
    dimensions: { width: "3.8 m", length: "6.4 m", height: "3.2 m" },
    deliveryConcept: "Subject to access and final supplier confirmation",
    tone: "slate",
    heroImage: "/placeholders/ash-workspace-pod.svg",
    gallery: [
      "/placeholders/ash-workspace-pod.svg",
      "/placeholders/interior-workspace.svg",
      "/placeholders/interior-bathroom.svg",
    ],
    floorPlan: "/placeholders/floorplan-studio.svg",
    keyFeatures: [
      "Separate work and pause zones",
      "Optional services core",
      "Deep window reveal concept",
      "Durable floor finish allowance",
    ],
    includedFittings: [
      "High-performance wall and roof concept",
      "Electrical and data routes subject to supplier design",
      "Interior lining and flooring allowance",
      "External door and glazing package",
    ],
    optionalUpgrades: [
      "Data and media wall",
      "Custom joinery package",
      "Compact bathroom pod",
      "External canopy",
    ],
    specifications: [
      { label: "Use case", value: "Office pod, studio, retreat" },
      { label: "Indicative footprint", value: "3.8 m x 6.4 m" },
      { label: "Structure", value: "Supplier-confirmed modular system" },
      { label: "Services", value: "Electrical fit-out; plumbing optional" },
    ],
    hotspots: [
      {
        title: "Desk wall",
        label: "Work",
        description:
          "A long wall can support desk, storage, and a quiet video-call backdrop.",
        material: "Oak veneer, linen pinboard",
      },
      {
        title: "Roof overhang",
        label: "Shelter",
        description:
          "A simple canopy concept improves arrival, shade, and rain protection.",
        material: "Slate fascia, timber soffit",
      },
      {
        title: "Optional WC",
        label: "Services",
        description:
          "A compact services zone can be reviewed where drainage and water connections are practical.",
        material: "Stone tile, matte black fittings",
      },
    ],
    faq: commonFaq,
    seoDescription:
      "Curated modular workspace pod concept for gardens and rural sites in Ireland.",
  },
  {
    name: "Rath One-Bed Home",
    slug: "rath-one-bed-home",
    category: "One-Bed Homes",
    status: "featured",
    shortDescription:
      "A considered one-bedroom home concept with a bright living space, efficient kitchen, and calm sleeping suite.",
    longDescription:
      "Rath is the Phase 2 flagship mock home. It is designed as a modest, warm, modern modular home for downsizing, family land, or guest accommodation, subject to site assessment and final supplier confirmation.",
    size: "Approx. 46 sq m",
    bedrooms: "1 bedroom",
    bedroomCount: 1,
    bathrooms: "1 bathroom",
    bathroomCount: 1,
    floorArea: "46 sq m",
    dimensions: { width: "4.6 m", length: "10.2 m", height: "3.4 m" },
    deliveryConcept: "Curated procurement following consultation",
    tone: "forest",
    heroImage: "/placeholders/rath-one-bed-home.svg",
    gallery: [
      "/placeholders/rath-one-bed-home.svg",
      "/placeholders/interior-kitchen.svg",
      "/placeholders/interior-living.svg",
      "/placeholders/interior-bedroom.svg",
      "/placeholders/interior-bathroom.svg",
    ],
    floorPlan: "/placeholders/floorplan-one-bed.svg",
    keyFeatures: [
      "Open living and kitchen zone",
      "Separate double bedroom",
      "Compact full bathroom concept",
      "Large landscape window",
      "Energy-efficient fittings subject to supplier range",
    ],
    includedFittings: [
      "Kitchen allowance with integrated storage concept",
      "Bathroom sanitaryware allowance",
      "Internal doors, trims, and warm white lighting",
      "Insulated wall, roof, and floor system subject to final supplier design",
    ],
    optionalUpgrades: [
      "Enhanced kitchen package",
      "Timber terrace interface",
      "Upgraded cladding range",
      "Solar-ready electrical allowance",
    ],
    specifications: [
      { label: "Use case", value: "One-bedroom modular home" },
      { label: "Indicative footprint", value: "4.6 m x 10.2 m" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
      {
        label: "Delivery",
        value: "Subject to site access and supplier confirmation",
      },
    ],
    hotspots: [
      {
        title: "Exterior cladding",
        label: "Cladding",
        description:
          "A calm exterior palette with timber, muted stone, or composite cladding options reviewed during consultation.",
        material: "Weathered timber, muted moss",
      },
      {
        title: "Living area",
        label: "Living",
        description:
          "The main room is planned around a large view, low storage, and a warm seating arrangement.",
        material: "Linen, oak, wool",
      },
      {
        title: "Kitchen",
        label: "Kitchen",
        description:
          "A compact linear kitchen concept keeps circulation clear and supports everyday cooking.",
        material: "Oak, stone, warm white",
      },
      {
        title: "Bedroom",
        label: "Bedroom",
        description:
          "A quiet double bedroom with space for wardrobes and soft, low-glare lighting.",
        material: "Linen, oak, brushed brass",
      },
      {
        title: "Bathroom",
        label: "Bath",
        description:
          "A full compact bathroom concept with durable surfaces and simple maintenance.",
        material: "Stone tile, matte black",
      },
      {
        title: "Energy-efficient fittings",
        label: "Efficiency",
        description:
          "Fittings and performance details are supplier-specific and confirmed during consultation.",
        material: "Low-energy lighting, insulated envelope",
      },
    ],
    faq: commonFaq,
    seoDescription:
      "Rath is a one-bedroom curated modular home concept for Ireland, with final details confirmed during consultation.",
  },
  {
    name: "Dun Two-Bed Lodge",
    slug: "dun-two-bed-lodge",
    category: "Two-Bed Homes",
    status: "available",
    shortDescription:
      "A generous two-bedroom lodge concept with a social kitchen and a sheltered threshold.",
    longDescription:
      "Dun is designed around a central living space and two private rooms, making it suitable for family land, guest accommodation, or compact full-time living where the site supports it.",
    size: "Approx. 72 sq m",
    bedrooms: "2 bedrooms",
    bedroomCount: 2,
    bathrooms: "1 bathroom",
    bathroomCount: 1,
    floorArea: "72 sq m",
    dimensions: { width: "5.8 m", length: "12.8 m", height: "3.6 m" },
    deliveryConcept: "Availability confirmed during consultation",
    tone: "stone",
    heroImage: "/placeholders/dun-two-bed-lodge.svg",
    gallery: [
      "/placeholders/dun-two-bed-lodge.svg",
      "/placeholders/interior-kitchen.svg",
      "/placeholders/interior-bedroom.svg",
    ],
    floorPlan: "/placeholders/floorplan-two-bed.svg",
    keyFeatures: [
      "Two-bedroom layout concept",
      "Central living and kitchen space",
      "Sheltered arrival edge",
      "Separate storage allowance",
    ],
    includedFittings: [
      "Kitchen and bathroom allowance",
      "Internal lining and flooring concept",
      "External doors and windows subject to supplier range",
      "Heating and ventilation strategy to be confirmed",
    ],
    optionalUpgrades: [
      "Second bathroom review",
      "Covered deck interface",
      "Enhanced glazing package",
      "Utility storage package",
    ],
    specifications: [
      { label: "Use case", value: "Two-bedroom modular lodge" },
      { label: "Indicative footprint", value: "5.8 m x 12.8 m" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "1" },
    ],
    hotspots: [
      {
        title: "Sheltered entrance",
        label: "Arrival",
        description:
          "A covered threshold concept protects the entry and gives the home a grounded presence.",
        material: "Slate, timber soffit",
      },
      {
        title: "Social kitchen",
        label: "Kitchen",
        description:
          "The kitchen sits close to the living space for a compact but social plan.",
        material: "Stone worktop, oak fronts",
      },
      {
        title: "Twin sleeping rooms",
        label: "Bedrooms",
        description:
          "Two private rooms can support family, guests, or a separate study depending on the final layout.",
        material: "Linen, warm white",
      },
    ],
    faq: commonFaq,
    seoDescription:
      "Two-bedroom curated modular lodge concept for Irish sites, subject to consultation.",
  },
  {
    name: "Meadow Three-Bed Home",
    slug: "meadow-three-bed-home",
    category: "Three-Bed Homes",
    status: "preview",
    shortDescription:
      "A larger family-scale modular home concept with a long living edge and practical storage.",
    longDescription:
      "Meadow is a family-scale placeholder concept that explores a broader modular footprint, with three bedrooms, a practical services zone, and an open living space oriented to landscape.",
    size: "Approx. 104 sq m",
    bedrooms: "3 bedrooms",
    bedroomCount: 3,
    bathrooms: "2 bathrooms",
    bathroomCount: 2,
    floorArea: "104 sq m",
    dimensions: { width: "7.2 m", length: "15.4 m", height: "3.8 m" },
    deliveryConcept: "Subject to site assessment and supplier capacity",
    tone: "forest",
    heroImage: "/placeholders/meadow-three-bed-home.svg",
    gallery: [
      "/placeholders/meadow-three-bed-home.svg",
      "/placeholders/interior-living.svg",
      "/placeholders/interior-kitchen.svg",
      "/placeholders/interior-bedroom.svg",
    ],
    floorPlan: "/placeholders/floorplan-two-bed.svg",
    keyFeatures: [
      "Three-bedroom family plan concept",
      "Open living edge",
      "Storage and services zone",
      "Optional utility review",
    ],
    includedFittings: [
      "Kitchen, bathroom, and internal finish allowance",
      "Window and door package subject to supplier range",
      "Insulated modular envelope concept",
      "Lighting and electrical allowance",
    ],
    optionalUpgrades: [
      "Utility room package",
      "Enhanced facade package",
      "Additional bathroom review",
      "Terrace and landscape interface",
    ],
    specifications: [
      { label: "Use case", value: "Three-bedroom modular home" },
      { label: "Indicative footprint", value: "7.2 m x 15.4 m" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "2" },
    ],
    hotspots: [
      {
        title: "Landscape edge",
        label: "View",
        description:
          "The long living edge is intended to orient toward the best light and view, where the site permits.",
        material: "Glass, timber, stone",
      },
      {
        title: "Family storage",
        label: "Storage",
        description:
          "Practical storage can be reviewed early so the home remains calm in daily use.",
        material: "Oak, matte white",
      },
      {
        title: "Main bedroom",
        label: "Suite",
        description:
          "The main sleeping room can be configured for privacy and morning light.",
        material: "Linen, brass, warm white",
      },
    ],
    faq: commonFaq,
    seoDescription:
      "Three-bedroom curated modular family home concept for Ireland.",
  },
  {
    name: "Cove Retreat Unit",
    slug: "cove-retreat-unit",
    category: "Holiday and Glamping Units",
    status: "available",
    shortDescription:
      "A compact hospitality-minded retreat concept for short stays, guest use, or landscape-led escapes.",
    longDescription:
      "Cove is a compact retreat concept with a bedroom nook, small washroom, and a warm interior palette. It is intended as a starting point for consultation, not a final hospitality or planning specification.",
    size: "Approx. 31 sq m",
    bedrooms: "Guest retreat",
    bedroomCount: 1,
    bathrooms: "1 bathroom",
    bathroomCount: 1,
    floorArea: "31 sq m",
    dimensions: { width: "4.1 m", length: "7.6 m", height: "3.4 m" },
    deliveryConcept: "Indicative information only",
    tone: "brass",
    heroImage: "/placeholders/cove-retreat-unit.svg",
    gallery: [
      "/placeholders/cove-retreat-unit.svg",
      "/placeholders/interior-bedroom.svg",
      "/placeholders/interior-bathroom.svg",
    ],
    floorPlan: "/placeholders/floorplan-one-bed.svg",
    keyFeatures: [
      "Compact retreat layout",
      "Sleeping nook and washroom",
      "Warm hospitality palette",
      "Landscape-facing glazing concept",
    ],
    includedFittings: [
      "Compact bathroom allowance",
      "Interior lining and lighting concept",
      "External cladding subject to supplier range",
      "Glazing package subject to final design",
    ],
    optionalUpgrades: [
      "Hospitality durability package",
      "Outdoor shower review",
      "Compact kitchenette",
      "Enhanced entry deck",
    ],
    specifications: [
      { label: "Use case", value: "Guest retreat, holiday unit" },
      { label: "Indicative footprint", value: "4.1 m x 7.6 m" },
      { label: "Bedrooms", value: "1" },
      { label: "Bathrooms", value: "1" },
    ],
    hotspots: [
      {
        title: "Retreat glazing",
        label: "View",
        description:
          "The main opening is positioned to create a strong landscape connection.",
        material: "Glass, warm timber",
      },
      {
        title: "Sleeping nook",
        label: "Sleep",
        description:
          "A compact sleeping zone can be made calm with integrated storage and soft lighting.",
        material: "Linen, oak",
      },
      {
        title: "Washroom",
        label: "Bath",
        description:
          "A compact washroom concept supports short stays while keeping the plan efficient.",
        material: "Stone, matte black",
      },
    ],
    faq: commonFaq,
    seoDescription:
      "Compact curated retreat and glamping unit concept for Irish hospitality and guest use.",
  },
];

export const productSummaries = products;

export const productCategories: ProductCategory[] = [
  "Garden Rooms",
  "Studio and Office Pods",
  "One-Bed Homes",
  "Two-Bed Homes",
  "Three-Bed Homes",
  "Holiday and Glamping Units",
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

export const processSteps = [
  {
    title: "Discover",
    description:
      "Explore the curated collection and note the homes that fit your intended use.",
  },
  {
    title: "Explore",
    description:
      "Compare layouts, sizes, finishes, and placeholder options before a formal quote.",
  },
  {
    title: "Discuss your site",
    description:
      "Share your Eircode, access context, services, timeline, and planning questions.",
  },
  {
    title: "Reserve your home",
    description:
      "A refundable deposit can create a pending reservation once payment is later integrated.",
  },
  {
    title: "Procure and deliver",
    description:
      "Irish Nest coordinates approved supplier procurement after final confirmation.",
  },
];

export const interiorStories = [
  {
    title: "Kitchen",
    material: "Oak, stone, warm white",
    image: "/placeholders/interior-kitchen.svg",
  },
  {
    title: "Living",
    material: "Linen, wool, brushed brass",
    image: "/placeholders/interior-living.svg",
  },
  {
    title: "Bedroom",
    material: "Soft linen, oak, muted moss",
    image: "/placeholders/interior-bedroom.svg",
  },
  {
    title: "Bathroom",
    material: "Stone, matte black, warm white",
    image: "/placeholders/interior-bathroom.svg",
  },
  {
    title: "Workspace",
    material: "Oak, linen, charcoal slate",
    image: "/placeholders/interior-workspace.svg",
  },
];

export const journalPosts = [
  {
    title: "How Modular Homes Work in Ireland",
    slug: "how-modular-homes-work-in-ireland",
    excerpt:
      "A clear introduction to modular-home procurement, supplier confirmation, and site conversations.",
    category: "Guide",
  },
  {
    title: "Planning Your Site Before You Buy",
    slug: "planning-your-site-before-you-buy",
    excerpt:
      "Access, services, orientation, drainage, and professional advice to consider before choosing a home.",
    category: "Land",
  },
  {
    title: "Choosing the Right Home Size",
    slug: "choosing-the-right-home-size",
    excerpt:
      "How to think about floor area, storage, bedrooms, and daily rituals before requesting a quote.",
    category: "Collection",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string, category: ProductCategory) {
  return products
    .filter((product) => product.slug !== slug && product.category !== category)
    .slice(0, 3);
}
