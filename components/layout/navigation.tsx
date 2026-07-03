"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/logo";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isSolid, setIsSolid] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <X aria-hidden="true" size={20} />
          ) : (
            <Menu aria-hidden="true" size={20} />
          )}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-slate-950/10 bg-ivory px-5 py-5 text-slate-950 shadow-xl shadow-slate-950/10 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {siteConfig.navItems.map((item) => (
              <Link
                className="px-2 py-3 text-base font-semibold"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="mt-3 bg-forest px-4 py-3 text-center text-sm font-semibold text-ivory"
              href={siteConfig.ctas.secondary.href}
              onClick={() => setIsOpen(false)}
            >
              {siteConfig.ctas.secondary.label}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
