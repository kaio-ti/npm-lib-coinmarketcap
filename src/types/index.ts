export interface CoinData {
  [mimeType: string]: {
    price: number;
    last_updated: string;
  };
}

export interface CurrencyData {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  date_added: string;
  last_updated: string;
  quote: CoinData;
}

export interface ExchangeData {
  data: {
    symbol: string;
    id: string;
    name: string;
    amount: number;
    last_updated: string;
    quote: CoinData;
  };
}

export interface Error404 {
  detail: string;
}

export interface ApiKey {
  [mimeType: string]: string;
}
