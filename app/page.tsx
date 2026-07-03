import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { CollectionPreview } from "@/components/home/collection-preview";
import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { SiteFeasibilityShell } from "@/components/home/site-feasibility-shell";
import { homePrinciples } from "@/lib/mock-data";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <CollectionPreview />
        <section className="bg-forest-950 px-5 py-24 text-ivory md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1fr]">
            <div>
              <p className="eyebrow text-brass-300">
                The Irish Nest difference
              </p>
              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-none text-balance md:text-6xl">
                Guidance with the patience of architecture and the discipline of
                procurement.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {homePrinciples.map((principle) => (
                <article
                  className="border border-ivory/15 bg-ivory/[0.04] p-6"
                  key={principle.title}
                >
                  <div className="mb-8 h-14 border-l border-t border-brass-300/70" />
                  <h3 className="text-lg font-medium">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-200">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <SiteFeasibilityShell />
      </main>
      <Footer />
    </>
  );
}
