import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  currencyApiKey: process.env.CURRENCY_API_KEY || "",
  currencyApiUrl: process.env.CURRENCY_API_URL || ""
};
