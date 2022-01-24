import axios, { AxiosInstance, AxiosResponse } from "axios";
import * as dotenv from "dotenv";
import { ApiKey, CurrencyData, Error404, ExchangeData } from "../types";

dotenv.config();

export default class CoinMarketCap {
  baseURL: string = "https://pro-api.coinmarketcap.com/";
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  async quotes(symbol: Array<string>) {
    const requestURL = `v1/cryptocurrency/quotes/latest?symbol=${symbol}`;
    const response: AxiosResponse<any, any> = await this.axiosInstance.get(
      requestURL,
      {
        headers: <ApiKey>{ "X-CMC_PRO_API_KEY": process.env.api_key },
      }
    );

    return response.data as CurrencyData;
  }

  async conversion(symbol: string, amount: number, convert: string) {
    const requestURL = `/v1/tools/price-conversion?amount=${amount}&symbol=${symbol}&convert=${convert}`;

    try {
      const response = await this.axiosInstance.get(requestURL, {
        headers: <ApiKey>{
          "X-CMC_PRO_API_KEY": process.env.api_key,
        },
      });
      return response.data as ExchangeData;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return err.response?.data as Error404;
      }
      return undefined;
    }
  }
}
