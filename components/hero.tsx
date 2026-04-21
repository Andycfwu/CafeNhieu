import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="poster-shell relative rounded-[3rem] px-6 py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <span className="floral-orb one" />
      <span className="floral-orb two" />
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="relative z-10">
          <p className="section-kicker mb-5">{siteConfig.flyerNote}</p>
          <h1 className="max-w-3xl font-heading text-6xl font-semibold leading-[0.9] tracking-[0.03em] text-rose-500 md:text-8xl xl:text-[7.5rem]">Cafe Nhiều</h1>
          <p className="mt-4 font-heading text-3xl italic text-sage-500 md:text-4xl">{siteConfig.subtitle}</p>
          <div className="soft-divider mt-10 text-sm uppercase tracking-[0.24em] text-rose-500">{siteConfig.location}</div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#menu" className="rounded-full bg-rose-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-rose-500/90">View Menu</Link>
            <Link href="#payment" className="rounded-full border border-sage-300 bg-white/70 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-sage-500 transition hover:border-sage-500 hover:bg-sage-200/35">Payment</Link>
          </div>
        </div>
        <div className="relative z-10">
          <div className="mx-auto max-w-[28rem] rounded-[2.5rem] border border-rose-300/35 bg-[#fff8f4]/90 p-5 shadow-[0_18px_65px_rgba(126,107,94,0.12)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-sage-300/45 bg-cream-100">
              <Image src="/drinks/spring-board.svg" alt="Illustrated spring menu board for Cafe Nhiều" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 34vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
