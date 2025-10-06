'use client';

import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16">
      <div className="relative z-10 text-center space-y-8">
        <AnimatedGradientText className="mb-4">
          <span className="text-sm">Trade Memecoins with Leverage</span>
        </AnimatedGradientText>

        <h1 className="text-7xl font-bold bg-gradient-to-r from-mesh-gradient-red via-purple-500 to-mesh-gradient-blue bg-clip-text text-transparent animate-gradient">
          MeshX
        </h1>

        <p className="text-2xl text-mesh-text-secondary max-w-2xl">
          Perpetual Futures for Emerging Memecoins
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <ShimmerButton
            background="linear-gradient(to right, rgb(239, 68, 68), rgb(59, 130, 246))"
            className="px-8 py-4 text-base font-semibold"
          >
            Launch App
          </ShimmerButton>

          <button className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-colors backdrop-blur-sm">
            View Pairs
          </button>
        </div>
      </div>
    </div>
  );
}
