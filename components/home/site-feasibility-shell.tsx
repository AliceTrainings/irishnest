import { CalendarDays, Home, MapPin, ShieldCheck } from "lucide-react";

export function SiteFeasibilityShell() {
  const fields = [
    { label: "Eircode", placeholder: "A65 F4E2", icon: MapPin, type: "text" },
    {
      label: "Desired home type",
      placeholder: "Two-Bed Homes",
      icon: Home,
      type: "text",
    },
    {
      label: "Timeline",
      placeholder: "6-12 months",
      icon: CalendarDays,
      type: "text",
    },
    {
      label: "Contact email",
      placeholder: "hello@example.ie",
      icon: ShieldCheck,
      type: "email",
    },
  ];

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
          {fields.map(({ label, placeholder, icon: Icon, type }) => (
            <label className="block" key={label}>
              <span className="text-sm font-semibold text-slate-950">
                {label}
              </span>
              <span className="mt-2 flex min-h-12 items-center gap-3 border border-slate-950/15 bg-warm-white px-4">
                <Icon aria-hidden="true" size={18} />
                <input
                  className="min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-950/45"
                  placeholder={placeholder}
                  type={type}
                />
              </span>
            </label>
          ))}
          <label className="flex items-start gap-3 text-sm leading-6 text-slate-950/72 md:col-span-2">
            <input className="mt-1 size-4 accent-forest" type="checkbox" />
            <span>
              I consent to Irish Nest saving my enquiry details and contacting
              me about initial site feasibility. This does not confirm planning,
              engineering, pricing, access, or delivery approval.
            </span>
          </label>
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
