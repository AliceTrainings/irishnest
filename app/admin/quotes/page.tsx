import {
  AdminPageHeader,
  AdminPanel,
  SearchToolbar,
  StatusPill,
} from "@/components/admin/admin-shell";
import { getAdminDashboardData } from "@/lib/admin/dashboard-data";

export default async function AdminQuotesPage() {
  const data = await getAdminDashboardData();

  return (
    <>
      <AdminPageHeader
        eyebrow="Quotes"
        title="Quote builder structure for line-item proposals."
        description="Quotes and quote_items are ready in Supabase for supplier-confirmed proposals, with clear status handling before anything is presented as final."
      />
      <AdminPanel title="Quotes">
        <SearchToolbar placeholder="Filter quotes by number, customer, or product" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-xs uppercase text-slate-950/48">
              <tr>
                <th className="py-3">Quote</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Status</th>
                <th>Total</th>
                <th>Valid until</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-forest/10">
              {data.quotes.map((quote) => (
                <tr key={quote.number}>
                  <td className="py-3 font-semibold text-forest">
                    {quote.number}
                  </td>
                  <td>{quote.customer}</td>
                  <td>{quote.product}</td>
                  <td>
                    <StatusPill value={quote.status} />
                  </td>
                  <td>{quote.total}</td>
                  <td>{quote.validUntil}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>
    </>
  );
}
