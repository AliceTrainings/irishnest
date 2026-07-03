export function Manifesto() {
  return (
    <section className="bg-ivory px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow text-forest">A curated experience centre</p>
          <h2 className="mt-5 font-serif text-4xl leading-none text-balance md:text-6xl">
            Modular homes, considered with Irish land, light, and life in mind.
          </h2>
        </div>
        <div className="relative">
          <div className="absolute -left-8 top-0 hidden h-full w-px bg-slate-950/15 lg:block" />
          <p className="max-w-2xl text-xl leading-9 text-slate-950/78">
            Irish Nest is not a factory catalogue. It is a carefully held
            collection of modular-home options, shaped around consultation, site
            understanding, supplier confirmation, and a calmer path to
            procurement.
          </p>
          <div className="mt-10 h-24 overflow-hidden border-y border-slate-950/10">
            <div className="h-full bg-[linear-gradient(135deg,transparent_0_14%,rgba(32,36,33,0.18)_14%_15%,transparent_15%_34%,rgba(32,36,33,0.14)_34%_35%,transparent_35%_100%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
