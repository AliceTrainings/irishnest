import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-3 font-serif text-xl text-current",
        className,
      )}
      href="/"
      aria-label="Irish Nest home"
    >
      <Image
        src="/brand/irish-nest-mark.svg"
        alt=""
        width={34}
        height={34}
        priority
      />
      <span>{siteConfig.name}</span>
    </Link>
  );
}
