import Link from "next/link";
import { productSummaries } from "@/lib/mock-data";

const toneClass = {
  forest: "bg-forest text-ivory",
  stone: "bg-stone text-slate-950",
  moss: "bg-moss text-ivory",
  slate: "bg-slate-950 text-ivory",
};

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
          {productSummaries.map((product) => (
            <article
              className="group overflow-hidden border border-slate-950/10 bg-ivory"
              key={product.slug}
            >
              <div
                className={`relative aspect-[4/3] ${toneClass[product.tone]}`}
              >
                <div className="absolute inset-5 border border-current/20 transition duration-500 group-hover:inset-4" />
                <div className="absolute bottom-8 left-8 right-8 h-20 border border-current/25 bg-current/10 [clip-path:polygon(0_42%,22%_12%,76%_12%,100%_42%,100%_100%,0_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
                <p className="absolute left-6 top-6 text-xs font-bold uppercase tracking-[0.16em]">
                  {product.category}
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl">{product.name}</h3>
                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-950/72">
                  <div>
                    <dt className="font-semibold text-slate-950">Size</dt>
                    <dd className="mt-1">{product.size}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-950">Bedrooms</dt>
                    <dd className="mt-1">{product.bedrooms}</dd>
                  </div>
                </dl>
                <p className="mt-5 text-sm leading-6 text-slate-950/65">
                  {product.deliveryConcept}
                </p>
                <Link
                  className="mt-6 inline-flex text-sm font-semibold underline decoration-slate-950/25 transition hover:decoration-slate-950"
                  href={`/request-a-quote?home=${product.slug}`}
                >
                  Request a Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
