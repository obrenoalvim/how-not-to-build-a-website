"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

const UI = {
  en: {
    title: "Account settings",
    menu: {
      profile: "Profile",
      billing: "Billing",
      notifications: "Notifications",
      team: "Team members",
      advanced: "Advanced",
      advancedSub: "Subscription lives 5 menus deep in here",
    },
    confirm: {
      title: "Are you sure you want to leave all your progress behind?",
      sub: "Your projects, history and team will lose access.",
      continue: "Continue to cancel",
      keep: "Never mind, keep my account",
    },
    offer1: { text: "Before you go — take 50% off for 3 months?" },
    offer2: { text: "Last chance — how about a free month instead?" },
    offerAccept: "Yes, apply discount",
    offerDecline: "No, I'd rather cancel",
    phone: {
      title: "Almost there",
      text: "To finish cancelling, please call us Mon–Fri, 9am–5pm. Online cancellation isn't available for this plan.",
      number: "📞 1-800-FLOWLY",
    },
  },
  pt: {
    title: "Configurações da conta",
    menu: {
      profile: "Perfil",
      billing: "Cobrança",
      notifications: "Notificações",
      team: "Membros do time",
      advanced: "Avançado",
      advancedSub: "A assinatura fica escondida 5 menus abaixo daqui",
    },
    confirm: {
      title: "Tem certeza que quer deixar todo seu progresso pra trás?",
      sub: "Seus projetos, histórico e time vão perder o acesso.",
      continue: "Continuar cancelamento",
      keep: "Deixa pra lá, quero manter minha conta",
    },
    offer1: { text: "Antes de ir — que tal 50% off por 3 meses?" },
    offer2: { text: "Última chance — que tal um mês grátis?" },
    offerAccept: "Sim, aplicar desconto",
    offerDecline: "Prefiro cancelar mesmo assim",
    phone: {
      title: "Quase lá",
      text: "Pra terminar o cancelamento, ligue de seg–sex, 9h–18h. Cancelamento online não está disponível pra este plano.",
      number: "📞 0800-FLOWLY",
    },
  },
};

export default function AccountPage() {
  const [step, setStep] = useState<"menu" | "confirm" | "offer1" | "offer2" | "phone">("menu");
  const { locale } = useLocale();
  const t = UI[locale];

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-bold">{t.title}</h1>

      {step === "menu" && (
        <div className="mt-6 space-y-2 rounded-2xl border border-neutral-200 p-2 dark:border-neutral-800">
          <MenuItem label={t.menu.profile} />
          <MenuItem label={t.menu.billing} />
          <MenuItem label={t.menu.notifications} />
          <MenuItem label={t.menu.team} />
          <MenuItem label={t.menu.advanced} onClick={() => setStep("confirm")} sub={t.menu.advancedSub} />
        </div>
      )}

      {step === "confirm" && (
        <div className="mt-6 rounded-2xl border border-neutral-200 p-6 text-center dark:border-neutral-800">
          <p className="text-4xl">🥺</p>
          <h2 className="mt-2 text-xl font-bold">{t.confirm.title}</h2>
          <p className="mt-2 text-sm text-neutral-500">{t.confirm.sub}</p>
          <button
            onClick={() => setStep("offer1")}
            className="mt-4 rounded-lg bg-rose-600 px-5 py-2 font-semibold text-white hover:bg-rose-500"
          >
            {t.confirm.continue}
          </button>
          <button onClick={() => setStep("menu")} className="ml-3 text-sm text-indigo-600 underline">
            {t.confirm.keep}
          </button>
        </div>
      )}

      {step === "offer1" && (
        <Offer text={t.offer1.text} accept={t.offerAccept} decline={t.offerDecline} onDecline={() => setStep("offer2")} />
      )}

      {step === "offer2" && (
        <Offer text={t.offer2.text} accept={t.offerAccept} decline={t.offerDecline} onDecline={() => setStep("phone")} />
      )}

      {step === "phone" && (
        <div className="mt-6 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="text-lg font-bold">{t.phone.title}</h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{t.phone.text}</p>
          <p className="mt-3 font-mono text-sm">{t.phone.number}</p>
        </div>
      )}
    </div>
  );
}

function MenuItem({ label, sub, onClick }: { label: string; sub?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full flex-col items-start rounded-xl px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-neutral-900"
    >
      <span className="font-medium">{label}</span>
      {sub && <span className="text-xs text-neutral-400">{sub}</span>}
    </button>
  );
}

function Offer({
  text,
  accept,
  decline,
  onDecline,
}: {
  text: string;
  accept: string;
  decline: string;
  onDecline: () => void;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-neutral-200 p-6 text-center dark:border-neutral-800">
      <h2 className="text-lg font-bold">{text}</h2>
      <button className="mt-4 rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500">
        {accept}
      </button>
      <button onClick={onDecline} className="mt-3 block w-full text-xs text-neutral-400 underline hover:text-neutral-500">
        {decline}
      </button>
    </div>
  );
}
