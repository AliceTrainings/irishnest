import {
  AdminPageHeader,
  AdminPanel,
  SearchToolbar,
  StatusPill,
} from "@/components/admin/admin-shell";

const posts = [
  "How Modular Homes Work in Ireland",
  "Planning Your Site Before You Buy",
  "Choosing the Right Home Size",
];

export default function AdminJournalPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="CMS"
        title="Journal content is structured for Supabase publishing."
        description="Editorial posts use replaceable body JSON, status, cover asset references, SEO fields, and published timestamps."
      />
      <AdminPanel title="Journal Posts">
        <SearchToolbar placeholder="Filter posts by title or slug" />
        <div className="space-y-3">
          {posts.map((title) => (
            <article
              key={title}
              className="flex flex-col justify-between gap-3 rounded-md border border-forest/10 bg-ivory p-4 md:flex-row md:items-center"
            >
              <div>
                <p className="font-semibold text-forest">{title}</p>
                <p className="mt-1 text-sm text-slate-950/58">
                  CMS-driven placeholder content, ready for editorial updates.
                </p>
              </div>
              <StatusPill value="published" />
            </article>
          ))}
        </div>
      </AdminPanel>
    </>
  );
}
