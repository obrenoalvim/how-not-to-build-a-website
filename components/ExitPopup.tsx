"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

const UI = {
  en: {
    title: "Wait! Get 20% off Flowly Pro",
    sub: "Join our newsletter and never miss a deal.",
    placeholder: "you@email.com",
    accept: "Yes, save 20%",
    decline: "No thanks, I enjoy overpaying",
  },
  pt: {
    title: "Espera! Ganhe 20% off no Flowly Pro",
    sub: "Assine nossa newsletter e nunca mais perca uma promoção.",
    placeholder: "voce@email.com",
    accept: "Sim, quero economizar 20%",
    decline: "Não, prefiro pagar mais caro mesmo",
  },
};

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);
  const { locale } = useLocale();
  const t = UI[locale];

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
        <h2 className="text-xl font-bold">{t.title}</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{t.sub}</p>
        <input
          type="email"
          placeholder={t.placeholder}
          className="mt-4 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
        />
        <button className="mt-3 w-full rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white hover:bg-rose-500">
          {t.accept}
        </button>
        <button
          onClick={() => setShow(false)}
          className="mt-3 text-xs text-neutral-500 underline hover:text-neutral-700"
        >
          {t.decline}
        </button>
      </div>
    </div>
  );
}
