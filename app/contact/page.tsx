import type { Metadata } from "next";

import { PublicLeadForm } from "@/components/forms/public-lead-form";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { products } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Irish Nest about curated modular homes in Ireland.",
};

export default function ContactPage() {
  const homeOptions = products.map((product) => ({
    name: product.name,
    slug: product.slug,
    category: product.category,
  }));

  return (
    <>
      <Navigation />
      <main className="bg-stone px-5 pb-24 pt-32 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow text-forest">Contact</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-none text-balance md:text-7xl">
              Start with a considered note.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-950/72">
              Use this route for general modular-home questions, product
              suitability, consultation requests, or early procurement context.
            </p>
          </div>
          <PublicLeadForm kind="contact" homes={homeOptions} />
        </div>
      </main>
      <Footer />
    </>
  );
}
