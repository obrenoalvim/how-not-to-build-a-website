"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { getPatternsForPage, pathToPageKey, PAGE_LABELS } from "@/lib/patterns";

export default function HelpBubble() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const pageKey = pathToPageKey(pathname);
  const patterns = getPatternsForPage(pageKey);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="What's wrong with this page?"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-rose-600 text-2xl font-bold text-white shadow-lg shadow-rose-600/30 transition hover:scale-105 hover:bg-rose-500"
      >
        ?
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/40 p-4 sm:items-center sm:justify-center">
          <div className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-neutral-900">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">
                  {PAGE_LABELS[pageKey]} — {patterns.length} dark pattern
                  {patterns.length === 1 ? "" : "s"} on this page
                </p>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                  What&apos;s wrong here
                </h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full px-2 py-1 text-lg text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                ✕
              </button>
            </div>

            <ul className="space-y-4">
              {patterns.map((p) => (
                <li key={p.id} className="rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-500">
                    {p.category}
                  </p>
                  <p className="font-semibold text-neutral-900 dark:text-white">{p.name}</p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">Why it works: </span>
                    {p.why}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
