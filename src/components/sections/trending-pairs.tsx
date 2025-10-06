'use client';

import { Button } from '@/components/ui/moving-border';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const generateSparklineData = (isPositive: boolean) => {
  const points = 24;
  const data = [];
  let value = 100;

  for (let i = 0; i < points; i++) {
    const change = (Math.random() - (isPositive ? 0.4 : 0.6)) * 5;
    value += change;
    data.push({ value });
  }

  return data;
};

const trendingPairs = [
  {
    symbol: '$BONK',
    price: '0.00001234',
    change: '+12.5',
    volume: '1.2M',
    sparkline: generateSparklineData(true)
  },
  {
    symbol: '$WIF',
    price: '0.000456',
    change: '+8.3',
    volume: '2.4M',
    sparkline: generateSparklineData(true)
  },
  {
    symbol: '$PEPE',
    price: '0.0000089',
    change: '-3.2',
    volume: '3.1M',
    sparkline: generateSparklineData(false)
  },
  {
    symbol: '$MYRO',
    price: '0.00234',
    change: '+15.7',
    volume: '890K',
    sparkline: generateSparklineData(true)
  },
  {
    symbol: '$POPCAT',
    price: '0.000123',
    change: '+22.1',
    volume: '1.5M',
    sparkline: generateSparklineData(true)
  },
  {
    symbol: '$MEW',
    price: '0.000789',
    change: '-5.4',
    volume: '760K',
    sparkline: generateSparklineData(false)
  },
];

export function TrendingPairs() {
  return (
    <section id="trending" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Trending Pairs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingPairs.map((pair) => {
            const isPositive = pair.change.startsWith('+');
            const borderColor = isPositive
              ? 'bg-[radial-gradient(#10b981_40%,transparent_60%)]'
              : 'bg-[radial-gradient(#ef4444_40%,transparent_60%)]';

            return (
              <Button
                key={pair.symbol}
                borderRadius="1.5rem"
                containerClassName="w-full h-auto"
                borderClassName={borderColor}
                className="bg-slate-900/90 border-slate-800 p-6 h-auto"
                as="div"
              >
                <div className="w-full space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                      <div className="text-lg font-bold text-white">{pair.symbol}</div>
                    </div>
                    {isPositive ? (
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-red-500" />
                    )}
                  </div>

                  <div className="h-16 -mx-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={pair.sparkline}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke={isPositive ? '#10b981' : '#ef4444'}
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Price</span>
                      <span className="text-white font-mono text-base">${pair.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">24h Change</span>
                      <span
                        className={`font-bold text-base ${
                          isPositive ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {pair.change}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Volume</span>
                      <span className="text-white font-semibold text-base">${pair.volume}</span>
                    </div>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
