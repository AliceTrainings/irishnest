import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PublicPageShell } from "@/components/content/public-page-shell";
import { journalPosts } from "@/lib/mock-data";

type JournalPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: JournalPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Journal Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function JournalPostPage({
  params,
}: JournalPostPageProps) {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PublicPageShell
      eyebrow={post.category}
      title={post.title}
      description={post.excerpt}
    >
      <div className="space-y-6 border border-slate-950/10 bg-warm-white p-6 text-base leading-7 text-slate-950/72">
        <p>
          Irish Nest uses editorial guidance to help customers understand the
          questions that often come before choosing a modular-home concept.
        </p>
        <p>
          Guidance on modular homes, planning, site readiness, procurement, and
          product sizing is indicative only. Final advice should come from the
          relevant professional, supplier, or authority for the specific site.
        </p>
        <Link
          className="inline-flex text-sm font-semibold text-forest underline"
          href="/contact"
        >
          Discuss this topic
        </Link>
      </div>
    </PublicPageShell>
  );
}
