import {StateSchema} from "app/providers/StoreProvider";

export const getFinanceResultData = (state: StateSchema) => state.financeResult?.data;
export const getFinanceResultIsLoading = (state: StateSchema) => state.financeResult?.isLoading;
export const getFinanceResultError = (state: StateSchema) => state.financeResult?.error;