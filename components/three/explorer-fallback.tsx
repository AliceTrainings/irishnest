"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";

import type { Product, ProductHotspot } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const fallbackPositions = [
  "left-[24%] top-[42%]",
  "left-[44%] top-[56%]",
  "left-[58%] top-[50%]",
  "left-[71%] top-[59%]",
  "left-[78%] top-[44%]",
  "left-[36%] top-[34%]",
];

export function ExplorerFallback({
  product,
  activeIndex,
  onSelect,
  label = "Static explorer fallback",
}: {
  product: Product;
  activeIndex: number;
  onSelect: (index: number) => void;
  label?: string;
}) {
  const activeHotspot = product.hotspots[activeIndex] ?? product.hotspots[0];

  return (
    <div
      className="relative min-h-[420px] overflow-hidden bg-forest-950 md:min-h-[520px]"
      data-explorer-fallback="true"
    >
      <Image
        className="absolute inset-0 size-full object-cover opacity-90"
        src={product.heroImage}
        alt=""
        width={1400}
        height={950}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest-950/22" />
      <p className="absolute left-4 top-4 z-10 rounded-full border border-ivory/20 bg-forest-950/80 px-3 py-1 text-xs font-semibold text-ivory/82 backdrop-blur">
        {label}
      </p>
      {product.hotspots.map((hotspot, index) => (
        <button
          className={cn(
            "absolute z-10 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/70 bg-forest-950/75 text-xs font-bold text-ivory backdrop-blur transition hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-300",
            fallbackPositions[index] ?? "left-1/2 top-1/2",
            activeIndex === index && "bg-brass-400 text-slate-950",
          )}
          key={hotspot.title}
          onClick={() => onSelect(index)}
          type="button"
        >
          {index + 1}
        </button>
      ))}
      <ExplorerHotspotPanel hotspot={activeHotspot} />
    </div>
  );
}

export function ExplorerHotspotPanel({
  hotspot,
  compact = false,
}: {
  hotspot: ProductHotspot;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "absolute bottom-4 left-4 right-4 z-10 border border-ivory/15 bg-forest-950/90 p-5 text-ivory shadow-2xl shadow-slate-950/25 backdrop-blur",
        compact && "md:max-w-sm",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brass-300">
            {hotspot.label}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{hotspot.title}</h3>
        </div>
        <Maximize2 aria-hidden="true" size={18} />
      </div>
      <p className="mt-3 text-sm leading-6 text-stone-200">
        {hotspot.description}
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ivory/70">
        {hotspot.material}
      </p>
    </div>
  );
}
