import { ButtonLink } from "@/components/ui/button-link";
import { HeroVisual } from "@/components/home/hero-visual";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-32 text-ivory md:px-8 md:pb-20">
      <HeroVisual />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="max-w-4xl">
          <p className="eyebrow text-brass-300">Irish Nest</p>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.9] text-balance md:text-8xl">
            A better way to come home.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-100 md:text-2xl">
            Thoughtfully curated modular homes for modern Irish living.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={siteConfig.ctas.primary.href}>
            {siteConfig.ctas.primary.label}
          </ButtonLink>
          <ButtonLink href={siteConfig.ctas.secondary.href} variant="ghost">
            {siteConfig.ctas.secondary.label}
          </ButtonLink>
        </div>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ivory/70">
          <span className="h-px w-12 bg-ivory/45" />
          Scroll
        </div>
      </div>
    </section>
  );
}
