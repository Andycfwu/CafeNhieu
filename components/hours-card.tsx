import { siteConfig } from "@/data/site";

export function HoursCard() {
  return (
    <div className="rounded-[2rem] border border-rose-300/35 bg-white/75 p-6 shadow-[0_18px_45px_rgba(126,107,94,0.08)]">
      <p className="section-kicker mb-3">Cafe Hours</p>
      <div className="space-y-4">
        {siteConfig.hours.map((entry) => (
          <div key={entry.dateLabel} className="flex items-start justify-between gap-4 border-b border-rose-300/25 pb-4 last:border-b-0 last:pb-0">
            <div>
              <p className="font-heading text-2xl text-sage-500">{entry.dateLabel}</p>
              {entry.note ? <p className="text-sm text-rose-500">{entry.note}</p> : null}
            </div>
            <p className="text-right text-sm font-semibold uppercase tracking-[0.18em] text-sage-500/90">{entry.hoursLabel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
