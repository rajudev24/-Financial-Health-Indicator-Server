import { Model } from "mongoose";
export interface IFinancialData {
  monthlyIncome: number;
  monthlyExpenses: number;
  totalDebts: number;
  totalAssets: number;
  userId: string;
}

export type FinancialModel = Model<IFinancialData, Record<string, unknown>>;
