import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="bg-ivory px-5 pb-24 pt-32 md:px-8">
        <article className="mx-auto max-w-3xl">
          <p className="eyebrow text-forest">{eyebrow}</p>
          <h1 className="mt-5 font-serif text-5xl leading-none text-forest text-balance md:text-7xl">
            {title}
          </h1>
          <div className="mt-8 space-y-6 text-base leading-7 text-slate-950/72">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
