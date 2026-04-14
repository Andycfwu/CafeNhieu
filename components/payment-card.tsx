import Image from "next/image";
import type { PaymentMethod } from "@/data/site";

export function PaymentCard({ method }: { method: PaymentMethod }) {
  return (
    <article className="poster-shell rounded-[2.25rem] px-6 py-8 text-center md:px-8 md:py-10">
      <p className="section-kicker mb-3">{method.label}</p>
      <h3 className="font-heading text-5xl text-sage-500">{method.handle}</h3>
      <p className="mt-3 text-base text-sage-500/80">{method.note}</p>
      <div className="relative mx-auto mt-8 aspect-square w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-sage-300/55 bg-white shadow-[0_18px_45px_rgba(126,107,94,0.08)]">
        <Image src={method.qrImage} alt={`${method.label} QR code`} fill className="object-cover" sizes="(max-width: 768px) 80vw, 30vw" />
      </div>
    </article>
  );
}
