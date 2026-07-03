import { CalendarDays, Home, MapPin, ShieldCheck } from "lucide-react";

export function SiteFeasibilityShell() {
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
            will be saved only after form submission in Phase 4.
          </p>
        </div>
        <form className="grid gap-4 bg-ivory p-5 shadow-xl shadow-slate-950/5 md:grid-cols-2 md:p-8">
          {[
            ["Eircode", "A65 F4E2", MapPin],
            ["Desired home type", "Two-Bed Homes", Home],
            ["Timeline", "6-12 months", CalendarDays],
            ["Contact email", "hello@example.ie", ShieldCheck],
          ].map(([label, placeholder, Icon]) => (
            <label className="block" key={label as string}>
              <span className="text-sm font-semibold text-slate-950">
                {label as string}
              </span>
              <span className="mt-2 flex min-h-12 items-center gap-3 border border-slate-950/15 bg-warm-white px-4 text-slate-950/50">
                <Icon aria-hidden="true" size={18} />
                {placeholder as string}
              </span>
            </label>
          ))}
          <div className="md:col-span-2">
            <button
              className="min-h-12 w-full bg-forest px-5 text-sm font-semibold text-ivory transition hover:bg-forest-950"
              type="button"
            >
              Prepare feasibility enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
