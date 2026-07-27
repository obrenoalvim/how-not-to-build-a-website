"use client";

import { useLocale } from "@/components/LocaleProvider";

const UI = {
  en: {
    scarcity: "⚡ Only 3 spots left this month!",
    title: "Create your Flowly account",
    fields: {
      firstName: "First name *",
      lastName: "Last name *",
      email: "Work email *",
      company: "Company name",
      job: "Job title",
      team: "Team size",
      phone: "Phone number",
      referral: "Referral code",
      password: "Password *",
      confirm: "Confirm password *",
    },
    marketing: "Send me product offers, partner deals and newsletters",
    submit: "Create account",
    passwordNote:
      "* Password must contain uppercase, lowercase, a number, a symbol and be 12+ characters — you'll find that out only if you get it wrong.",
    sidebar: {
      upgrade: "🎉 92% of new users upgrade in week one!",
      quote1: "“Flowly changed how our team works forever.”",
      author1: "— Someone, Some Company",
      quote2: "“I can’t imagine going back to spreadsheets.”",
      author2: "— Someone Else, Another Company",
      limited: "⏰ Limited time: 2 months free on annual plans",
    },
  },
  pt: {
    scarcity: "⚡ Só restam 3 vagas este mês!",
    title: "Crie sua conta Flowly",
    fields: {
      firstName: "Nome *",
      lastName: "Sobrenome *",
      email: "Email de trabalho *",
      company: "Nome da empresa",
      job: "Cargo",
      team: "Tamanho do time",
      phone: "Telefone",
      referral: "Código de indicação",
      password: "Senha *",
      confirm: "Confirmar senha *",
    },
    marketing: "Quero receber ofertas do produto, promoções de parceiros e newsletters",
    submit: "Criar conta",
    passwordNote:
      "* A senha precisa ter maiúscula, minúscula, número, símbolo e 12+ caracteres — você só vai descobrir isso se errar.",
    sidebar: {
      upgrade: "🎉 92% dos novos usuários fazem upgrade na primeira semana!",
      quote1: "“O Flowly mudou pra sempre como nosso time trabalha.”",
      author1: "— Alguém, Alguma Empresa",
      quote2: "“Não consigo mais imaginar voltar pra planilhas.”",
      author2: "— Outra Pessoa, Outra Empresa",
      limited: "⏰ Tempo limitado: 2 meses grátis nos planos anuais",
    },
  },
};

export default function SignupPage() {
  const { locale } = useLocale();
  const t = UI[locale];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-semibold text-amber-600">{t.scarcity}</p>
          <h1 className="mt-2 text-2xl font-bold">{t.title}</h1>

          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label={t.fields.firstName} />
            <Field label={t.fields.lastName} />
            <Field label={t.fields.email} type="email" className="sm:col-span-2" />
            <Field label={t.fields.company} className="sm:col-span-2" />
            <Field label={t.fields.job} />
            <Field label={t.fields.team} />
            <Field label={t.fields.phone} />
            <Field label={t.fields.referral} />
            <Field label={t.fields.password} type="password" className="sm:col-span-2" />
            <Field label={t.fields.confirm} type="password" className="sm:col-span-2" />

            <label className="flex items-start gap-2 text-xs text-neutral-500 sm:col-span-2">
              <input type="checkbox" defaultChecked className="mt-0.5" />
              {t.marketing}
            </label>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500 sm:col-span-2"
            >
              {t.submit}
            </button>
            <p className="text-[11px] text-neutral-400 sm:col-span-2">{t.passwordNote}</p>
          </form>
        </div>

        {/* distraction sidebar competing with the form for attention */}
        <aside className="space-y-4">
          <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-5 text-white">
            <p className="font-bold">{t.sidebar.upgrade}</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
            <p className="text-sm italic text-neutral-600 dark:text-neutral-400">{t.sidebar.quote1}</p>
            <p className="mt-2 text-xs font-semibold">{t.sidebar.author1}</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
            <p className="text-sm italic text-neutral-600 dark:text-neutral-400">{t.sidebar.quote2}</p>
            <p className="mt-2 text-xs font-semibold">{t.sidebar.author2}</p>
          </div>
          <div className="rounded-xl bg-amber-500 p-5 text-white">
            <p className="font-bold">{t.sidebar.limited}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  className = "",
}: {
  label: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`text-sm ${className}`}>
      <span className="mb-1 block text-[11px] text-neutral-500">{label}</span>
      <input
        type={type}
        className="w-full rounded-lg border border-neutral-300 px-3 py-2 dark:border-neutral-700 dark:bg-neutral-800"
      />
    </label>
  );
}
