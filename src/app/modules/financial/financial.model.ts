import { Schema, model } from "mongoose";
import { FinancialModel, IFinancialData } from "./financial.interface";

export const FinancialSchema = new Schema<IFinancialData, FinancialModel>(
  {
    monthlyIncome: { type: Number, required: true },
    monthlyExpenses: { type: Number, required: true },
    totalDebts: { type: Number, required: true },
    totalAssets: { type: Number, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const FinancialData = model<IFinancialData, FinancialModel>(
  "FinancialData",
  FinancialSchema
);
