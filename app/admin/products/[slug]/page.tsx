import { notFound } from "next/navigation";

import { AdminPageHeader } from "@/components/admin/admin-shell";
import { ProductEditor } from "@/app/admin/products/product-editor";
import { getAdminDashboardData } from "@/lib/admin/dashboard-data";

export default async function EditAdminProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getAdminDashboardData();
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <AdminPageHeader
        eyebrow="Catalogue"
        title={product.name}
        description="Edit product fields, media references, fittings, upgrades, hotspots, and SEO metadata through the Supabase-backed product model."
      />
      <ProductEditor mode="edit" defaults={product} />
    </>
  );
}
