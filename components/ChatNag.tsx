"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

const MESSAGES = {
  en: [
    "Still there? Ask me anything! 👋",
    "Psst — 20% off if you chat now!",
    "Need help? I'm right here!",
    "Don't miss out, chat with us!",
  ],
  pt: [
    "Ainda aí? Pergunta o que quiser! 👋",
    "Psiu — 20% off se você conversar agora!",
    "Precisa de ajuda? Tô bem aqui!",
    "Não perca essa, fala com a gente!",
  ],
};

export default function ChatNag() {
  const [open, setOpen] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const { locale } = useLocale();

  useEffect(() => {
    const id = setInterval(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES[locale].length);
      setOpen(true);
    }, 6000);
    return () => clearInterval(id);
  }, [locale]);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
      {open && (
        <div className="max-w-[220px] rounded-2xl rounded-bl-none bg-white p-3 text-sm text-neutral-800 shadow-xl">
          {MESSAGES[locale][msgIndex]}
          <button
            onClick={() => setOpen(false)}
            className="ml-2 text-xs text-neutral-400 hover:text-neutral-600"
          >
            ✕
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl shadow-lg hover:bg-indigo-500"
        aria-label="Chat with us"
      >
        💬
      </button>
    </div>
  );
}
