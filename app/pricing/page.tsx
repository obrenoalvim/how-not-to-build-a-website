import Link from "next/link";

const PLANS = [
  {
    name: "Starter",
    price: 9,
    original: null,
    badge: null,
    features: ["1 project", "Basic reports", "Email support"],
  },
  {
    name: "Team",
    price: 49,
    original: 79,
    badge: null,
    // priced almost like Business but with a fraction of the value — the decoy
    features: ["5 projects", "Basic reports", "Email support"],
  },
  {
    name: "Business",
    price: 59,
    original: 129,
    badge: "Most Popular",
    features: ["Unlimited projects", "Advanced reports", "Priority support", "SSO"],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-bold">Simple, transparent pricing</h1>
      <p className="mt-2 text-sm text-neutral-500">Plus applicable taxes and a platform fee, shown at checkout.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-6 ${
              plan.badge
                ? "border-indigo-500 shadow-lg shadow-indigo-500/10"
                : "border-neutral-200 dark:border-neutral-800"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">
                {plan.badge}
              </span>
            )}
            <h2 className="font-bold">{plan.name}</h2>
            <div className="mt-3 flex items-baseline gap-2">
              {plan.original && (
                <span className="text-sm text-neutral-400 line-through">${plan.original}</span>
              )}
              <span className="text-3xl font-extrabold">${plan.price}</span>
              <span className="text-sm text-neutral-400">/mo</span>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {plan.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <Link
              href="/checkout"
              className="mt-6 block rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Choose {plan.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
