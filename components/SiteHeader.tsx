"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

const NAV = {
  en: [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/signup", label: "Sign up" },
    { href: "/login", label: "Log in" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/patterns", label: "All patterns" },
  ],
  pt: [
    { href: "/", label: "Início" },
    { href: "/pricing", label: "Preços" },
    { href: "/signup", label: "Cadastro" },
    { href: "/login", label: "Login" },
    { href: "/dashboard", label: "Painel" },
    { href: "/patterns", label: "Todas as práticas" },
  ],
};

export default function SiteHeader() {
  const { locale, setLocale } = useLocale();
  const nav = NAV[locale];

  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Flowly<span className="text-rose-600">.</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neutral-900 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
          <div className="flex overflow-hidden rounded-full border border-neutral-300 text-xs font-semibold dark:border-neutral-700">
            <button
              onClick={() => setLocale("en")}
              className={`px-2.5 py-1 ${locale === "en" ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "text-neutral-500"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLocale("pt")}
              className={`px-2.5 py-1 ${locale === "pt" ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "text-neutral-500"}`}
            >
              PT
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
