export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <p className="mt-1 text-sm text-rose-600">⏳ Your cart expires in 04:59 · 👀 2 people are viewing this plan</p>

      <div className="mt-6 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <Row label="Flowly Business (annual)" value="$59.00" />
        <Row label="Trip protection add-on" value="$4.99" note="added automatically" />
        <Row label="Service fee" value="$3.50" note="shown here for the first time" />
        <Row label="Convenience fee" value="$1.99" note="shown here for the first time" />

        <label className="mt-4 flex items-start gap-2 text-xs text-neutral-500">
          <input type="checkbox" defaultChecked className="mt-0.5" />
          Keep trip protection add-on ($4.99/mo)
        </label>
        <button className="mt-2 text-xs text-neutral-400 underline hover:text-neutral-500">
          No, I don&apos;t want to protect my trip
        </button>

        <div className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-800">
          <p className="text-sm text-neutral-500">Account required to continue — no guest checkout.</p>
          <input
            type="email"
            placeholder="Create a password to finish"
            className="mt-3 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
          />
          <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white hover:bg-indigo-500">
            Pay $69.48/mo
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
