import Link from "next/link";
import type { Metadata } from "next";

import { PublicPageShell } from "@/components/content/public-page-shell";
import { journalPosts } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Irish Nest journal articles about modular homes, site planning, and home size decisions.",
};

export default function JournalPage() {
  return (
    <PublicPageShell
      eyebrow="Journal"
      title="Editorial guidance for modular-home decisions."
      description="Clear starting points for understanding modular homes, site planning, and sizing decisions before consultation."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {journalPosts.map((post) => (
          <article
            className="border border-slate-950/10 bg-warm-white p-5"
            key={post.title}
          >
            <p className="eyebrow text-brass-400">Guide</p>
            <h2 className="mt-4 font-serif text-2xl text-forest">
              {post.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-950/68">
              {post.excerpt}
            </p>
            <Link
              className="mt-5 inline-flex text-sm font-semibold text-forest underline"
              href="/contact"
            >
              Discuss this topic
            </Link>
          </article>
        ))}
      </div>
    </PublicPageShell>
  );
}
