import UpgradeBanner from "@/components/UpgradeBanner";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="relative">
          <span className="text-2xl">🔔</span>
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white">
            3
          </span>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">Profile completion</span>
          <span className="font-bold text-indigo-600">72%</span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-neutral-200 dark:bg-neutral-800">
          <div className="h-2 w-[72%] rounded-full bg-indigo-600" />
        </div>
        <p className="mt-2 text-xs text-neutral-400">
          Add a team member to unlock the next step (there&apos;s always a next step).
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {["Projects", "Tasks", "Team"].map((label) => (
          <div key={label} className="rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
            <p className="text-xs text-neutral-400">{label}</p>
            <p className="mt-1 text-2xl font-bold">0</p>
          </div>
        ))}
      </div>

      <UpgradeBanner />
    </div>
  );
}
