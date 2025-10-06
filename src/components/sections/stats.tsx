'use client';

import { BentoGrid } from "@/components/ui/bento-grid";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";
import { TrendingUp, Users, Layers, Zap, DollarSign, Shield } from "lucide-react";

const stats = [
  {
    label: '24h Volume',
    value: 50.5,
    prefix: '$',
    suffix: 'M',
    icon: TrendingUp,
    className: 'col-span-2 row-span-1',
    decimalPlaces: 1,
  },
  {
    label: 'Total Traders',
    value: 10247,
    prefix: '',
    suffix: '',
    icon: Users,
    className: 'col-span-1 row-span-1',
    decimalPlaces: 0,
  },
  {
    label: 'Pairs Listed',
    value: 125,
    prefix: '',
    suffix: '',
    icon: Layers,
    className: 'col-span-1 row-span-1',
    decimalPlaces: 0,
  },
  {
    label: 'Uptime',
    value: 99.9,
    prefix: '',
    suffix: '%',
    icon: Shield,
    className: 'col-span-1 row-span-1',
    decimalPlaces: 1,
  },
  {
    label: 'Trading Fee',
    value: 0.05,
    prefix: '',
    suffix: '%',
    icon: DollarSign,
    className: 'col-span-1 row-span-1',
    decimalPlaces: 2,
  },
  {
    label: 'TVL',
    value: 12.3,
    prefix: '$',
    suffix: 'M',
    icon: Zap,
    className: 'col-span-1 row-span-1',
    decimalPlaces: 1,
  },
];

export function Stats() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Platform Statistics
        </h2>

        <BentoGrid className="auto-rows-[12rem]">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-xl",
                  "bg-white/5 backdrop-blur-md border border-white/10",
                  "hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300",
                  stat.className
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div className="flex items-start justify-between">
                    <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>

                  <div>
                    <div className="text-4xl font-bold text-white mb-2 font-mono">
                      {stat.prefix}
                      <NumberTicker
                        value={stat.value}
                        decimalPlaces={stat.decimalPlaces}
                        className="text-white"
                      />
                      {stat.suffix}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">
                      {stat.label}
                    </div>
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
