import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { HeroSection } from "@/components/home/hero-section";
import { PopularGamesSection } from "@/components/home/popular-games-section";
import { GiftCardsPreviewSection } from "@/components/home/gift-cards-preview-section";
import { PaymentRailsSection } from "@/components/home/payment-rails-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PopularGamesSection />
        <GiftCardsPreviewSection />
        <PaymentRailsSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </div>
  );
}
