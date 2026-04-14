import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MenuSection } from "@/components/menu-section";
import { Navbar } from "@/components/navbar";
import { PaymentSection } from "@/components/payment-section";

export default function HomePage() {
  return (
    <main className="pb-10">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 md:px-8">
        <Hero />
        <MenuSection />
        <PaymentSection />
      </div>
      <Footer />
    </main>
  );
}
