import { Router } from "express";
import { CurrencyController } from "../controllers/currency.controller";

const router = Router();

router.get("/convert", CurrencyController.convert);
router.get("/symbols", CurrencyController.symbols);

export default router;
