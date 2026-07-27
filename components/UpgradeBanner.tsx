"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

const UI = {
  en: { text: "Unlock advanced reports — upgrade to Business today.", cta: "Upgrade now" },
  pt: { text: "Desbloqueie relatórios avançados — faça upgrade pro Empresarial hoje.", cta: "Fazer upgrade" },
};

export default function UpgradeBanner() {
  const [closeOnLeft, setCloseOnLeft] = useState(false);
  const { locale } = useLocale();
  const t = UI[locale];

  return (
    <div className="relative mt-8 flex items-center justify-between rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-5 text-white">
      <p className="font-semibold">{t.text}</p>
      <div className="flex items-center gap-3">
        <button className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-indigo-700 hover:bg-indigo-50">
          {t.cta}
        </button>
        <button
          onClick={() => setCloseOnLeft((v) => !v)}
          onMouseEnter={() => setCloseOnLeft((v) => !v)}
          className={`text-white/70 hover:text-white ${closeOnLeft ? "order-first" : ""}`}
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
