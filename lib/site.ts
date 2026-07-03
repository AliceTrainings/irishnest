export const siteConfig = {
  name: "Irish Nest",
  url: "https://irishnest.ie",
  description: "Thoughtfully curated modular homes for modern Irish living.",
  navItems: [
    { href: "/collection", label: "Collection" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/land-and-site-guide", label: "Land Guide" },
    { href: "/journal", label: "Journal" },
    { href: "/about", label: "About" },
  ],
  ctas: {
    primary: { href: "/collection", label: "Explore the Collection" },
    secondary: { href: "/book", label: "Book a Consultation" },
  },
} as const;
