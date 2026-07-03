import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export function PublicPageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="bg-ivory">
        <section className="px-5 pb-16 pt-32 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="eyebrow text-forest">{eyebrow}</p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-none text-forest text-balance md:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-950/72">
              {description}
            </p>
          </div>
        </section>
        <section className="px-5 pb-24 md:px-8">
          <div className="mx-auto max-w-5xl">{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function EditorialGrid({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article
          className="border border-slate-950/10 bg-warm-white p-5"
          key={item.title}
        >
          <h2 className="font-serif text-2xl text-forest">{item.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-950/68">
            {item.body}
          </p>
        </article>
      ))}
    </div>
  );
}
