import { IFinancialData } from "./financial.interface";
import { FinancialData } from "./financial.model";

const createFinancialData = async (
  payload: IFinancialData
): Promise<IFinancialData | null> => {
  const { userId } = payload;
  const existingData = await FinancialData.findOne({ userId });
  if (existingData) {
    const updatedData = await FinancialData.findOneAndUpdate(
      { userId },
      payload,
      { new: true }
    );
    return updatedData;
  } else {
    const createdData = await FinancialData.create(payload);
    return createdData;
  }
};

const getFinancialData = async (
  userId: string
): Promise<IFinancialData | null> => {
  const result = await FinancialData.findOne({ userId: userId });
  return result;
};

export const FinancialServices = {
  createFinancialData,
  getFinancialData,
};
