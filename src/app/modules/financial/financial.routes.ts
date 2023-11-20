import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { FinancialDataValidation } from "./financial.validation";
import { FinancialController } from "./financial.controller";
const router = express.Router();

router.post(
  "/add-financial-data",
  validateRequest(FinancialDataValidation.createFinancialZodSchema),
  FinancialController.createFinancialData
);

router.get("/:id", FinancialController.getFinancialData);

export const FinancialRoutes = router;
