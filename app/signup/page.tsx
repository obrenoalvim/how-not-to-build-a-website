export default function SignupPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-semibold text-amber-600">⚡ Only 3 spots left this month!</p>
          <h1 className="mt-2 text-2xl font-bold">Create your Flowly account</h1>

          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="First name *" />
            <Field label="Last name *" />
            <Field label="Work email *" type="email" className="sm:col-span-2" />
            <Field label="Company name" className="sm:col-span-2" />
            <Field label="Job title" />
            <Field label="Team size" />
            <Field label="Phone number" />
            <Field label="Referral code" />
            <Field label="Password *" type="password" className="sm:col-span-2" />
            <Field label="Confirm password *" type="password" className="sm:col-span-2" />

            <label className="flex items-start gap-2 text-xs text-neutral-500 sm:col-span-2">
              <input type="checkbox" defaultChecked className="mt-0.5" />
              Send me product offers, partner deals and newsletters
            </label>

            <button
              type="submit"
              className="mt-2 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500 sm:col-span-2"
            >
              Create account
            </button>
            <p className="text-[11px] text-neutral-400 sm:col-span-2">
              * Password must contain uppercase, lowercase, a number, a symbol and be 12+ characters —
              you&apos;ll find that out only if you get it wrong.
            </p>
          </form>
        </div>

        {/* distraction sidebar competing with the form for attention */}
        <aside className="space-y-4">
          <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-5 text-white">
            <p className="font-bold">🎉 92% of new users upgrade in week one!</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
            <p className="text-sm italic text-neutral-600 dark:text-neutral-400">
              &ldquo;Flowly changed how our team works forever.&rdquo;
            </p>
            <p className="mt-2 text-xs font-semibold">— Someone, Some Company</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
            <p className="text-sm italic text-neutral-600 dark:text-neutral-400">
              &ldquo;I can&apos;t imagine going back to spreadsheets.&rdquo;
            </p>
            <p className="mt-2 text-xs font-semibold">— Someone Else, Another Company</p>
          </div>
          <div className="rounded-xl bg-amber-500 p-5 text-white">
            <p className="font-bold">⏰ Limited time: 2 months free on annual plans</p>
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
