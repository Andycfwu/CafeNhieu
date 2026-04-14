import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-rose-300/30 bg-white/70 px-6 py-5 text-center shadow-[0_16px_35px_rgba(126,107,94,0.06)]">
        <p className="font-heading text-3xl tracking-[0.32em] text-rose-500">{siteConfig.location}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-sage-500/80">Soft spring drinks, dorm pop-up charm</p>
      </div>
    </footer>
  );
}
