import {
  AdminPageHeader,
  AdminPanel,
  SearchToolbar,
  StatusPill,
} from "@/components/admin/admin-shell";
import { getAdminDashboardData } from "@/lib/admin/dashboard-data";

export default async function AdminReservationsPage() {
  const data = await getAdminDashboardData();

  return (
    <>
      <AdminPageHeader
        eyebrow="Reservations"
        title="Refundable deposit reservations stay pending until payment clears."
        description="Phase 3 stores reservation records and status. Phase 4 adds the public reservation flow, while a future payment provider can plug into the service boundary."
      />
      <AdminPanel title="Reservations">
        <SearchToolbar placeholder="Filter reservations by customer or product" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-xs uppercase text-slate-950/48">
              <tr>
                <th className="py-3">Customer</th>
                <th>Product</th>
                <th>Status</th>
                <th>Deposit</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-forest/10">
              {data.reservations.map((reservation) => (
                <tr key={`${reservation.name}-${reservation.product}`}>
                  <td className="py-3 font-semibold text-forest">
                    {reservation.name}
                  </td>
                  <td>{reservation.product}</td>
                  <td>
                    <StatusPill value={reservation.status} />
                  </td>
                  <td>{reservation.deposit}</td>
                  <td>{reservation.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>
    </>
  );
}
