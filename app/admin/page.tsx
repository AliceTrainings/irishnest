import Link from "next/link";

import {
  AdminPageHeader,
  AdminPanel,
  StatCard,
  StatusPill,
} from "@/components/admin/admin-shell";
import { getAdminDashboardData } from "@/lib/admin/dashboard-data";

export default async function AdminOverviewPage() {
  const data = await getAdminDashboardData();
  const maxFunnel = Math.max(...data.funnel.map((item) => item.value), 1);

  return (
    <>
      <AdminPageHeader
        eyebrow="Dashboard"
        title="A calm operating room for every Irish Nest lead."
        description="Track enquiries, quotes, consultations, reservations, product readiness, and recent admin activity from one place."
        action={
          <div className="rounded-full border border-forest/10 bg-warm-white px-4 py-2 text-sm font-semibold text-forest">
            Data source: {data.source}
          </div>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.metrics.map((metric) => (
          <StatCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <AdminPanel
          title="Lead Status Funnel"
          description="Pipeline stages required by the Phase 3 brief."
        >
          <div className="space-y-4">
            {data.funnel.map((stage) => (
              <div key={stage.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-950/72">
                    {stage.label}
                  </span>
                  <span className="text-slate-950/56">{stage.value}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-stone/45">
                  <div
                    className="h-full rounded-full bg-forest"
                    style={{ width: `${(stage.value / maxFunnel) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </AdminPanel>

        <AdminPanel
          title="Recent Activity"
          description="Audit log entries appear here when Supabase is connected."
        >
          <div className="space-y-4">
            {data.activity.map((item) => (
              <article
                key={`${item.action}-${item.subject}-${item.when}`}
                className="border-b border-forest/10 pb-4 last:border-0 last:pb-0"
              >
                <p className="font-semibold text-forest">{item.action}</p>
                <p className="mt-1 text-sm text-slate-950/62">{item.subject}</p>
                <p className="mt-2 text-xs font-semibold uppercase text-brass-400">
                  {item.when}
                </p>
              </article>
            ))}
          </div>
        </AdminPanel>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-2">
        <AdminPanel title="Latest Enquiries">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="text-xs uppercase text-slate-950/48">
                <tr>
                  <th className="py-3">Lead</th>
                  <th>Interest</th>
                  <th>Status</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10">
                {data.leads.slice(0, 5).map((lead) => (
                  <tr key={lead.id}>
                    <td className="py-3">
                      <p className="font-semibold text-forest">{lead.name}</p>
                      <p className="text-slate-950/56">{lead.email}</p>
                    </td>
                    <td>{lead.interest}</td>
                    <td>
                      <StatusPill value={lead.status} />
                    </td>
                    <td>{lead.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            href="/admin/enquiries"
            className="mt-5 inline-flex text-sm font-semibold text-forest underline"
          >
            Manage pipeline
          </Link>
        </AdminPanel>

        <AdminPanel title="Product Readiness">
          <div className="space-y-4">
            {data.products.slice(0, 5).map((product) => (
              <article
                key={product.slug}
                className="flex items-center justify-between gap-4 border-b border-forest/10 pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-semibold text-forest">{product.name}</p>
                  <p className="text-sm text-slate-950/60">
                    {product.category} · {product.area}
                  </p>
                </div>
                <StatusPill value={product.status} />
              </article>
            ))}
          </div>
          <Link
            href="/admin/products"
            className="mt-5 inline-flex text-sm font-semibold text-forest underline"
          >
            Review catalogue
          </Link>
        </AdminPanel>
      </section>
    </>
  );
}
