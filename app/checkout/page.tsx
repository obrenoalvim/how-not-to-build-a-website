"use client";

import { useLocale } from "@/components/LocaleProvider";

const UI = {
  en: {
    title: "Checkout",
    urgency: "⏳ Your cart expires in 04:59 · 👀 2 people are viewing this plan",
    plan: "Flowly Business (annual)",
    addon: "Trip protection add-on",
    addonNote: "added automatically",
    serviceFee: "Service fee",
    convenienceFee: "Convenience fee",
    feeNote: "shown here for the first time",
    keepAddon: "Keep trip protection add-on ($4.99/mo)",
    decline: "No, I don't want to protect my trip",
    accountRequired: "Account required to continue — no guest checkout.",
    passwordPlaceholder: "Create a password to finish",
    pay: "Pay $69.48/mo",
  },
  pt: {
    title: "Finalização",
    urgency: "⏳ Seu carrinho expira em 04:59 · 👀 2 pessoas estão vendo este plano",
    plan: "Flowly Empresarial (anual)",
    addon: "Adicional de proteção de viagem",
    addonNote: "adicionado automaticamente",
    serviceFee: "Taxa de serviço",
    convenienceFee: "Taxa de conveniência",
    feeNote: "mostrada aqui pela primeira vez",
    keepAddon: "Manter proteção de viagem (R$4,99/mês)",
    decline: "Não, não quero proteger minha viagem",
    accountRequired: "Conta obrigatória pra continuar — sem finalização como convidado.",
    passwordPlaceholder: "Crie uma senha pra terminar",
    pay: "Pagar R$69,48/mês",
  },
};

export default function CheckoutPage() {
  const { locale } = useLocale();
  const t = UI[locale];

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-bold">{t.title}</h1>
      <p className="mt-1 text-sm text-rose-600">{t.urgency}</p>

      <div className="mt-6 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <Row label={t.plan} value="$59.00" />
        <Row label={t.addon} value="$4.99" note={t.addonNote} />
        <Row label={t.serviceFee} value="$3.50" note={t.feeNote} />
        <Row label={t.convenienceFee} value="$1.99" note={t.feeNote} />

        <label className="mt-4 flex items-start gap-2 text-xs text-neutral-500">
          <input type="checkbox" defaultChecked className="mt-0.5" />
          {t.keepAddon}
        </label>
        <button className="mt-2 text-xs text-neutral-400 underline hover:text-neutral-500">{t.decline}</button>

        <div className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-800">
          <p className="text-sm text-neutral-500">{t.accountRequired}</p>
          <input
            type="email"
            placeholder={t.passwordPlaceholder}
            className="mt-3 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
          />
          <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-500">
            {t.pay}
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm">
      <span>
        {label}
        {note && <span className="ml-2 text-[11px] text-neutral-400">({note})</span>}
      </span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
