'use client';

import { useState } from 'react';
import { TradingChart } from '@/components/trading/trading-chart';
import { MarketSelector } from '@/components/trading/market-selector';
import { OrderEntry } from '@/components/trading/order-entry';
import { OrderBook } from '@/components/trading/order-book';
import { Positions } from '@/components/trading/positions';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TradePage() {
  const [selectedPair, setSelectedPair] = useState('$BONK');

  return (
    <main className="relative min-h-screen bg-black">

      {/* Top Nav */}
      <nav className="border-b border-white/10 backdrop-blur-xl">
        <div className="px-4 py-3 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="flex-1" />
          <div className="text-xl font-bold text-white">MeshX Terminal</div>
          <div className="flex-1" />
          <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Connect Wallet
          </button>
        </div>
      </nav>

      {/* Terminal Grid */}
      <div className="h-[calc(100vh-57px)] grid grid-cols-12 gap-2 p-2">
        {/* Left: Market Selector */}
        <div className="col-span-2 overflow-y-auto">
          <MarketSelector selectedPair={selectedPair} onSelectPair={setSelectedPair} />
        </div>

        {/* Center-Left: Chart + Order Book */}
        <div className="col-span-7 flex flex-col gap-2">
          {/* Chart */}
          <div className="flex-1">
            <TradingChart pair={selectedPair} />
          </div>

          {/* Order Book */}
          <div className="h-80">
            <OrderBook pair={selectedPair} />
          </div>
        </div>

        {/* Right: Order Entry */}
        <div className="col-span-3">
          <OrderEntry pair={selectedPair} />
        </div>

        {/* Bottom: Positions (Full Width) */}
        <div className="col-span-12 h-64">
          <Positions />
        </div>
      </div>
    </main>
  );
}
