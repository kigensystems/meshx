'use client';

import { Zap, Shield, TrendingUp } from 'lucide-react';
import { MagicCard } from '@/components/ui/magic-card';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute trades instantly with our optimized infrastructure. No delays, no missed opportunities.',
  },
  {
    icon: Shield,
    title: 'Secure & Audited',
    description: 'Smart contracts audited by leading firms. Your funds are protected by battle-tested security.',
  },
  {
    icon: TrendingUp,
    title: 'High Leverage',
    description: 'Trade with up to 20x leverage on emerging memecoins. Maximize your trading potential.',
  },
];

export function FeatureCards() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose MeshX
          </h2>
          <p className="text-xl text-mesh-text-secondary max-w-2xl mx-auto">
            The most advanced platform for memecoin perpetual futures
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <MagicCard
              key={feature.title}
              className="bg-white/5 backdrop-blur-md border-white/10 cursor-pointer"
              gradientColor="#ef4444"
              gradientOpacity={0.15}
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-mesh-gradient-red to-mesh-gradient-blue flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-mesh-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
