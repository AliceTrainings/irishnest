import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass-300",
        variant === "primary" && "bg-forest text-ivory hover:bg-forest-950",
        variant === "secondary" &&
          "border border-slate-950/20 text-slate-950 hover:border-slate-950 hover:bg-warm-white",
        variant === "ghost" &&
          "text-ivory underline decoration-ivory/35 hover:decoration-ivory",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </Link>
  );
}
