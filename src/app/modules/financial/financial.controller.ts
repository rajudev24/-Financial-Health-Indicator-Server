import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendresponse from "../../../shared/sendResonse";
import httpStatus from "http-status";
import { FinancialServices } from "./financial.service";

const createFinancialData = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const result = await FinancialServices.createFinancialData(data);

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Financial Data added successfully",
    data: result,
  });
});

const getFinancialData = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.id;
  const result = await FinancialServices.getFinancialData(userId);
  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Financial Data retrive successfully",
    data: result,
  });
});

export const FinancialController = {
  createFinancialData,
  getFinancialData,
};
