import { PATTERNS, PAGE_LABELS } from "@/lib/patterns";

export default function PatternsPage() {
  const categories = Array.from(new Set(PATTERNS.map((p) => p.category)));

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">Full catalog — {PATTERNS.length} dark patterns</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Every bad-but-common practice used on this site, grouped by the psychological mechanism it exploits.
        Visit any page and click the ? bubble to see which of these are live on it.
      </p>

      <div className="mt-8 space-y-10">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="text-lg font-bold text-rose-600">{category}</h2>
            <div className="mt-3 space-y-4">
              {PATTERNS.filter((p) => p.category === category).map((p) => (
                <div key={p.id} className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold">{p.name}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.pages.map((pg) => (
                        <span
                          key={pg}
                          className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                        >
                          {PAGE_LABELS[pg]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
                  <p className="mt-2 text-sm text-neutral-500">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">Why it works: </span>
                    {p.why}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
