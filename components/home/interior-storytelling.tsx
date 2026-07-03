import Image from "next/image";
import { interiorStories } from "@/lib/mock-data";
import { Reveal } from "@/components/ui/reveal";

export function InteriorStorytelling() {
  return (
    <section className="overflow-hidden bg-warm-white px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-forest">Interior storytelling</p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-none text-balance md:text-6xl">
              Warm rooms, tactile finishes, and placeholders ready for real
              photography.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-950/65">
            Indicative materials only. Final palettes, fittings, and suppliers
            are confirmed during consultation.
          </p>
        </Reveal>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]">
        {interiorStories.map((story, index) => (
          <Reveal
            className="min-w-[78vw] sm:min-w-[430px] lg:min-w-[520px]"
            delay={index * 0.05}
            key={story.title}
          >
            <article className="border border-slate-950/10 bg-ivory">
              <Image
                className="aspect-[7/5] w-full object-cover"
                src={story.image}
                alt=""
                width={900}
                height={640}
                loading="lazy"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <h3 className="font-serif text-2xl">{story.title}</h3>
                <p className="text-right text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                  {story.material}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
