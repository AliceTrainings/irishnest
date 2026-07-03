import Link from "next/link";
import { ProductCard } from "@/components/ui/product-card";
import { productSummaries } from "@/lib/mock-data";

export function CollectionPreview() {
  return (
    <section className="bg-warm-white px-5 py-24 md:px-8" id="collection">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-forest">Curated home collection</p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-none text-balance md:text-6xl">
              Six starting points, ready for real supplier data later.
            </h2>
          </div>
          <Link
            href="/collection"
            className="text-sm font-semibold underline decoration-slate-950/25 transition hover:decoration-slate-950"
          >
            View full collection
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {productSummaries.map((product, index) => (
            <ProductCard
              product={product}
              priority={index < 2}
              key={product.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
