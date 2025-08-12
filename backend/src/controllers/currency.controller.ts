import { Request, Response } from "express";
import { CurrencyService } from "../services/currency.service";

export class CurrencyController {
  static async convert(req: Request, res: Response) {
    try {
      const { from, to, amount } = req.query;

      if (!from || !to || !amount) {
        return res.status(400).json({ message: "Missing required parameters" });
      }

      const data = await CurrencyService.getRates(from as string);
      const rates = data.data;
      const rate = rates[to as string];

      if (!rate) {
        return res.status(400).json({ message: "Invalid target currency" });
      }

      const result = Number(amount) * rate;
      res.json({
        from,
        to,
        amount: Number(amount),
        rate,
        convertedAmount: result,
        date: new Date().toISOString()
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }

  static async symbols(req: Request, res: Response) {
    try {
      const data = await CurrencyService.getSymbols();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch symbols" });
    }
  }
}
