'use client';

import { Shield, Users, CheckCircle, Lock } from 'lucide-react';
import { NumberTicker } from '@/components/ui/number-ticker';

const badges = [
  {
    icon: Shield,
    title: 'Audited by CertiK',
    description: 'Smart contracts verified',
    highlight: true,
  },
  {
    icon: Users,
    title: 'Active Users',
    value: 10247,
    description: 'Trading daily',
  },
  {
    icon: CheckCircle,
    title: 'Built on Solana',
    description: 'Lightning-fast transactions',
  },
  {
    icon: Lock,
    title: 'SOC 2 Compliant',
    description: 'Enterprise security',
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {badge.value ? (
                        <>
                          <NumberTicker value={badge.value} className="text-white" />+
                        </>
                      ) : (
                        badge.title
                      )}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {badge.value ? badge.title : badge.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
