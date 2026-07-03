import { PublicLeadForm } from "@/components/forms/public-lead-form";
import { products } from "@/lib/mock-data";

export function SiteFeasibilityShell() {
  const homeOptions = products.map((product) => ({
    name: product.name,
    slug: product.slug,
    category: product.category,
  }));

  return (
    <section className="bg-stone px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow text-forest">Initial site feasibility</p>
          <h2 className="mt-5 font-serif text-4xl leading-none text-balance md:text-6xl">
            Start with your Eircode, then a real conversation.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-950/72">
            This is an initial feasibility enquiry, not planning, engineering,
            access, pricing, or delivery approval. Consent and contact details
            are saved only after form submission.
          </p>
        </div>
        <PublicLeadForm kind="feasibility" homes={homeOptions} />
      </div>
    </section>
  );
}
