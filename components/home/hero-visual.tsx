export function HeroVisual() {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-forest-950"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_34%,rgba(210,180,124,0.2),transparent_18%),linear-gradient(180deg,rgba(12,33,27,0.18),rgba(12,33,27,0.92))]" />
      <div className="absolute inset-x-[-10%] bottom-0 h-[46%] bg-moss/85 [clip-path:polygon(0_52%,20%_40%,42%_58%,64%_34%,82%_46%,100%_30%,100%_100%,0_100%)]" />
      <div className="absolute inset-x-[-4%] bottom-[18%] h-[36%] bg-forest [clip-path:polygon(0_70%,19%_54%,35%_61%,51%_38%,70%_54%,88%_42%,100%_54%,100%_100%,0_100%)]" />
      <div className="absolute bottom-[18%] left-1/2 h-[22vw] max-h-72 min-h-40 w-[56vw] max-w-4xl -translate-x-1/2 bg-stone shadow-2xl shadow-black/35 [clip-path:polygon(7%_48%,24%_20%,78%_20%,94%_48%,94%_88%,7%_88%)]" />
      <div className="absolute bottom-[26%] left-1/2 h-[10vw] max-h-32 min-h-20 w-[62vw] max-w-5xl -translate-x-1/2 bg-slate-950 [clip-path:polygon(5%_100%,24%_10%,77%_10%,96%_100%)]" />
      <div className="absolute bottom-[22%] left-[30%] h-[10vw] max-h-36 min-h-24 w-[16vw] max-w-56 border border-ivory/30 bg-forest-950/70" />
      <div className="absolute bottom-[22%] left-[49%] h-[9vw] max-h-32 min-h-20 w-[22vw] max-w-80 border border-ivory/25 bg-warm-white/65" />
      <div className="absolute bottom-[23%] right-[26%] h-[8vw] max-h-28 min-h-16 w-[11vw] max-w-44 border border-ivory/30 bg-brass-300/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-950 to-transparent" />
      <div className="grain-overlay" />
    </div>
  );
}
