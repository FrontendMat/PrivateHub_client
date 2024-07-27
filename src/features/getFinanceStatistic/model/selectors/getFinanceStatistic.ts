import {StateSchema} from "app/providers/StoreProvider";

export const getFinanceStatisticIncomesData = (state: StateSchema) => state.financeStatistic?.incomes;
export const getFinanceStatisticExpensesData = (state: StateSchema) => state.financeStatistic?.expenses;
export const getFinanceStatisticSumData = (state: StateSchema) => state.financeStatistic?.sum;
export const getFinanceStatisticIncomesValue = (state: StateSchema) => state.financeStatistic?.incomesValue;
export const getFinanceStatisticExpensesValue = (state: StateSchema) => state.financeStatistic?.expensesValue;
export const getFinanceStatisticTotalValue = (state: StateSchema) => state.financeStatistic?.result;
export const getFinanceStatisticIsLoading = (state: StateSchema) => state.financeStatistic?.isLoading;
export const getFinanceStatisticError = (state: StateSchema) => state.financeStatistic?.error;