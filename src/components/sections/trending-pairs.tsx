'use client';

import { MagicCard } from '@/components/ui/magic-card';
import { TrendingUp, TrendingDown } from 'lucide-react';

const trendingPairs = [
  { symbol: '$BONK', price: '0.00001234', change: '+12.5', volume: '1.2M' },
  { symbol: '$WIF', price: '0.000456', change: '+8.3', volume: '2.4M' },
  { symbol: '$PEPE', price: '0.0000089', change: '-3.2', volume: '3.1M' },
  { symbol: '$MYRO', price: '0.00234', change: '+15.7', volume: '890K' },
  { symbol: '$POPCAT', price: '0.000123', change: '+22.1', volume: '1.5M' },
  { symbol: '$MEW', price: '0.000789', change: '-5.4', volume: '760K' },
];

export function TrendingPairs() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Trending Pairs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingPairs.map((pair) => {
            const isPositive = pair.change.startsWith('+');
            return (
              <MagicCard
                key={pair.symbol}
                className="bg-white/5 backdrop-blur-md border-white/10 cursor-pointer group"
                gradientColor={isPositive ? "#22c55e" : "#ef4444"}
                gradientOpacity={0.2}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mesh-gradient-red to-mesh-gradient-blue" />
                      <div className="text-lg font-bold text-white">{pair.symbol}</div>
                    </div>
                    {isPositive ? (
                      <TrendingUp className="w-5 h-5 text-mesh-long" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-mesh-short" />
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-mesh-text-secondary text-sm">Price</span>
                      <span className="text-white font-mono text-lg">${pair.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-mesh-text-secondary text-sm">24h Change</span>
                      <span
                        className={`font-bold text-lg ${
                          isPositive ? 'text-mesh-long' : 'text-mesh-short'
                        }`}
                      >
                        {pair.change}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-mesh-text-secondary text-sm">Volume</span>
                      <span className="text-white font-semibold">${pair.volume}</span>
                    </div>
                  </div>
                </div>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
