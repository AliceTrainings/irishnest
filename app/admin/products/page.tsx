import Link from "next/link";

import {
  AdminPageHeader,
  AdminPanel,
  SearchToolbar,
  StatusPill,
} from "@/components/admin/admin-shell";
import { getAdminDashboardData } from "@/lib/admin/dashboard-data";

export default async function AdminProductsPage() {
  const data = await getAdminDashboardData();

  return (
    <>
      <AdminPageHeader
        eyebrow="Catalogue"
        title="Product records prepared for supplier-backed curation."
        description="Manage public catalogue readiness, private supplier links, technical details, media, feature lists, upgrade options, SEO metadata, and future 3D model URLs."
        action={
          <Link
            href="/admin/products/new"
            className="rounded-full bg-forest px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-forest-950"
          >
            New product
          </Link>
        }
      />
      <AdminPanel title="Products">
        <SearchToolbar placeholder="Search products, slugs, or categories" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-xs uppercase text-slate-950/48">
              <tr>
                <th className="py-3">Product</th>
                <th>Category</th>
                <th>Status</th>
                <th>Area</th>
                <th>Supplier</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-forest/10">
              {data.products.map((product) => (
                <tr key={product.slug}>
                  <td className="py-3">
                    <Link
                      href={`/admin/products/${product.slug}`}
                      className="font-semibold text-forest underline-offset-4 hover:underline"
                    >
                      {product.name}
                    </Link>
                    <p className="text-slate-950/52">{product.slug}</p>
                  </td>
                  <td>{product.category}</td>
                  <td>
                    <StatusPill value={product.status} />
                  </td>
                  <td>{product.area}</td>
                  <td>{product.supplier}</td>
                  <td>{product.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminPanel>
    </>
  );
}
