"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-800 bg-neutral-950 p-4 text-neutral-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-neutral-400">
          We use cookies (and 214 advertising partners) to improve your experience.
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDismissed(true)}
            className="rounded-lg bg-rose-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-rose-600/30 hover:bg-rose-500"
          >
            Accept All
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-xs text-neutral-600 underline hover:text-neutral-500"
          >
            Manage preferences
          </button>
        </div>
      </div>
    </div>
  );
}
