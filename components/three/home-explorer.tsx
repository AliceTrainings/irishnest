"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { ExplorerFallback } from "@/components/three/explorer-fallback";
import type { Product } from "@/lib/mock-data";

const ProceduralHomeScene = dynamic(
  () =>
    import("@/components/three/procedural-home-scene").then(
      (mod) => mod.ProceduralHomeScene,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[420px] items-center justify-center bg-forest-950 text-sm font-semibold text-ivory md:min-h-[520px]">
        Loading 3D explorer
      </div>
    ),
  },
);

function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function canUseWebGl() {
  if (typeof document === "undefined") {
    return false;
  }

  const canvas = document.createElement("canvas");
  return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
}

export function HomeExplorer({
  product,
  fullscreen = false,
}: {
  product: Product;
  fullscreen?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldLoad3d, setShouldLoad3d] = useState(false);
  const [fallbackReason, setFallbackReason] = useState<string | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      queueMicrotask(() => setFallbackReason("Reduced motion fallback"));
      return;
    }

    if (!canUseWebGl()) {
      queueMicrotask(() => setFallbackReason("Static fallback"));
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad3d(true);
          observer.disconnect();
        }
      },
      { rootMargin: "360px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative" data-home-explorer="true">
      {fallbackReason || !shouldLoad3d ? (
        <ExplorerFallback
          product={product}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          label={fallbackReason ?? "3D loads near viewport"}
        />
      ) : (
        <ProceduralHomeScene
          product={product}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          fullscreen={fullscreen}
        />
      )}
    </div>
  );
}
