'use client';

import { Zap, Shield, TrendingUp, Lock, Gauge, Coins } from 'lucide-react';
import { BentoGrid } from '@/components/ui/bento-grid';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Execution',
    description: 'Execute trades instantly with our optimized infrastructure. No delays, no missed opportunities.',
    className: 'col-span-2 row-span-1',
  },
  {
    icon: Shield,
    title: 'Secure & Audited',
    description: 'Smart contracts audited by leading security firms.',
    className: 'col-span-1 row-span-1',
  },
  {
    icon: TrendingUp,
    title: 'Up to 20x Leverage',
    description: 'Trade with high leverage on emerging memecoins. Maximize your trading potential.',
    className: 'col-span-1 row-span-1',
  },
  {
    icon: Lock,
    title: 'Non-Custodial',
    description: 'Your keys, your crypto. We never hold your funds.',
    className: 'col-span-1 row-span-1',
  },
  {
    icon: Gauge,
    title: 'Real-Time Updates',
    description: 'Live price feeds and instant order execution powered by Solana.',
    className: 'col-span-1 row-span-1',
  },
  {
    icon: Coins,
    title: 'Deep Liquidity',
    description: 'Trade with minimal slippage thanks to our optimized liquidity pools.',
    className: 'col-span-1 row-span-1',
  },
];

export function FeatureCards() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose MeshX
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            The most advanced platform for memecoin perpetual futures
          </p>
        </div>

        <BentoGrid className="auto-rows-[16rem]">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-xl",
                  "bg-white/5 backdrop-blur-md border border-white/10",
                  "hover:bg-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20",
                  "transition-all duration-300 hover:-translate-y-1",
                  feature.className
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col h-full p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
