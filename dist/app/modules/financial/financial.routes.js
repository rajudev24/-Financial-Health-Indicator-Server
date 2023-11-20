"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const financial_validation_1 = require("./financial.validation");
const financial_controller_1 = require("./financial.controller");
const router = express_1.default.Router();
router.post("/add-financial-data", (0, validateRequest_1.default)(financial_validation_1.FinancialDataValidation.createFinancialZodSchema), financial_controller_1.FinancialController.createFinancialData);
router.get("/:id", financial_controller_1.FinancialController.getFinancialData);
exports.FinancialRoutes = router;
