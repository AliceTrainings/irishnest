import Link from "next/link";
import { journalPosts } from "@/lib/mock-data";
import { Reveal } from "@/components/ui/reveal";

export function JournalPreview() {
  return (
    <section className="bg-ivory px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-forest">Journal</p>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-none text-balance md:text-6xl">
              Early guides for modular decisions in Ireland.
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-sm font-semibold underline decoration-slate-950/25 transition hover:decoration-slate-950"
          >
            View journal
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {journalPosts.map((post, index) => (
            <Reveal delay={index * 0.06} key={post.slug}>
              <Link
                className="block min-h-full border border-slate-950/10 bg-warm-white p-6 transition hover:-translate-y-1 hover:bg-stone/45"
                href={`/journal/${post.slug}`}
              >
                <p className="eyebrow text-forest">{post.category}</p>
                <h3 className="mt-10 font-serif text-3xl leading-tight">
                  {post.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-slate-950/68">
                  {post.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
