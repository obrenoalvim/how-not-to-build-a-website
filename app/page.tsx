"use client";

import Link from "next/link";
import ExitPopup from "@/components/ExitPopup";
import CountdownBanner from "@/components/CountdownBanner";
import { useLocale } from "@/components/LocaleProvider";

const UI = {
  en: {
    activity: "🔥 14 people signed up in the last hour",
    headline: "Get your team flowing with Flowly",
    sub: "The project management tool that finally makes sense. Trusted by fictional teams everywhere.",
    ctas: ["Start free trial", "See pricing", "Book a demo", "Watch video", "Join beta", "Compare plans"],
    featured: "Featured",
    ad: "Ad",
    adTitle: "CloudBurst Hosting — 90% off your first invoice*",
    adSub: "Styled to blend right in with the article above it.",
    steps: [
      { name: "Plan", desc: "plan" },
      { name: "Track", desc: "track" },
      { name: "Ship", desc: "ship" },
    ],
    stepDesc: (s: string) => `Everything your team needs to ${s} together, in one place.`,
  },
  pt: {
    activity: "🔥 14 pessoas se cadastraram na última hora",
    headline: "Coloque seu time pra fluir com o Flowly",
    sub: "A ferramenta de gestão de projetos que finalmente faz sentido. Usada por times fictícios em todo lugar.",
    ctas: ["Iniciar teste grátis", "Ver preços", "Agendar demo", "Assistir vídeo", "Entrar no beta", "Comparar planos"],
    featured: "Destaque",
    ad: "Anúncio",
    adTitle: "CloudBurst Hosting — 90% off na primeira fatura*",
    adSub: "Estilizado pra se misturar com o conteúdo acima.",
    steps: [
      { name: "Planejar", desc: "planejar" },
      { name: "Acompanhar", desc: "acompanhar" },
      { name: "Entregar", desc: "entregar" },
    ],
    stepDesc: (s: string) => `Tudo que seu time precisa pra ${s} junto, em um só lugar.`,
  },
};

const CTA_HREF = ["/signup", "/pricing", "/signup", "/login", "/signup", "/pricing"];
const CTA_COLOR = [
  "bg-indigo-600 hover:bg-indigo-500",
  "bg-emerald-600 hover:bg-emerald-500",
  "bg-amber-500 hover:bg-amber-400",
  "bg-sky-600 hover:bg-sky-500",
  "bg-fuchsia-600 hover:bg-fuchsia-500",
  "bg-orange-600 hover:bg-orange-500",
];

export default function Home() {
  const { locale } = useLocale();
  const t = UI[locale];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <CountdownBanner />

      <section className="mt-8 grid gap-10 sm:grid-cols-2 sm:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold text-rose-600">{t.activity}</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t.headline}</h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">{t.sub}</p>

          {/* Six competing CTAs, same weight, no hierarchy */}
          <div className="mt-8 flex flex-wrap gap-3">
            {t.ctas.map((label, i) => (
              <Link
                key={label}
                href={CTA_HREF[i]}
                className={`rounded-lg px-5 py-3 font-semibold text-white ${CTA_COLOR[i]}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-semibold uppercase text-neutral-400">{t.featured}</p>
          <div className="mt-3 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-5 text-white">
            <p className="text-[10px] uppercase tracking-widest text-white/60">{t.ad}</p>
            <p className="mt-1 text-lg font-bold">{t.adTitle}</p>
            <p className="mt-1 text-sm text-white/80">{t.adSub}</p>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        {t.steps.map((step) => (
          <div key={step.name} className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h3 className="font-bold">{step.name}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{t.stepDesc(step.desc)}</p>
          </div>
        ))}
      </section>

      <ExitPopup />
    </div>
  );
}
