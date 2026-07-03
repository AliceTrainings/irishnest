import { AdminPageHeader, AdminPanel } from "@/components/admin/admin-shell";
import { AdminLoginForm } from "@/app/admin/login/login-form";

export default function AdminLoginPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <AdminPageHeader
        eyebrow="Access"
        title="Sign in to the private Irish Nest workspace."
        description="Supabase Auth handles credentials. Role-based access is controlled through the admin_users table and row-level security policies."
      />
      <AdminLoginForm />
      <div className="mt-6">
        <AdminPanel title="Bootstrap Notes">
          <ul className="space-y-3 text-sm leading-6 text-slate-950/68">
            <li>Create the first user in Supabase Auth.</li>
            <li>
              Insert the matching user id into <code>public.admin_users</code>{" "}
              with <code>role = &apos;super_admin&apos;</code>.
            </li>
            <li>
              Never expose <code>SUPABASE_SERVICE_ROLE_KEY</code> to client
              components.
            </li>
          </ul>
        </AdminPanel>
      </div>
    </div>
  );
}
