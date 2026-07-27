"use client";

import { useEffect, useState } from "react";

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY < 40 && !shown) {
        setShow(true);
        setShown(true);
      }
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [shown]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl dark:bg-neutral-900">
        <h2 className="text-xl font-bold">Wait! Get 20% off Flowly Pro</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Join our newsletter and never miss a deal.
        </p>
        <input
          type="email"
          placeholder="you@email.com"
          className="mt-4 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
        />
        <button className="mt-3 w-full rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white hover:bg-rose-500">
          Yes, save 20%
        </button>
        <button
          onClick={() => setShow(false)}
          className="mt-3 text-xs text-neutral-500 underline hover:text-neutral-700"
        >
          No thanks, I enjoy overpaying
        </button>
      </div>
    </div>
  );
}
