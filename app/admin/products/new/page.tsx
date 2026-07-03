import { AdminPageHeader } from "@/components/admin/admin-shell";
import { ProductEditor } from "@/app/admin/products/product-editor";

export default function NewAdminProductPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="Catalogue"
        title="Create a product concept."
        description="Draft records can hold placeholder copy and assets until final supplier confirmation is available."
      />
      <ProductEditor mode="create" />
    </>
  );
}
