import {StateSchema} from "app/providers/StoreProvider";

export const getNewFinanceTransactionData = (state: StateSchema) => state.addNewFinanceTransaction?.data;
export const getNewFinanceTransactionIsLoading = (state: StateSchema) => state.addNewFinanceTransaction?.isLoading;
export const getNewFinanceTransactionError = (state: StateSchema) => state.addNewFinanceTransaction?.error;

