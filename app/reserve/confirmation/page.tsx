import Link from "next/link";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export const metadata: Metadata = {
  title: "Reservation Request Received",
  description:
    "Your Irish Nest reservation request has been recorded as pending payment.",
};

export default async function ReservationConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <>
      <Navigation />
      <main className="bg-ivory px-5 pb-24 pt-32 md:px-8">
        <section className="mx-auto max-w-3xl">
          <p className="eyebrow text-forest">Reservation request received</p>
          <h1 className="mt-5 font-serif text-5xl leading-none text-forest text-balance md:text-7xl">
            Your reservation is pending payment review.
          </h1>
          <div className="mt-8 space-y-5 text-base leading-7 text-slate-950/72">
            <p>
              Irish Nest has recorded your reservation request with status{" "}
              <strong>pending_payment</strong>. This does not confirm the
              reservation, home availability, pricing, final specification,
              delivery, or site suitability.
            </p>
            <p>
              The team will follow up with refundable-deposit instructions and
              next steps. A reservation is only confirmed after payment is
              actually received and the consultation process confirms the
              required details.
            </p>
          </div>
          {ref ? (
            <p className="mt-6 rounded-md border border-forest/10 bg-warm-white p-4 text-sm font-semibold text-forest">
              Reference: {ref}
            </p>
          ) : null}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-11 items-center justify-center bg-forest px-5 text-sm font-semibold text-ivory transition hover:bg-forest-950"
              href="/collection"
            >
              Back to collection
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center border border-slate-950/20 px-5 text-sm font-semibold text-slate-950 transition hover:bg-warm-white"
              href="/refundable-deposit-terms"
            >
              Refundable deposit terms
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
