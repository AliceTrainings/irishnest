import { AdminPageHeader, AdminPanel } from "@/components/admin/admin-shell";

export default function AdminSettingsPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="Settings"
        title="Operational settings and role boundaries."
        description="Admin roles are super_admin, admin, sales, and content_editor. RLS policies enforce access according to operational responsibility."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <AdminPanel title="Environment">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-forest">
                NEXT_PUBLIC_SUPABASE_URL
              </dt>
              <dd className="mt-1 text-slate-950/62">
                Required for browser and server Supabase clients.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-forest">
                NEXT_PUBLIC_SUPABASE_ANON_KEY
              </dt>
              <dd className="mt-1 text-slate-950/62">
                Required for public insert forms and admin login.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-forest">
                SUPABASE_SERVICE_ROLE_KEY
              </dt>
              <dd className="mt-1 text-slate-950/62">
                Server-only key for admin data loaders and trusted workflows.
              </dd>
            </div>
          </dl>
        </AdminPanel>
        <AdminPanel title="Audit Coverage">
          <p className="text-sm leading-6 text-slate-950/66">
            Phase 3 audit triggers record admin mutations for products,
            enquiries, reservations, and quotes. Additional tables can be added
            as workflows mature.
          </p>
        </AdminPanel>
      </div>
    </>
  );
}
