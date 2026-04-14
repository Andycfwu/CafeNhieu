import { PaymentCard } from "@/components/payment-card";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export function PaymentSection() {
  return (
    <section id="payment" className="poster-shell rounded-[3rem] px-6 py-12 md:px-12 md:py-16">
      <SectionHeading eyebrow="Payment" title="Thank you for supporting Cafe Nhiều." centered />
      <p className="mt-5 text-center text-sm uppercase tracking-[0.22em] text-rose-500">{siteConfig.paymentNote}</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {siteConfig.paymentMethods.map((method) => <PaymentCard key={method.id} method={method} />)}
      </div>
    </section>
  );
}
