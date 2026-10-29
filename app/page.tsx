import { HeroSection } from "@/components/hero-section";
import { connection } from "next/server";
import { RankingSection } from "@/components/ranking-section";
import { CtaSection, OnlineBookingSection, isNewPricingVisible } from "@/components/cta-section";
import { TrustSection } from "@/components/trust-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { AboutSection } from "@/components/about-section";
import { ReviewsSection } from "@/components/reviews-section";
import { LocationSection } from "@/components/location-section";
import { ClosingSection } from "@/components/closing-section";
import { FAQSection } from "@/components/faq-section";
import { ClosingCTASection } from "@/components/closing-cta-section";
import { FooterSection } from "@/components/footer-section";

export default async function Home() {
  // Use the server's request time, not a build/ISR timestamp, for the scheduled
  // pricing rollout. Reviews retain their explicit fetch revalidate: 600.
  await connection();
  const now = new Date();
  const newTone = isNewPricingVisible(now);
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <CtaSection now={now} />
      <ClosingSection />
      <AboutSection />
      <PhilosophySection />
      <RankingSection />
      <ReviewsSection />
      <LocationSection />
      <OnlineBookingSection newTone={newTone} />
      <FAQSection newTone={newTone} />
      <ClosingCTASection />
      <FooterSection />
    </main>
  );
}
