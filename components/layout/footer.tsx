import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/refundable-deposit-terms", label: "Refundable Deposit Terms" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-950/10 bg-ivory px-5 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-950/70">
            Irish Nest acts as your curated modular-home partner. Indicative
            information only; final specifications, availability, pricing, and
            site requirements are confirmed during consultation.
          </p>
        </div>
        <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((link) => (
            <Link
              className="text-slate-950/70 transition hover:text-slate-950"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl text-xs text-slate-950/55">
        (c) {new Date().getFullYear()} {siteConfig.name}. Placeholder content
        for MVP validation.
      </div>
    </footer>
  );
}
