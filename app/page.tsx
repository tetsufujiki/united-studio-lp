import { HeroSection } from "@/components/hero-section";
import { RankingSection } from "@/components/ranking-section";
import { CtaSection } from "@/components/cta-section";
import { TrustSection } from "@/components/trust-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ReviewsSection } from "@/components/reviews-section";
import { LocationSection } from "@/components/location-section";
import { ClosingSection } from "@/components/closing-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RankingSection />
      <CtaSection />
      <TrustSection />
      <PhilosophySection />
      <ReviewsSection />
      <LocationSection />
      <ClosingSection />
    </main>
  );
}
