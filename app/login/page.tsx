import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col px-6 py-16">
      <h1 className="text-2xl font-bold">Welcome back</h1>

      <button className="mt-6 w-full rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500">
        Continue with Google
      </button>

      <div className="my-6 flex items-center gap-3 text-xs text-neutral-400">
        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        or
        <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
      </div>

      <form className="grid gap-3">
        <input
          type="email"
          placeholder="Email"
          className="rounded-lg border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg border border-neutral-300 px-3 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
        />
        <button className="text-xs text-neutral-500 underline hover:text-neutral-400">
          Forgot password?
        </button>
        <button
          type="submit"
          className="mt-1 rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          Log in with email
        </button>
      </form>

      <p className="mt-6 text-sm text-neutral-500">
        No account? <Link href="/signup" className="font-medium underline">Sign up</Link>
      </p>

      <p className="mt-2 text-xs text-neutral-400">
        Error shown after any failed attempt: &ldquo;Something went wrong. Please try again.&rdquo;
      </p>
    </div>
  );
}
