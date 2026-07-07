import {
  AdminPageHeader,
  AdminPanel,
  SearchToolbar,
  StatusPill,
} from "@/components/admin/admin-shell";
import { getAdminDashboardData } from "@/lib/admin/dashboard-data";

export default async function AdminAppointmentsPage() {
  const data = await getAdminDashboardData();

  return (
    <>
      <AdminPageHeader
        eyebrow="Consultations"
        title="Appointment requests before calendar automation."
        description="Manage consultation requests, meeting type, preferred dates, and assigned sales follow-up."
      />
      <AdminPanel title="Consultation Appointments">
        <SearchToolbar placeholder="Filter appointments by name or email" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="text-xs uppercase text-slate-950/48">
              <tr>
                <th className="py-3">Customer</th>
                <th>Preferred date</th>
                <th>Meeting type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-forest/10">
              {data.appointments.map((appointment) => (
                <tr key={`${appointment.email}-${appointment.date}`}>
                  <td className="py-3">
                    <p className="font-semibold text-forest">
                      {appointment.name}
                    </p>
                    <p className="text-slate-950/52">{appointment.email}</p>
                  </td>
                  <td>{appointment.date}</td>
                  <td>{appointment.type}</td>
                  <td>
                    <StatusPill value={appointment.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>
    </>
  );
}
