"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-500",
        isSolid
          ? "border-b border-slate-950/10 bg-ivory/95 text-slate-950 backdrop-blur"
          : "text-ivory",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              className="text-sm font-medium opacity-85 transition hover:opacity-100"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink
            href={siteConfig.ctas.secondary.href}
            variant={isSolid ? "secondary" : "ghost"}
          >
            {siteConfig.ctas.secondary.label}
          </ButtonLink>
        </div>
        <button
          className="inline-flex size-11 items-center justify-center border border-current/25 lg:hidden"
          type="button"
          aria-label="Open navigation menu"
        >
          <Menu aria-hidden="true" size={20} />
        </button>
      </nav>
    </header>
  );
}
