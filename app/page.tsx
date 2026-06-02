import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { RankingSection } from "@/components/ranking-section";
import { CtaSection } from "@/components/cta-section";

// Lazy load below-the-fold sections for better LCP
const TrustSection = dynamic(
  () => import("@/components/trust-section").then((mod) => ({ default: mod.TrustSection })),
  { ssr: true }
);
const PhilosophySection = dynamic(
  () => import("@/components/philosophy-section").then((mod) => ({ default: mod.PhilosophySection })),
  { ssr: true }
);
const ReviewsSection = dynamic(
  () => import("@/components/reviews-section").then((mod) => ({ default: mod.ReviewsSection })),
  { ssr: true }
);
const LocationSection = dynamic(
  () => import("@/components/location-section").then((mod) => ({ default: mod.LocationSection })),
  { ssr: true }
);
const ClosingSection = dynamic(
  () => import("@/components/closing-section").then((mod) => ({ default: mod.ClosingSection })),
  { ssr: true }
);

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
