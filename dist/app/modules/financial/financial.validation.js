"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialDataValidation = void 0;
const zod_1 = require("zod");
const createFinancialZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        monthlyIncome: zod_1.z.number({
            required_error: "Monthly Income is required",
        }),
        monthlyExpenses: zod_1.z.number({
            required_error: "Monthly Expenses is required",
        }),
        totalDebts: zod_1.z.number({
            required_error: "Total Debts is required",
        }),
        totalAssets: zod_1.z.number({
            required_error: "Total Assets is required",
        }),
        userId: zod_1.z.string({
            required_error: "User ID is required",
        }),
    }),
});
exports.FinancialDataValidation = {
    createFinancialZodSchema,
};
