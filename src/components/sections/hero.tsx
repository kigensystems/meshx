'use client';

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { GlassButton } from "@/components/ui/liquid-glass";

export function Hero() {
  return (
    <LampContainer className="bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center space-y-8"
      >
        <AnimatedGradientText className="mb-4">
          <span className="text-sm">Trade Memecoins with Leverage</span>
        </AnimatedGradientText>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          MeshX
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
          Perpetual Futures for Emerging Memecoins
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <GlassButton href="/trade">
            <div className="text-base text-white">Launch App</div>
          </GlassButton>

          <GlassButton href="#trending">
            <div className="text-base text-white">View Pairs</div>
          </GlassButton>
        </div>
      </motion.div>
    </LampContainer>
  );
}
