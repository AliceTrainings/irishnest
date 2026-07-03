import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Irish Nest | Curated Modular Homes in Ireland",
    template: "%s | Irish Nest",
  },
  description:
    "A cinematic digital experience centre for thoughtfully curated modular homes for modern Irish living.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Irish Nest",
    description: "Thoughtfully curated modular homes for modern Irish living.",
    url: siteConfig.url,
    siteName: "Irish Nest",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "/placeholders/rath-one-bed-home.svg",
        width: 1200,
        height: 630,
        alt: "Irish Nest modular home placeholder render",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Irish Nest",
    description: siteConfig.description,
    images: ["/placeholders/rath-one-bed-home.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-ivory text-slate-950">{children}</body>
    </html>
  );
}
