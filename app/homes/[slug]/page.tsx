import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bath, BedDouble, Box, House, Maximize2, Ruler } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { ProductCard } from "@/components/ui/product-card";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/mock-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Home Not Found",
    };
  }

  return {
    title: product.name,
    description: product.seoDescription,
    openGraph: {
      title: `${product.name} | Irish Nest`,
      description: product.seoDescription,
      images: [{ url: product.heroImage }],
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, product.category);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    category: product.category,
    description: product.seoDescription,
    brand: {
      "@type": "Brand",
      name: "Irish Nest",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/PreOrder",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        description:
          "Pricing is indicative only and confirmed during consultation.",
      },
    },
  };

  return (
    <>
      <Navigation />
      <main className="bg-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <section className="relative min-h-[92vh] overflow-hidden px-5 pb-12 pt-32 text-ivory md:px-8">
          <Image
            className="absolute inset-0 size-full object-cover"
            src={product.heroImage}
            alt=""
            width={1600}
            height={1100}
            priority
          />
          <div className="absolute inset-0 bg-forest-950/50" />
          <div className="grain-overlay" />
          <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-end">
            <p className="eyebrow text-brass-300">{product.category}</p>
            <h1 className="mt-5 max-w-5xl font-serif text-6xl leading-[0.9] text-balance md:text-8xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
              {product.shortDescription}
            </p>
            <dl className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Maximize2, "Floor area", product.floorArea],
                [
                  Ruler,
                  "Dimensions",
                  `${product.dimensions.width} x ${product.dimensions.length}`,
                ],
                [BedDouble, "Bedrooms", product.bedrooms],
                [Bath, "Bathrooms", product.bathrooms],
              ].map(([Icon, label, value]) => (
                <div
                  className="border border-ivory/20 bg-forest-950/45 p-4 backdrop-blur"
                  key={label as string}
                >
                  <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brass-300">
                    <Icon aria-hidden="true" size={16} />
                    {label as string}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold">
                    {value as string}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_360px]">
            <article>
              <p className="eyebrow text-forest">Overview</p>
              <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-none text-balance md:text-6xl">
                A curated starting point, ready for consultation.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-950/72">
                {product.longDescription}
              </p>
              <p className="mt-6 max-w-3xl border-l-2 border-brass-400 bg-warm-white p-5 text-sm font-semibold leading-6 text-slate-950/75">
                Final specifications, pricing, availability, site requirements
                and delivery timelines are confirmed during consultation.
              </p>

              <div className="mt-12 grid gap-4 md:grid-cols-2">
                {product.keyFeatures.map((feature) => (
                  <div
                    className="flex gap-3 border border-slate-950/10 bg-warm-white p-4 text-sm font-semibold"
                    key={feature}
                  >
                    <House
                      className="mt-0.5 shrink-0 text-forest"
                      aria-hidden="true"
                      size={18}
                    />
                    {feature}
                  </div>
                ))}
              </div>
            </article>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-slate-950/10 bg-warm-white p-5 shadow-xl shadow-slate-950/5">
                <p className="eyebrow text-forest">Enquire</p>
                <h2 className="mt-4 font-serif text-3xl leading-tight">
                  Discuss {product.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-950/65">
                  Product details prefill the lead form. No reservation is
                  confirmed until payment is actually received.
                </p>
                <div className="mt-6 grid gap-3">
                  <ButtonLink href={`/request-a-quote?home=${product.slug}`}>
                    Request a Quote
                  </ButtonLink>
                  <ButtonLink
                    href={`/book?home=${product.slug}`}
                    variant="secondary"
                  >
                    Book a Consultation
                  </ButtonLink>
                  <ButtonLink
                    href={`/reserve?home=${product.slug}`}
                    variant="secondary"
                  >
                    Reserve with Refundable Deposit
                  </ButtonLink>
                </div>
                <div className="mt-6 border-t border-slate-950/10 pt-5 text-xs leading-5 text-slate-950/58">
                  Subject to site assessment and final supplier confirmation.
                  See refundable deposit terms before reserving.
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-warm-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border border-slate-950/10 bg-ivory p-3">
                <Image
                  className="aspect-[7/5] w-full object-cover"
                  src={product.gallery[1] ?? product.heroImage}
                  alt=""
                  width={1100}
                  height={785}
                  loading="lazy"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {product.gallery.slice(2, 4).map((image) => (
                  <div
                    className="border border-slate-950/10 bg-ivory p-3"
                    key={image}
                  >
                    <Image
                      className="aspect-[7/5] w-full object-cover"
                      src={image}
                      alt=""
                      width={700}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8" id="walkthrough">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="eyebrow text-forest">Floor plan and walkthrough</p>
              <h2 className="mt-5 font-serif text-4xl leading-none text-balance md:text-6xl">
                Plan logic first. Full 3D experience next.
              </h2>
              <p className="mt-6 text-base leading-7 text-slate-950/70">
                This entry point prepares the product page for the Phase 5 React
                Three Fiber walkthrough, hotspot camera moves, and static
                fallback mode.
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-slate-950/25 transition hover:decoration-slate-950"
                href={`/homes/${product.slug}/walkthrough`}
              >
                Open 3D walkthrough
                <Box aria-hidden="true" size={16} />
              </Link>
            </div>
            <div className="border border-slate-950/10 bg-warm-white p-3">
                  <Image
                    className="aspect-[10/7] w-full object-cover"
                    src={product.floorPlan}
                    alt={`Indicative floor plan for ${product.name}`}
                    width={1000}
                    height={700}
                    loading="lazy"
                  />
            </div>
          </div>
        </section>

        <section className="bg-forest-950 px-5 py-20 text-ivory md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow text-brass-300">Specifications</p>
              <h2 className="mt-5 font-serif text-4xl leading-none text-balance md:text-6xl">
                Indicative details, clearly separated from final confirmation.
              </h2>
            </div>
            <div className="space-y-3">
              {[
                [
                  "Specifications",
                  product.specifications.map(
                    (item) => `${item.label}: ${item.value}`,
                  ),
                ],
                ["Included fittings", product.includedFittings],
                ["Optional upgrades", product.optionalUpgrades],
                [
                  "Delivery and site readiness",
                  [
                    product.deliveryConcept,
                    "Access, foundations, services, compliance, and delivery method are reviewed during consultation.",
                  ],
                ],
              ].map(([title, items]) => (
                <details
                  className="border border-ivory/15 bg-ivory/[0.04] p-5"
                  key={title as string}
                >
                  <summary className="cursor-pointer text-lg font-semibold">
                    {title as string}
                  </summary>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-200">
                    {(items as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ivory px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow text-forest">FAQ</p>
            <div className="mt-8 grid gap-3 lg:grid-cols-3">
              {product.faq.map((item) => (
                <details
                  className="border border-slate-950/10 bg-warm-white p-5"
                  key={item.question}
                >
                  <summary className="cursor-pointer font-semibold">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-slate-950/68">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-warm-white px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-forest">Related homes</p>
                <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-none text-balance md:text-6xl">
                  Continue exploring the collection.
                </h2>
              </div>
              <Link
                href="/collection"
                className="text-sm font-semibold underline decoration-slate-950/25 transition hover:decoration-slate-950"
              >
                Back to collection
              </Link>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {relatedProducts.map((related) => (
                <ProductCard product={related} compact key={related.slug} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
