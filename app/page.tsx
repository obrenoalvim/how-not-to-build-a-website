import Link from "next/link";
import ExitPopup from "@/components/ExitPopup";
import CountdownBanner from "@/components/CountdownBanner";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <CountdownBanner />

      <section className="mt-8 grid gap-10 sm:grid-cols-2 sm:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold text-rose-600">🔥 14 people signed up in the last hour</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get your team flowing with Flowly
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            The project management tool that finally makes sense. Trusted by fictional teams everywhere.
          </p>

          {/* Six competing CTAs, same weight, no hierarchy */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500">
              Start free trial
            </Link>
            <Link href="/pricing" className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-500">
              See pricing
            </Link>
            <Link href="/signup" className="rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white hover:bg-amber-400">
              Book a demo
            </Link>
            <Link href="/login" className="rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white hover:bg-sky-500">
              Watch video
            </Link>
            <Link href="/signup" className="rounded-lg bg-fuchsia-600 px-5 py-3 font-semibold text-white hover:bg-fuchsia-500">
              Join beta
            </Link>
            <Link href="/pricing" className="rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-500">
              Compare plans
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-semibold uppercase text-neutral-400">Featured</p>
          <div className="mt-3 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-5 text-white">
            <p className="text-[10px] uppercase tracking-widest text-white/60">Ad</p>
            <p className="mt-1 text-lg font-bold">CloudBurst Hosting — 90% off your first invoice*</p>
            <p className="mt-1 text-sm text-white/80">Styled to blend right in with the article above it.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        {["Plan", "Track", "Ship"].map((step) => (
          <div key={step} className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h3 className="font-bold">{step}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Everything your team needs to {step.toLowerCase()} together, in one place.
            </p>
          </div>
        ))}
      </section>

      <ExitPopup />
    </div>
  );
}
