import {StateSchema} from "app/providers/StoreProvider";

export const getFinanceData = (state: StateSchema) => state.finance?.data || undefined;
export const getFinanceType = (state: StateSchema) => state.finance?.financeType || 'Incomes';
export const getFinanceTotalValue = (state: StateSchema) => state.finance?.totalValue;
export const getFinanceIsLoading = (state: StateSchema) => state.finance?.isLoading;
export const getFinanceError = (state: StateSchema) => state.finance?.error;
