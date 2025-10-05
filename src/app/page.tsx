'use client';

import { Component as GradientBackground } from "@/components/ui/raycast-red-blue-animated-background";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { TrendingPairs } from "@/components/sections/trending-pairs";
import { FeatureCards } from "@/components/sections/feature-cards";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <GradientBackground />
        <div className="absolute inset-0 bg-mesh-bg-void/60" />
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <TrendingPairs />
      <FeatureCards />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
