import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const toneClass: Record<Product["tone"], string> = {
  forest: "bg-forest text-ivory",
  stone: "bg-stone text-slate-950",
  moss: "bg-moss text-ivory",
  slate: "bg-slate-950 text-ivory",
  brass: "bg-brass-400 text-slate-950",
};

export function ProductCard({
  product,
  priority = false,
  compact = false,
}: {
  product: Product;
  priority?: boolean;
  compact?: boolean;
}) {
  return (
    <article className="group overflow-hidden border border-slate-950/10 bg-ivory">
      <Link href={`/homes/${product.slug}`} aria-label={`View ${product.name}`}>
        <div
          className={cn("relative overflow-hidden", toneClass[product.tone])}
        >
          <Image
            className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.045]"
            src={product.heroImage}
            alt=""
            width={900}
            height={675}
            priority={priority}
          />
          <div className="absolute inset-4 border border-current/20 transition duration-500 group-hover:inset-3" />
          <div className="absolute left-5 top-5 bg-ivory/90 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-950">
            {product.category}
          </div>
          <div className="absolute bottom-5 right-5 flex size-11 items-center justify-center bg-ivory text-slate-950 transition group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight aria-hidden="true" size={18} />
          </div>
        </div>
      </Link>
      <div className={cn("p-6", compact && "p-5")}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl leading-tight">{product.name}</h3>
          <span className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-forest">
            {product.status}
          </span>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-950/68">
          {product.shortDescription}
        </p>
        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-950/10 pt-5 text-sm">
          <div>
            <dt className="text-slate-950/45">Area</dt>
            <dd className="mt-1 font-semibold">{product.floorArea}</dd>
          </div>
          <div>
            <dt className="text-slate-950/45">Beds</dt>
            <dd className="mt-1 font-semibold">{product.bedrooms}</dd>
          </div>
          <div>
            <dt className="text-slate-950/45">Bath</dt>
            <dd className="mt-1 font-semibold">{product.bathrooms}</dd>
          </div>
        </dl>
        <Link
          className="mt-6 inline-flex text-sm font-semibold underline decoration-slate-950/25 transition hover:decoration-slate-950"
          href={`/request-a-quote?home=${product.slug}`}
        >
          Request a Quote
        </Link>
      </div>
    </article>
  );
}
