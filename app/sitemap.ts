import type { MetadataRoute } from "next";

import { journalPosts, products } from "@/lib/mock-data";
import { siteConfig } from "@/lib/site";

const staticRoutes = [
  "",
  "/collection",
  "/how-it-works",
  "/land-and-site-guide",
  "/journal",
  "/about",
  "/contact",
  "/book",
  "/request-a-quote",
  "/reserve",
  "/privacy",
  "/terms",
  "/refundable-deposit-terms",
];

const staticRouteFrequency: Record<string, "weekly" | "monthly"> = {
  "": "weekly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: staticRouteFrequency[route] ?? "monthly",
      priority: route === "" ? 1 : 0.7,
    })),
    ...products.flatMap((product) => [
      {
        url: `${siteConfig.url}/homes/${product.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: product.status === "featured" ? 0.9 : 0.75,
      },
      {
        url: `${siteConfig.url}/homes/${product.slug}/walkthrough`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.55,
      },
    ]),
    ...journalPosts.map((post) => ({
      url: `${siteConfig.url}/journal/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
