import { z } from "zod";

const createFinancialZodSchema = z.object({
  body: z.object({
    monthlyIncome: z.number({
      required_error: "Monthly Income is required",
    }),
    monthlyExpenses: z.number({
      required_error: "Monthly Expenses is required",
    }),
    totalDebts: z.number({
      required_error: "Total Debts is required",
    }),
    totalAssets: z.number({
      required_error: "Total Assets is required",
    }),
    userId: z.string({
      required_error: "User ID is required",
    }),
  }),
});

export const FinancialDataValidation = {
  createFinancialZodSchema,
};
