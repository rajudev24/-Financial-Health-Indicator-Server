"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialData = exports.FinancialSchema = void 0;
const mongoose_1 = require("mongoose");
exports.FinancialSchema = new mongoose_1.Schema({
    monthlyIncome: { type: Number, required: true },
    monthlyExpenses: { type: Number, required: true },
    totalDebts: { type: Number, required: true },
    totalAssets: { type: Number, required: true },
    userId: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.FinancialData = (0, mongoose_1.model)("FinancialData", exports.FinancialSchema);
