'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

interface OrderEntryProps {
  pair: string;
}

export function OrderEntry({ pair }: OrderEntryProps) {
  const [orderType, setOrderType] = useState<'long' | 'short'>('long');
  const [leverage, setLeverage] = useState(5);
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');
  const [orderMode, setOrderMode] = useState<'market' | 'limit'>('market');

  const isLong = orderType === 'long';

  return (
    <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-sm font-bold text-white mb-3">Place Order</h3>

        {/* Long/Short Tabs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            onClick={() => setOrderType('long')}
            className={`py-3 rounded-lg font-semibold text-sm transition-all ${
              isLong
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Long
            </div>
          </button>
          <button
            onClick={() => setOrderType('short')}
            className={`py-3 rounded-lg font-semibold text-sm transition-all ${
              !isLong
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <TrendingDown className="w-4 h-4" />
              Short
            </div>
          </button>
        </div>

        {/* Market/Limit Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setOrderMode('market')}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
              orderMode === 'market'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            Market
          </button>
          <button
            onClick={() => setOrderMode('limit')}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
              orderMode === 'limit'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            Limit
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-4">
        {/* Balance */}
        <div className="p-3 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Wallet className="w-3 h-3" />
              Available Balance
            </div>
            <span className="text-white font-bold font-mono">$10,000.00</span>
          </div>
        </div>

        {/* Price Input (for limit orders) */}
        {orderMode === 'limit' && (
          <div>
            <label className="block text-xs text-slate-400 mb-2">Price (USDC)</label>
            <input
              type="text"
              placeholder="0.00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>
        )}

        {/* Amount Input */}
        <div>
          <label className="block text-xs text-slate-400 mb-2">Amount (USDC)</label>
          <input
            type="text"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono focus:outline-none focus:border-purple-500/50 transition-colors"
          />
          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-2 mt-2">
            {['25%', '50%', '75%', 'Max'].map((pct) => (
              <button
                key={pct}
                onClick={() => {
                  const amounts = { '25%': '2500', '50%': '5000', '75%': '7500', 'Max': '10000' };
                  setAmount(amounts[pct as keyof typeof amounts]);
                }}
                className="py-1.5 text-xs bg-white/5 text-slate-400 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                {pct}
              </button>
            ))}
          </div>
        </div>

        {/* Leverage Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs text-slate-400">Leverage</label>
            <span className="text-sm font-bold text-purple-400">{leverage}x</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={leverage}
            onChange={(e) => setLeverage(Number(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-purple-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>1x</span>
            <span>10x</span>
            <span>20x</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="p-3 bg-white/5 rounded-lg border border-white/10 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Position Size</span>
            <span className="text-white font-mono">
              ${amount ? (parseFloat(amount) * leverage).toFixed(2) : '0.00'}
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Entry Price</span>
            <span className="text-white font-mono">
              {orderMode === 'market' ? 'Market' : price || '0.00'}
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Liquidation Price</span>
            <span className="text-red-400 font-mono">$0.00000890</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Trading Fee</span>
            <span className="text-white font-mono">
              ${amount ? (parseFloat(amount) * 0.0005).toFixed(2) : '0.00'}
            </span>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        className={`w-full py-4 rounded-lg font-bold text-white mt-4 transition-all ${
          isLong
            ? 'bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30'
            : 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30'
        }`}
      >
        {isLong ? 'Open Long' : 'Open Short'} {pair}
      </button>
    </div>
  );
}
