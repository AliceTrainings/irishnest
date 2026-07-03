export default function Loading() {
  return (
    <main className="min-h-screen bg-ivory px-5 pt-32 md:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="eyebrow text-forest">Irish Nest</p>
        <div className="mt-6 h-16 max-w-2xl animate-pulse bg-stone/60" />
        <div className="mt-6 h-4 max-w-xl animate-pulse bg-stone/50" />
        <div className="mt-3 h-4 max-w-lg animate-pulse bg-stone/40" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div
              className="h-48 animate-pulse border border-slate-950/10 bg-warm-white"
              key={item}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
