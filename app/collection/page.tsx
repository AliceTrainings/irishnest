import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { ProductCard } from "@/components/ui/product-card";
import { productCategories, products } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Explore the Irish Nest curated modular home collection, with indicative concept specifications subject to supplier confirmation.",
};

export default function CollectionPage() {
  return (
    <>
      <Navigation />
      <main className="bg-ivory">
        <section className="px-5 pb-16 pt-36 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-forest">Collection</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.58fr] lg:items-end">
              <h1 className="font-serif text-6xl leading-[0.92] text-balance md:text-8xl">
                Curated modular homes for Irish sites and modern lives.
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-950/70">
                The catalogue is intentionally indicative. Final specifications,
                pricing, availability, site requirements, and delivery timelines
                are confirmed during consultation.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {productCategories.map((category) => (
                <Link
                  className="border border-slate-950/12 bg-warm-white px-4 py-2 text-sm font-semibold transition hover:border-forest hover:text-forest"
                  href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
                  key={category}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="px-5 pb-24 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <div
                id={product.category.toLowerCase().replaceAll(" ", "-")}
                key={product.slug}
              >
                <ProductCard product={product} priority={index < 3} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
