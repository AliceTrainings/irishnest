import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  FileText,
  Home,
  Image,
  Inbox,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

const adminLinks = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Home },
  { href: "/admin/suppliers", label: "Suppliers", icon: Truck },
  { href: "/admin/enquiries", label: "Enquiries", icon: Inbox },
  { href: "/admin/appointments", label: "Consultations", icon: CalendarDays },
  { href: "/admin/reservations", label: "Reservations", icon: ShieldCheck },
  { href: "/admin/quotes", label: "Quotes", icon: FileText },
  { href: "/admin/journal", label: "Journal", icon: BookOpen },
  { href: "/admin/media", label: "Media", icon: Image },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f2ede3] text-slate-950">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-forest/10 bg-forest-950 px-5 py-6 text-ivory lg:block">
        <Logo className="text-ivory" />
        <p className="mt-6 max-w-52 text-sm leading-6 text-ivory/66">
          Private operational centre for curated modular-home procurement.
        </p>
        <nav aria-label="Admin navigation" className="mt-8 space-y-1">
          {adminLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-ivory/72 transition hover:bg-ivory/10 hover:text-ivory"
              >
                <Icon aria-hidden="true" className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-forest/10 bg-ivory/92 px-5 py-4 backdrop-blur md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="lg:hidden">
              <Logo />
            </div>
            <div className="hidden lg:block">
              <p className="eyebrow text-forest">Admin</p>
              <p className="text-sm text-slate-950/62">
                Phase 3 Supabase and dashboard foundation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-forest/15 px-4 py-2 text-sm font-semibold text-forest transition hover:bg-forest hover:text-ivory"
              >
                Public site
              </Link>
              <Link
                href="/admin/login"
                className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-forest-950"
              >
                Admin login
              </Link>
            </div>
          </div>
          <nav
            aria-label="Admin mobile navigation"
            className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden"
          >
            {adminLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full border border-forest/10 px-3 py-2 text-xs font-semibold text-forest"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="px-5 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}

export function AdminPageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-5 border-b border-forest/10 pb-6 md:flex-row md:items-end">
      <div>
        <p className="eyebrow text-brass-400">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl text-forest md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-950/68">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="rounded-lg border border-forest/10 bg-warm-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-slate-950/62">{label}</p>
      <p className="mt-4 font-serif text-4xl text-forest">{value}</p>
      <p className="mt-2 text-sm text-slate-950/58">{detail}</p>
    </article>
  );
}

export function StatusPill({ value }: { value: string }) {
  const tone =
    value === "published" || value === "reserved" || value === "sent"
      ? "border-moss/20 bg-moss/12 text-forest"
      : value === "pending_payment" || value === "reservation_pending"
        ? "border-brass-400/30 bg-brass-400/12 text-[#725428]"
        : "border-forest/10 bg-forest/7 text-forest";

  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold capitalize",
        tone,
      )}
    >
      {value.replaceAll("_", " ")}
    </span>
  );
}

export function AdminPanel({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-forest/10 bg-warm-white shadow-sm">
      <div className="border-b border-forest/10 px-5 py-4">
        <h2 className="font-serif text-2xl text-forest">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-slate-950/62">{description}</p>
        ) : null}
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

export function SearchToolbar({
  placeholder,
  action,
}: {
  placeholder: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <form className="flex flex-1 gap-3" role="search">
        <input
          aria-label={placeholder}
          placeholder={placeholder}
          className="min-h-11 w-full rounded-md border border-forest/12 bg-ivory px-4 text-sm outline-none transition focus:border-forest"
        />
        <select
          aria-label="Filter status"
          className="min-h-11 rounded-md border border-forest/12 bg-ivory px-3 text-sm text-slate-950/72 outline-none transition focus:border-forest"
        >
          <option>All statuses</option>
          <option>New</option>
          <option>Qualified</option>
          <option>Quote sent</option>
          <option>Reserved</option>
        </select>
      </form>
      {action}
    </div>
  );
}
