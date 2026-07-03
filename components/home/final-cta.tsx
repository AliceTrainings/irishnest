import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-forest-950 px-5 py-24 text-ivory md:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-brass-300/40" />
      <div className="grain-overlay" />
      <Reveal className="relative mx-auto max-w-5xl text-center">
        <p className="eyebrow text-brass-300">Begin carefully</p>
        <h2 className="mt-5 font-serif text-5xl leading-none text-balance md:text-7xl">
          Your next home begins with a conversation.
        </h2>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/request-a-quote">Request a Quote</ButtonLink>
          <ButtonLink href="/reserve" variant="ghost">
            Reserve a Home
          </ButtonLink>
          <ButtonLink href="/book" variant="ghost">
            Book a Consultation
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
