import { homePrinciples } from "@/lib/mock-data";
import { Reveal } from "@/components/ui/reveal";

export function DifferenceSection() {
  return (
    <section className="bg-forest-950 px-5 py-24 text-ivory md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1fr]">
        <Reveal>
          <p className="eyebrow text-brass-300">The Irish Nest difference</p>
          <h2 className="mt-5 max-w-xl font-serif text-4xl leading-none text-balance md:text-6xl">
            Guidance with the patience of architecture and the discipline of
            procurement.
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {homePrinciples.map((principle, index) => (
            <Reveal delay={index * 0.08} key={principle.title}>
              <article className="min-h-full border border-ivory/15 bg-ivory/[0.04] p-6">
                <div className="relative mb-8 h-20">
                  <div className="absolute left-0 top-0 h-16 w-px bg-brass-300/70" />
                  <div className="absolute left-0 top-0 h-px w-20 bg-brass-300/70" />
                  <div className="absolute bottom-0 left-8 h-px w-28 bg-ivory/20" />
                  <div className="absolute bottom-0 left-8 h-12 w-px bg-ivory/20" />
                </div>
                <h3 className="text-lg font-medium">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-200">
                  {principle.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
