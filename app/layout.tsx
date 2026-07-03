import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://irishnest.ie"),
  title: {
    default: "Irish Nest | Curated Modular Homes in Ireland",
    template: "%s | Irish Nest",
  },
  description:
    "A cinematic digital experience centre for thoughtfully curated modular homes for modern Irish living.",
  openGraph: {
    title: "Irish Nest",
    description: "Thoughtfully curated modular homes for modern Irish living.",
    siteName: "Irish Nest",
    locale: "en_IE",
    type: "website",
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
