"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

const UI = {
  en: (mm: string, ss: string) => `⏳ Launch discount ends in ${mm}:${ss} — offer never actually expires`,
  pt: (mm: string, ss: string) => `⏳ Desconto de lançamento acaba em ${mm}:${ss} — a oferta nunca expira de verdade`,
};

export default function CountdownBanner() {
  const [seconds, setSeconds] = useState(299);
  const { locale } = useLocale();

  useEffect(() => {
    const id = setInterval(() => {
      // ponytail: resets instead of expiring — the point of this demo is that it's fake
      setSeconds((s) => (s <= 0 ? 299 : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white">
      {UI[locale](mm, ss)}
    </div>
  );
}
