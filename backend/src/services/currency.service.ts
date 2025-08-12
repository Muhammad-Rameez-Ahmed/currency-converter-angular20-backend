import axios from "axios";
import { config } from "../config/env";

export class CurrencyService {
  static async getRates(baseCurrency: string) {
    const url = `${config.currencyApiUrl}/latest`;
    const response = await axios.get(url, {
      params: {
        apikey: config.currencyApiKey,
        base_currency: baseCurrency
      }
    });
    return response.data;
  }

  static async getSymbols() {
    const url = `${config.currencyApiUrl}/currencies`;
    const response = await axios.get(url, {
      params: {
        apikey: config.currencyApiKey
      }
    });
    return response.data;
  }
}
