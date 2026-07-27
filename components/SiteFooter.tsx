"use client";

import { useLocale } from "@/components/LocaleProvider";

const TEXT = {
  en: (
    <>
      Flowly is a fictional product. Every questionable design choice on this site is intentional —
      click the <span className="font-semibold text-rose-600">?</span> button on any page to see why it&apos;s
      here. Built as an educational catalog of dark patterns, not a real business.
    </>
  ),
  pt: (
    <>
      Flowly é um produto fictício. Toda escolha de design questionável neste site é intencional —
      clique no botão <span className="font-semibold text-rose-600">?</span> em qualquer página pra ver por que
      ela está ali. Feito como um catálogo educativo de más práticas, não um negócio real.
    </>
  ),
};

export default function SiteFooter() {
  const { locale } = useLocale();
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white py-6 dark:border-neutral-800 dark:bg-neutral-950">
      <p className="mx-auto max-w-6xl px-6 text-xs text-neutral-500">{TEXT[locale]}</p>
    </footer>
  );
}
