"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-ivory px-5 py-24 text-slate-950 md:px-8">
      <section className="mx-auto max-w-3xl">
        <p className="eyebrow text-forest">Something went wrong</p>
        <h1 className="mt-5 font-serif text-5xl leading-none text-forest text-balance md:text-7xl">
          The experience could not load cleanly.
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-950/72">
          Try again, or return to the collection while the issue is reviewed.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            className="inline-flex min-h-11 items-center justify-center bg-forest px-5 text-sm font-semibold text-ivory"
            onClick={reset}
            type="button"
          >
            Try again
          </button>
          <Link
            className="inline-flex min-h-11 items-center justify-center border border-slate-950/20 px-5 text-sm font-semibold text-slate-950"
            href="/collection"
          >
            Explore collection
          </Link>
        </div>
      </section>
    </main>
  );
}
