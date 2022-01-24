import CoinMarketCap from "./api/model";

export { CoinMarketCap };
export {
  CurrencyData,
  CoinData,
  ExchangeData,
  Error404,
  ApiKey,
} from "./types";

export const crypto = new CoinMarketCap();

const quotes_data = crypto.quotes(["BTC"]).then((res) => {
  console.log(res);
});

const conversions_data = crypto.conversion("BTC", 0.005, "ETH").then((res) => {
  console.log(res);
});
