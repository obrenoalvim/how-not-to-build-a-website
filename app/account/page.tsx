"use client";

import { useState } from "react";

export default function AccountPage() {
  const [step, setStep] = useState<"menu" | "confirm" | "offer1" | "offer2" | "phone">("menu");

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-bold">Account settings</h1>

      {step === "menu" && (
        <div className="mt-6 space-y-2 rounded-2xl border border-neutral-200 p-2 dark:border-neutral-800">
          <MenuItem label="Profile" />
          <MenuItem label="Billing" />
          <MenuItem label="Notifications" />
          <MenuItem label="Team members" />
          <MenuItem label="Advanced" onClick={() => setStep("confirm")} sub="Subscription lives 5 menus deep in here" />
        </div>
      )}

      {step === "confirm" && (
        <div className="mt-6 rounded-2xl border border-neutral-200 p-6 text-center dark:border-neutral-800">
          <p className="text-4xl">🥺</p>
          <h2 className="mt-2 text-xl font-bold">Are you sure you want to leave all your progress behind?</h2>
          <p className="mt-2 text-sm text-neutral-500">Your projects, history and team will lose access.</p>
          <button
            onClick={() => setStep("offer1")}
            className="mt-4 rounded-lg bg-rose-600 px-5 py-2 font-semibold text-white hover:bg-rose-500"
          >
            Continue to cancel
          </button>
          <button onClick={() => setStep("menu")} className="ml-3 text-sm text-indigo-600 underline">
            Never mind, keep my account
          </button>
        </div>
      )}

      {step === "offer1" && (
        <Offer
          text="Before you go — take 50% off for 3 months?"
          onDecline={() => setStep("offer2")}
        />
      )}

      {step === "offer2" && (
        <Offer
          text="Last chance — how about a free month instead?"
          onDecline={() => setStep("phone")}
        />
      )}

      {step === "phone" && (
        <div className="mt-6 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="text-lg font-bold">Almost there</h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            To finish cancelling, please call us Mon–Fri, 9am–5pm. Online cancellation isn&apos;t available for
            this plan.
          </p>
          <p className="mt-3 font-mono text-sm">📞 1-800-FLOWLY</p>
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

function Offer({ text, onDecline }: { text: string; onDecline: () => void }) {
  return (
    <div className="mt-6 rounded-2xl border border-neutral-200 p-6 text-center dark:border-neutral-800">
      <h2 className="text-lg font-bold">{text}</h2>
      <button className="mt-4 rounded-lg bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-500">
        Yes, apply discount
      </button>
      <button onClick={onDecline} className="mt-3 block w-full text-xs text-neutral-400 underline hover:text-neutral-500">
        No, I&apos;d rather cancel
      </button>
    </div>
  );
}
