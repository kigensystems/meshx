'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, X } from 'lucide-react';

interface Position {
  id: string;
  pair: string;
  side: 'long' | 'short';
  size: number;
  entryPrice: number;
  markPrice: number;
  leverage: number;
  liquidationPrice: number;
  margin: number;
  pnl: number;
  pnlPercent: number;
}

const mockPositions: Position[] = [
  {
    id: '1',
    pair: '$BONK',
    side: 'long',
    size: 100000,
    entryPrice: 0.00001200,
    markPrice: 0.00001234,
    leverage: 10,
    liquidationPrice: 0.00001080,
    margin: 120,
    pnl: 28.33,
    pnlPercent: 23.6,
  },
  {
    id: '2',
    pair: '$PEPE',
    side: 'short',
    size: 50000,
    entryPrice: 0.0000092,
    markPrice: 0.0000089,
    leverage: 5,
    liquidationPrice: 0.0000098,
    margin: 92,
    pnl: 15.00,
    pnlPercent: 16.3,
  },
];

export function Positions() {
  const [activeTab, setActiveTab] = useState<'positions' | 'orders' | 'history'>('positions');
  const [positions] = useState(mockPositions);

  const totalPnL = positions.reduce((sum, pos) => sum + pos.pnl, 0);
  const totalMargin = positions.reduce((sum, pos) => sum + pos.margin, 0);

  return (
    <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col">
      {/* Header with Tabs */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
          {[
            { key: 'positions', label: 'Positions', count: positions.length },
            { key: 'orders', label: 'Open Orders', count: 0 },
            { key: 'history', label: 'Trade History', count: 0 },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as 'positions' | 'orders' | 'history')}
              className={`px-4 py-2 rounded text-xs font-semibold transition-all ${
                activeTab === tab.key
                  ? 'bg-purple-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label} {tab.count > 0 && `(${tab.count})`}
            </button>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="flex gap-6">
          <div>
            <div className="text-xs text-slate-400">Total Margin</div>
            <div className="text-sm font-bold text-white font-mono">${totalMargin.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Unrealized PnL</div>
            <div
              className={`text-sm font-bold font-mono ${
                totalPnL >= 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {totalPnL >= 0 ? '+' : ''}${totalPnL.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Positions Table */}
      {activeTab === 'positions' && (
        <div className="flex-1 overflow-x-auto">
          {positions.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-slate-400 mb-2">No open positions</div>
                <div className="text-xs text-slate-500">
                  Open a position to start trading
                </div>
              </div>
            </div>
          ) : (
            <div className="min-w-full">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 pb-2 mb-2 border-b border-white/10 text-xs text-slate-400">
                <div className="col-span-1">Pair</div>
                <div className="col-span-1 text-center">Side</div>
                <div className="col-span-1 text-right">Size</div>
                <div className="col-span-1 text-right">Leverage</div>
                <div className="col-span-1 text-right">Entry</div>
                <div className="col-span-1 text-right">Mark</div>
                <div className="col-span-1 text-right">Liq. Price</div>
                <div className="col-span-1 text-right">Margin</div>
                <div className="col-span-2 text-right">PnL (ROE%)</div>
                <div className="col-span-2 text-right">Actions</div>
              </div>

              {/* Table Rows */}
              <div className="space-y-2">
                {positions.map((position) => {
                  const isProfitable = position.pnl >= 0;
                  const isLong = position.side === 'long';

                  return (
                    <div
                      key={position.id}
                      className="grid grid-cols-12 gap-4 py-3 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {/* Pair */}
                      <div className="col-span-1 flex items-center">
                        <span className="text-sm font-bold text-white">{position.pair}</span>
                      </div>

                      {/* Side */}
                      <div className="col-span-1 flex items-center justify-center">
                        <div
                          className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${
                            isLong ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {isLong ? (
                            <TrendingUp className="w-3 h-3" />
                          ) : (
                            <TrendingDown className="w-3 h-3" />
                          )}
                          {position.side.toUpperCase()}
                        </div>
                      </div>

                      {/* Size */}
                      <div className="col-span-1 flex items-center justify-end">
                        <span className="text-sm font-mono text-white">
                          {position.size.toLocaleString()}
                        </span>
                      </div>

                      {/* Leverage */}
                      <div className="col-span-1 flex items-center justify-end">
                        <span className="text-sm font-semibold text-purple-400">
                          {position.leverage}x
                        </span>
                      </div>

                      {/* Entry Price */}
                      <div className="col-span-1 flex items-center justify-end">
                        <span className="text-sm font-mono text-slate-300">
                          ${position.entryPrice.toFixed(8)}
                        </span>
                      </div>

                      {/* Mark Price */}
                      <div className="col-span-1 flex items-center justify-end">
                        <span className="text-sm font-mono text-white">
                          ${position.markPrice.toFixed(8)}
                        </span>
                      </div>

                      {/* Liquidation Price */}
                      <div className="col-span-1 flex items-center justify-end">
                        <span className="text-sm font-mono text-red-400">
                          ${position.liquidationPrice.toFixed(8)}
                        </span>
                      </div>

                      {/* Margin */}
                      <div className="col-span-1 flex items-center justify-end">
                        <span className="text-sm font-mono text-white">
                          ${position.margin.toFixed(2)}
                        </span>
                      </div>

                      {/* PnL */}
                      <div className="col-span-2 flex items-center justify-end">
                        <div className="text-right">
                          <div
                            className={`text-sm font-bold font-mono ${
                              isProfitable ? 'text-green-400' : 'text-red-400'
                            }`}
                          >
                            {isProfitable ? '+' : ''}${position.pnl.toFixed(2)}
                          </div>
                          <div
                            className={`text-xs font-mono ${
                              isProfitable ? 'text-green-400/70' : 'text-red-400/70'
                            }`}
                          >
                            ({isProfitable ? '+' : ''}{position.pnlPercent.toFixed(2)}%)
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="col-span-2 flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded text-xs font-semibold hover:bg-purple-500/30 transition-colors">
                          Add Margin
                        </button>
                        <button className="px-3 py-1.5 bg-red-500/20 text-red-300 rounded text-xs font-semibold hover:bg-red-500/30 transition-colors flex items-center gap-1">
                          <X className="w-3 h-3" />
                          Close
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Empty states for other tabs */}
      {activeTab === 'orders' && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-slate-400 mb-2">No open orders</div>
            <div className="text-xs text-slate-500">Place a limit order to see it here</div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-slate-400 mb-2">No trade history</div>
            <div className="text-xs text-slate-500">Your completed trades will appear here</div>
          </div>
        </div>
      )}
    </div>
  );
}
