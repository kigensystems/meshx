'use client';

import { useState } from 'react';

interface OrderBookProps {
  pair: string;
}

const generateOrders = (isBid: boolean, count: number) => {
  const basePrice = 0.00001234;
  const orders = [];

  for (let i = 0; i < count; i++) {
    const priceOffset = isBid ? -i * 0.00000001 : i * 0.00000001;
    const price = basePrice + priceOffset;
    const size = Math.random() * 50000 + 10000;
    const total = price * size;

    orders.push({
      price: price.toFixed(8),
      size: size.toFixed(0),
      total: total.toFixed(2),
    });
  }

  return orders;
};

export function OrderBook({ pair }: OrderBookProps) {
  const [view, setView] = useState<'all' | 'bids' | 'asks'>('all');
  const [bids] = useState(generateOrders(true, 15));
  const [asks] = useState(generateOrders(false, 15));

  return (
    <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white">Order Book</h3>

        {/* View Toggle */}
        <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
          {[
            { key: 'all', label: 'All' },
            { key: 'bids', label: 'Bids' },
            { key: 'asks', label: 'Asks' },
          ].map((option) => (
            <button
              key={option.key}
              onClick={() => setView(option.key as 'all' | 'bids' | 'asks')}
              className={`px-3 py-1 text-xs font-semibold rounded transition-all ${
                view === option.key
                  ? 'bg-purple-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-3 gap-2 pb-2 mb-2 border-b border-white/10">
        <div className="text-xs text-slate-400 text-left">Price (USDC)</div>
        <div className="text-xs text-slate-400 text-right">Size ({pair})</div>
        <div className="text-xs text-slate-400 text-right">Total (USDC)</div>
      </div>

      {/* Order Book Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Asks (reversed to show lowest first) */}
        {(view === 'all' || view === 'asks') && (
          <div className="space-y-0.5 mb-2">
            {asks.slice().reverse().map((ask, i) => (
              <div
                key={`ask-${i}`}
                className="grid grid-cols-3 gap-2 py-1 px-2 rounded hover:bg-red-500/10 transition-colors relative group"
              >
                {/* Depth Visualization */}
                <div
                  className="absolute inset-y-0 right-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"
                  style={{ width: `${Math.random() * 60 + 20}%` }}
                />

                <div className="text-xs font-mono text-red-400 relative z-10">{ask.price}</div>
                <div className="text-xs font-mono text-white text-right relative z-10">{ask.size}</div>
                <div className="text-xs font-mono text-slate-400 text-right relative z-10">{ask.total}</div>
              </div>
            ))}
          </div>
        )}

        {/* Spread */}
        {view === 'all' && (
          <div className="py-2 px-2 bg-white/5 rounded-lg mb-2 flex items-center justify-between">
            <span className="text-xs text-slate-400">Spread</span>
            <span className="text-xs font-mono text-purple-400 font-bold">
              $0.00000002 (0.16%)
            </span>
          </div>
        )}

        {/* Bids */}
        {(view === 'all' || view === 'bids') && (
          <div className="space-y-0.5">
            {bids.map((bid, i) => (
              <div
                key={`bid-${i}`}
                className="grid grid-cols-3 gap-2 py-1 px-2 rounded hover:bg-green-500/10 transition-colors relative group"
              >
                {/* Depth Visualization */}
                <div
                  className="absolute inset-y-0 right-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"
                  style={{ width: `${Math.random() * 60 + 20}%` }}
                />

                <div className="text-xs font-mono text-green-400 relative z-10">{bid.price}</div>
                <div className="text-xs font-mono text-white text-right relative z-10">{bid.size}</div>
                <div className="text-xs font-mono text-slate-400 text-right relative z-10">{bid.total}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
        <div>
          <div className="text-xs text-slate-400 mb-1">Total Bids</div>
          <div className="text-sm font-bold text-green-400 font-mono">$124.5K</div>
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-1">Total Asks</div>
          <div className="text-sm font-bold text-red-400 font-mono">$118.2K</div>
        </div>
      </div>
    </div>
  );
}
