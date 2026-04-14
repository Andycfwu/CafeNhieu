import Link from "next/link";
import { siteConfig } from "@/data/site";

const navItems = [
  { href: "#top", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#payment", label: "Payment" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-rose-300/40 bg-white/70 px-5 py-3 shadow-[0_10px_40px_rgba(126,107,94,0.08)] backdrop-blur md:px-8">
        <Link href="#top" className="font-heading text-2xl font-semibold tracking-[0.08em] text-rose-500">
          Cafe Nhiều
        </Link>
        <nav className="flex items-center gap-2 md:gap-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-sage-500 transition hover:bg-rose-200/50 hover:text-rose-500 md:px-4">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden rounded-full border border-sage-300/70 bg-sage-200/40 px-4 py-2 text-sm text-sage-500 md:block">
          {siteConfig.location}
        </div>
      </div>
    </header>
  );
}
