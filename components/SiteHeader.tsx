import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/signup", label: "Sign up" },
  { href: "/login", label: "Log in" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/patterns", label: "All patterns" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Flowly<span className="text-rose-600">.</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-neutral-900 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
