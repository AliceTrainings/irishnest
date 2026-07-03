import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { PublicLeadForm } from "@/components/forms/public-lead-form";
import { products } from "@/lib/mock-data";
import Link from "next/link";

type FlowKind = "quote" | "appointment" | "reservation";

const pageCopy = {
  quote: {
    eyebrow: "Request a quote",
    title: "Start with the right information, then confirm the details.",
    description:
      "Irish Nest will use this request to understand the home, site context, and next steps. Pricing, availability, delivery, and final specification remain subject to consultation and supplier confirmation.",
    kind: "quote" as const,
  },
  appointment: {
    eyebrow: "Book a consultation",
    title: "Choose a preferred consultation path.",
    description:
      "This creates a requested appointment for Irish Nest to review. The date and time are not confirmed until the team follows up.",
    kind: "appointment" as const,
  },
  reservation: {
    eyebrow: "Reserve a home",
    title: "Create a pending refundable-deposit reservation.",
    description:
      "The MVP does not process payment. A reservation record is created as pending_payment and remains unconfirmed until payment is actually received.",
    kind: "reservation" as const,
  },
};

export function FlowPage({
  type,
  selectedHome,
}: {
  type: FlowKind;
  selectedHome?: string;
}) {
  const copy = pageCopy[type];
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
            <p className="eyebrow text-forest">{copy.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-none text-balance md:text-7xl">
              {copy.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-950/72">
              {copy.description}
            </p>
            <div className="mt-8 border-l-2 border-brass-400 bg-ivory p-5 text-sm font-semibold leading-6 text-slate-950/72">
              Irish Nest acts as your curated modular-home partner. This form
              does not confirm planning approval, engineering suitability,
              supplier availability, final pricing, or delivery timelines.
            </div>
            {type === "reservation" ? (
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold text-forest">
                <Link className="underline" href="/refundable-deposit-terms">
                  Refundable deposit terms
                </Link>
                <Link className="underline" href="/terms">
                  Website terms
                </Link>
              </div>
            ) : null}
          </div>
          <PublicLeadForm
            kind={copy.kind}
            homes={homeOptions}
            selectedHome={selectedHome}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
