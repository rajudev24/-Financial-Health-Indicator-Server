"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialServices = void 0;
const financial_model_1 = require("./financial.model");
const createFinancialData = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = payload;
    const existingData = yield financial_model_1.FinancialData.findOne({ userId });
    if (existingData) {
        const updatedData = yield financial_model_1.FinancialData.findOneAndUpdate({ userId }, payload, { new: true });
        return updatedData;
    }
    else {
        const createdData = yield financial_model_1.FinancialData.create(payload);
        return createdData;
    }
});
const getFinancialData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield financial_model_1.FinancialData.findOne({ userId: userId });
    return result;
});
exports.FinancialServices = {
    createFinancialData,
    getFinancialData,
};
