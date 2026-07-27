"use client";

import { PATTERNS, PAGE_LABELS } from "@/lib/patterns";
import { useLocale } from "@/components/LocaleProvider";

const UI = {
  en: {
    title: (n: number) => `Full catalog — ${n} dark patterns`,
    subtitle:
      "Every bad-but-common practice used on this site, grouped by the psychological mechanism it exploits. Visit any page and click the ? bubble to see which of these are live on it.",
    why: "Why it works: ",
  },
  pt: {
    title: (n: number) => `Catálogo completo — ${n} más práticas`,
    subtitle:
      "Toda prática ruim (mas comum) usada neste site, agrupada pelo mecanismo psicológico que ela explora. Visite qualquer página e clique na bolha ? pra ver quais delas estão ativas ali.",
    why: "Por que funciona: ",
  },
};

export default function PatternsPage() {
  const { locale } = useLocale();
  const t = UI[locale];
  const categories = Array.from(new Set(PATTERNS.map((p) => p.category[locale])));

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-3xl font-bold">{t.title(PATTERNS.length)}</h1>
      <p className="mt-2 text-sm text-neutral-500">{t.subtitle}</p>

      <div className="mt-8 space-y-10">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="text-lg font-bold text-rose-600">{category}</h2>
            <div className="mt-3 space-y-4">
              {PATTERNS.filter((p) => p.category[locale] === category).map((p) => (
                <div key={p.id} className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold">{p.name[locale]}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.pages.map((pg) => (
                        <span
                          key={pg}
                          className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                        >
                          {PAGE_LABELS[pg][locale]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.description[locale]}</p>
                  <p className="mt-2 text-sm text-neutral-500">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">{t.why}</span>
                    {p.why[locale]}
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
