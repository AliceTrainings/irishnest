import { Save } from "lucide-react";

import { AdminPanel } from "@/components/admin/admin-shell";

export function ProductEditor({
  mode,
  defaults,
}: {
  mode: "create" | "edit";
  defaults?: {
    name: string;
    slug: string;
    category: string;
    status: string;
    area: string;
  };
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
      <AdminPanel
        title={mode === "create" ? "Product Details" : "Edit Product Details"}
        description="Validated with Zod schemas before Supabase mutation work is wired."
      >
        <form className="grid gap-4 md:grid-cols-2">
          <label className="block md:col-span-2">
            <span className="text-sm font-semibold text-forest">Name</span>
            <input
              name="name"
              defaultValue={defaults?.name}
              className="mt-2 min-h-11 w-full rounded-md border border-forest/12 bg-ivory px-4 text-sm outline-none focus:border-forest"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-forest">Slug</span>
            <input
              name="slug"
              defaultValue={defaults?.slug}
              className="mt-2 min-h-11 w-full rounded-md border border-forest/12 bg-ivory px-4 text-sm outline-none focus:border-forest"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-forest">Status</span>
            <select
              name="status"
              defaultValue={defaults?.status ?? "draft"}
              className="mt-2 min-h-11 w-full rounded-md border border-forest/12 bg-ivory px-4 text-sm outline-none focus:border-forest"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-forest">Category</span>
            <input
              name="category"
              defaultValue={defaults?.category}
              className="mt-2 min-h-11 w-full rounded-md border border-forest/12 bg-ivory px-4 text-sm outline-none focus:border-forest"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-forest">
              Floor area
            </span>
            <input
              name="floorAreaSqm"
              defaultValue={defaults?.area.replace(" sq m", "")}
              className="mt-2 min-h-11 w-full rounded-md border border-forest/12 bg-ivory px-4 text-sm outline-none focus:border-forest"
            />
          </label>
          <label className="block md:col-span-2">
            <span className="text-sm font-semibold text-forest">
              Short description
            </span>
            <textarea
              name="shortDescription"
              rows={4}
              className="mt-2 w-full rounded-md border border-forest/12 bg-ivory px-4 py-3 text-sm outline-none focus:border-forest"
            />
          </label>
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-forest px-5 text-sm font-semibold text-ivory transition hover:bg-forest-950 md:w-max"
          >
            <Save aria-hidden="true" className="size-4" />
            Save draft
          </button>
        </form>
      </AdminPanel>
      <AdminPanel title="Replaceable Assets">
        <div className="space-y-4 text-sm leading-6 text-slate-950/66">
          <p>
            Main image, gallery images, floor plan, and 3D model URL map to the
            Phase 3 product/media schema.
          </p>
          <p>
            Supplier names remain private admin data for the first public
            version.
          </p>
          <p>
            Final specs, pricing, delivery timelines, and availability must be
            confirmed during consultation.
          </p>
        </div>
      </AdminPanel>
    </div>
  );
}
