import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { HomeExplorer } from "@/components/three/home-explorer";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/mock-data";

type WalkthroughPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: WalkthroughPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Walkthrough Not Found",
    };
  }

  return {
    title: `${product.name} 3D Walkthrough`,
    description:
      "Explore a lightweight procedural 3D walkthrough with hotspot guidance and static fallback support.",
  };
}

export default async function WalkthroughPage({
  params,
}: WalkthroughPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, product.category);

  return (
    <>
      <Navigation />
      <main className="bg-forest-950 text-ivory">
        <section className="px-5 pb-8 pt-28 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow text-brass-300">3D walkthrough</p>
                <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-none text-balance md:text-7xl">
                  {product.name}
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-6 text-stone-200">
                  Explore a lightweight procedural model with guided camera
                  viewpoints. All content remains indicative until consultation
                  and supplier confirmation.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-11 items-center justify-center border border-ivory/20 px-5 text-sm font-semibold text-ivory transition hover:bg-ivory hover:text-forest"
                  href={`/homes/${product.slug}`}
                >
                  Product details
                </Link>
                <Link
                  className="inline-flex min-h-11 items-center justify-center bg-brass-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-brass-300"
                  href={`/request-a-quote?home=${product.slug}`}
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="border border-ivory/15 bg-ivory/[0.04] p-3">
              <HomeExplorer product={product} fullscreen />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-brass-300">Continue exploring</p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {relatedProducts.map((related) => (
                <Link
                  className="border border-ivory/15 bg-ivory/[0.04] p-5 transition hover:bg-ivory/[0.08]"
                  href={`/homes/${related.slug}/walkthrough`}
                  key={related.slug}
                >
                  <p className="text-sm font-semibold text-brass-300">
                    {related.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl">{related.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-stone-200">
                    {related.floorArea} · {related.bedrooms}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
