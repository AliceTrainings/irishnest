import Link from "next/link";

import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="bg-ivory px-5 pb-24 pt-32 md:px-8">
        <section className="mx-auto max-w-3xl">
          <p className="eyebrow text-forest">Not found</p>
          <h1 className="mt-5 font-serif text-5xl leading-none text-forest text-balance md:text-7xl">
            This page is not part of the Irish Nest collection.
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-950/72">
            The route may have moved, or the content may not be published yet.
            Continue with the curated collection or start a careful enquiry.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-11 items-center justify-center bg-forest px-5 text-sm font-semibold text-ivory"
              href="/collection"
            >
              Explore collection
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center border border-slate-950/20 px-5 text-sm font-semibold text-slate-950"
              href="/contact"
            >
              Contact Irish Nest
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
