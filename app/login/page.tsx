"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";

const UI = {
  en: {
    title: "Welcome back",
    google: "Continue with Google",
    or: "or",
    email: "Email",
    password: "Password",
    forgot: "Forgot password?",
    submit: "Log in with email",
    noAccount: "No account?",
    signup: "Sign up",
    errorNote: 'Error shown after any failed attempt: "Something went wrong. Please try again."',
  },
  pt: {
    title: "Bem-vindo de volta",
    google: "Continuar com Google",
    or: "ou",
    email: "Email",
    password: "Senha",
    forgot: "Esqueceu a senha?",
    submit: "Entrar com email",
    noAccount: "Não tem conta?",
    signup: "Cadastre-se",
    errorNote: 'Erro mostrado em qualquer tentativa falha: "Algo deu errado. Tente novamente."',
  },
};

export default function LoginPage() {
  const { locale } = useLocale();
  const t = UI[locale];

  return (
    <div className="mx-auto flex max-w-md flex-col px-6 py-16">
      <h1 className="text-2xl font-bold">{t.title}</h1>

      <button className="mt-6 w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500">
        {t.google}
      </button>

      <div className="my-6 flex items-center gap-3 text-xs text-neutral-400">
        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        {t.or}
        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
      </div>

      <form className="grid gap-3">
        <input
          type="email"
          placeholder={t.email}
          className="rounded-lg border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
        />
        <input
          type="password"
          placeholder={t.password}
          className="rounded-lg border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
        />
        <button className="text-xs text-neutral-500 underline hover:text-neutral-400">{t.forgot}</button>
        <button
          type="submit"
          className="mt-1 rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          {t.submit}
        </button>
      </form>

      <p className="mt-6 text-sm text-neutral-500">
        {t.noAccount} <Link href="/signup" className="font-medium underline">{t.signup}</Link>
      </p>

      <p className="mt-2 text-xs text-neutral-400">{t.errorNote}</p>
    </div>
  );
}
