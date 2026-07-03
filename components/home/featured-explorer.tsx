"use client";

import Image from "next/image";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { products } from "@/lib/mock-data";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

const featuredHome = products.find(
  (product) => product.slug === "rath-one-bed-home",
)!;

const hotspotPositions = [
  "left-[24%] top-[42%]",
  "left-[44%] top-[56%]",
  "left-[58%] top-[50%]",
  "left-[71%] top-[59%]",
  "left-[78%] top-[44%]",
  "left-[36%] top-[34%]",
];

export function FeaturedExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeHotspot = featuredHome.hotspots[activeIndex];

  return (
    <section className="bg-slate-950 px-5 py-24 text-ivory md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow text-brass-300">Featured 3D home explorer</p>
          <h2 className="mt-5 font-serif text-4xl leading-none text-balance md:text-6xl">
            A lightweight preview of the Rath one-bed home.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-stone-200">
            Phase 2 uses a performant visual hotspot system. The React Three
            Fiber procedural scene is reserved for Phase 5, where it can be
            loaded only near viewport with static fallback support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/homes/${featuredHome.slug}`} variant="ghost">
              Explore in Fullscreen
            </ButtonLink>
            <ButtonLink href={`/request-a-quote?home=${featuredHome.slug}`}>
              Request a Quote
            </ButtonLink>
          </div>
        </div>
        <div className="border border-ivory/15 bg-ivory/[0.04] p-3">
          <div className="relative overflow-hidden bg-forest-950">
            <Image
              className="aspect-[16/11] w-full object-cover opacity-90"
              src={featuredHome.heroImage}
              alt=""
              width={1200}
              height={825}
              loading="lazy"
            />
            {featuredHome.hotspots.map((hotspot, index) => (
              <button
                className={cn(
                  "absolute flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-ivory/70 bg-forest-950/70 text-xs font-bold text-ivory backdrop-blur transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-300",
                  hotspotPositions[index],
                  activeIndex === index && "bg-brass-400 text-slate-950",
                )}
                key={hotspot.title}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                {index + 1}
              </button>
            ))}
            <div className="absolute bottom-4 left-4 right-4 border border-ivory/15 bg-forest-950/88 p-5 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brass-300">
                    {activeHotspot.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">
                    {activeHotspot.title}
                  </h3>
                </div>
                <Maximize2 aria-hidden="true" size={18} />
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-200">
                {activeHotspot.description}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ivory/70">
                {activeHotspot.material}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
