'use client';

import { TrendingUp, TrendingDown, Search } from 'lucide-react';
import { useState } from 'react';

interface MarketSelectorProps {
  selectedPair: string;
  onSelectPair: (pair: string) => void;
}

const markets = [
  { symbol: '$BONK', price: '0.00001234', change: '+12.5', volume: '1.2M' },
  { symbol: '$WIF', price: '0.000456', change: '+8.3', volume: '2.4M' },
  { symbol: '$PEPE', price: '0.0000089', change: '-3.2', volume: '3.1M' },
  { symbol: '$MYRO', price: '0.00234', change: '+15.7', volume: '890K' },
  { symbol: '$POPCAT', price: '0.000123', change: '+22.1', volume: '1.5M' },
  { symbol: '$MEW', price: '0.000789', change: '-5.4', volume: '760K' },
  { symbol: '$DOGE', price: '0.078', change: '+5.2', volume: '8.9M' },
  { symbol: '$SHIB', price: '0.00000891', change: '-2.1', volume: '4.5M' },
];

export function MarketSelector({ selectedPair, onSelectPair }: MarketSelectorProps) {
  const [search, setSearch] = useState('');

  const filteredMarkets = markets.filter((m) =>
    m.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-sm font-bold text-white mb-3">Markets</h3>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
          />
        </div>
      </div>

      {/* Market List */}
      <div className="flex-1 overflow-y-auto space-y-1">
        {filteredMarkets.map((market) => {
          const isPositive = market.change.startsWith('+');
          const isSelected = market.symbol === selectedPair;

          return (
            <button
              key={market.symbol}
              onClick={() => onSelectPair(market.symbol)}
              className={`w-full p-3 rounded-lg transition-all ${
                isSelected
                  ? 'bg-purple-500/20 border border-purple-500/50'
                  : 'bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white">{market.symbol}</span>
                {isPositive ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">${market.price}</span>
                <span className={`font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {market.change}%
                </span>
              </div>

              <div className="text-xs text-slate-500 mt-1">Vol: ${market.volume}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
