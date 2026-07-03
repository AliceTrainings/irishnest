import { products } from "@/lib/mock-data";
import { ButtonLink } from "@/components/ui/button-link";
import { HomeExplorer } from "@/components/three/home-explorer";

const featuredHome = products.find(
  (product) => product.slug === "rath-one-bed-home",
)!;

export function FeaturedExplorer() {
  return (
    <section className="bg-slate-950 px-5 py-24 text-ivory md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow text-brass-300">Featured 3D home explorer</p>
          <h2 className="mt-5 font-serif text-4xl leading-none text-balance md:text-6xl">
            A lightweight preview of the Rath one-bed home.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-stone-200">
            A procedural React Three Fiber scene lets you move between exterior,
            living, kitchen, bedroom, bathroom, and energy-efficiency
            viewpoints. It loads near viewport and falls back to a static
            hotspot image when reduced motion or WebGL support asks for it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href={`/homes/${featuredHome.slug}/walkthrough`}
              variant="ghost"
            >
              Explore in Fullscreen
            </ButtonLink>
            <ButtonLink href={`/request-a-quote?home=${featuredHome.slug}`}>
              Request a Quote
            </ButtonLink>
          </div>
        </div>
        <div className="border border-ivory/15 bg-ivory/[0.04] p-3">
          <HomeExplorer product={featuredHome} />
        </div>
      </div>
    </section>
  );
}
