'use client';

import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { TrendingPairs } from "@/components/sections/trending-pairs";
import { FeatureCards } from "@/components/sections/feature-cards";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TrustBadges } from "@/components/sections/trust-badges";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <AnimatedGradientBackground />
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <TrendingPairs />
      <FeatureCards />
      <HowItWorks />
      <TrustBadges />
      <FAQ />
      <Footer />
    </main>
  );
}
