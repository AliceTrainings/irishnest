import Link from "next/link";

import {
  AdminPageHeader,
  AdminPanel,
  SearchToolbar,
  StatusPill,
} from "@/components/admin/admin-shell";
import { getAdminDashboardData } from "@/lib/admin/dashboard-data";

export default async function AdminEnquiriesPage() {
  const data = await getAdminDashboardData();

  return (
    <>
      <AdminPageHeader
        eyebrow="Pipeline"
        title="Lead assignment and enquiry triage."
        description="Search, filter, assign, and review enquiry status before quote or consultation follow-up."
        action={
          <Link
            href="/admin/enquiries/export"
            className="rounded-full border border-forest/15 px-5 py-3 text-sm font-semibold text-forest transition hover:bg-forest hover:text-ivory"
          >
            Export CSV
          </Link>
        }
      />
      <AdminPanel title="Enquiries">
        <SearchToolbar placeholder="Search lead name, email, Eircode, or interest" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-xs uppercase text-slate-950/48">
              <tr>
                <th className="py-3">Lead</th>
                <th>Interest</th>
                <th>Status</th>
                <th>Assigned to</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-forest/10">
              {data.leads.map((lead) => (
                <tr key={lead.id}>
                  <td className="py-3">
                    <p className="font-semibold text-forest">{lead.name}</p>
                    <p className="text-slate-950/52">{lead.email}</p>
                  </td>
                  <td>{lead.interest}</td>
                  <td>
                    <StatusPill value={lead.status} />
                  </td>
                  <td>{lead.owner}</td>
                  <td>{lead.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>
    </>
  );
}
