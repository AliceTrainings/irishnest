import { ImagePlus } from "lucide-react";

import { AdminPageHeader, AdminPanel } from "@/components/admin/admin-shell";

export default function AdminMediaPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="Media"
        title="Replaceable assets for product, journal, and 3D workflows."
        description="The media_assets table stores storage paths, dimensions, captions, alt text, ownership, and audit-ready timestamps."
      />
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <AdminPanel title="Upload Structure">
          <div className="flex min-h-64 flex-col items-center justify-center rounded-md border border-dashed border-forest/20 bg-ivory p-6 text-center">
            <ImagePlus aria-hidden="true" className="size-9 text-brass-400" />
            <p className="mt-4 font-semibold text-forest">
              Supabase Storage hook point
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-950/62">
              Phase 3 defines the media model. Upload mutation and storage
              bucket policies can be connected when the live project is
              configured.
            </p>
          </div>
        </AdminPanel>
        <AdminPanel title="Asset Types">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Product hero renders",
              "Interior gallery renders",
              "Floor plans",
              "Journal covers",
              "3D model references",
              "Brand assets",
            ].map((item) => (
              <div
                key={item}
                className="rounded-md border border-forest/10 bg-ivory p-4 text-sm font-semibold text-forest"
              >
                {item}
              </div>
            ))}
          </div>
        </AdminPanel>
      </div>
    </>
  );
}
