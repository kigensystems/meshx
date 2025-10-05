export type OrderSide = 'long' | 'short';

export interface Position {
  id: string;
  symbol: string;
  side: OrderSide;
  size: number;
  entryPrice: number;
  leverage: number;
  pnl: number;
  liquidationPrice: number;
}

export interface MarketData {
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  high24h: number;
  low24h: number;
}
