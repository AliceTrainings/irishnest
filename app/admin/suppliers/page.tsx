import {
  AdminPageHeader,
  AdminPanel,
  SearchToolbar,
  StatusPill,
} from "@/components/admin/admin-shell";

const suppliers = [
  {
    name: "Approved Supplier A",
    contact: "Procurement Lead",
    email: "supplier-a@example.ie",
    status: "active",
    note: "Private placeholder record. Do not publish publicly.",
  },
  {
    name: "Approved Supplier B",
    contact: "Commercial Lead",
    email: "supplier-b@example.ie",
    status: "active",
    note: "Used for procurement mapping after consultation.",
  },
];

export default function AdminSuppliersPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="Procurement"
        title="Supplier records stay private in the first public version."
        description="Approved suppliers can be managed by admins without exposing supplier names, branding, photography, or proprietary content on the public website."
      />
      <AdminPanel title="Suppliers">
        <SearchToolbar placeholder="Search supplier name, contact, or status" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-xs uppercase text-slate-950/48">
              <tr>
                <th className="py-3">Supplier</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Status</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-forest/10">
              {suppliers.map((supplier) => (
                <tr key={supplier.name}>
                  <td className="py-3 font-semibold text-forest">
                    {supplier.name}
                  </td>
                  <td>{supplier.contact}</td>
                  <td>{supplier.email}</td>
                  <td>
                    <StatusPill value={supplier.status} />
                  </td>
                  <td>{supplier.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>
    </>
  );
}
