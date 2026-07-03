import { processSteps } from "@/lib/mock-data";
import { Reveal } from "@/components/ui/reveal";

export function HowItWorks() {
  return (
    <section className="bg-ivory px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-forest">How it works</p>
          <h2 className="mt-5 font-serif text-4xl leading-none text-balance md:text-6xl">
            A calmer route from first look to supplier-confirmed procurement.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal delay={index * 0.06} key={step.title}>
              <article className="relative min-h-full border border-slate-950/10 bg-warm-white p-5">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-serif text-4xl text-forest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden h-px flex-1 bg-slate-950/12 lg:ml-4 lg:block" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-950/68">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
