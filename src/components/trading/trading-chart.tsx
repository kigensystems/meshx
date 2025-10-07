'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';

interface TradingChartProps {
  pair: string;
}

const generateChartData = () => {
  const data = [];
  let price = 1000 + Math.random() * 100;

  for (let i = 0; i < 100; i++) {
    const change = (Math.random() - 0.48) * 20;
    price += change;
    data.push({
      time: `${Math.floor(i / 4)}:${(i % 4) * 15}`,
      price: price,
    });
  }

  return data;
};

const timeframes = ['1m', '5m', '15m', '1H', '4H', '1D', '1W'];

export function TradingChart({ pair }: TradingChartProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('15m');
  const [data] = useState(generateChartData());

  const currentPrice = data[data.length - 1]?.price || 0;
  const previousPrice = data[data.length - 2]?.price || 0;
  const priceChange = currentPrice - previousPrice;
  const priceChangePercent = ((priceChange / previousPrice) * 100).toFixed(2);
  const isPositive = priceChange >= 0;

  return (
    <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-white">{pair}</h2>
            <div className={`flex items-center gap-1 text-sm font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {isPositive ? '+' : ''}{priceChangePercent}%
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-bold text-white font-mono">
              ${currentPrice.toFixed(8)}
            </span>
            <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{priceChange.toFixed(8)}
            </span>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-3 py-1 text-xs font-semibold rounded transition-all ${
                selectedTimeframe === tf
                  ? 'bg-purple-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="time"
              stroke="rgba(255,255,255,0.3)"
              style={{ fontSize: '12px' }}
              interval={19}
            />
            <YAxis
              stroke="rgba(255,255,255,0.3)"
              style={{ fontSize: '12px' }}
              domain={['auto', 'auto']}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#94a3b8' }}
              itemStyle={{ color: '#fff' }}
              formatter={(value: number) => [`$${value.toFixed(8)}`, 'Price']}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke={isPositive ? '#10b981' : '#ef4444'}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-white/10">
        <div>
          <div className="text-xs text-slate-400 mb-1">24h High</div>
          <div className="text-sm font-bold text-white font-mono">
            ${(currentPrice * 1.05).toFixed(8)}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-1">24h Low</div>
          <div className="text-sm font-bold text-white font-mono">
            ${(currentPrice * 0.95).toFixed(8)}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-1">24h Volume</div>
          <div className="text-sm font-bold text-white">$1.2M</div>
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-1">Open Interest</div>
          <div className="text-sm font-bold text-white">$450K</div>
        </div>
      </div>
    </div>
  );
}
