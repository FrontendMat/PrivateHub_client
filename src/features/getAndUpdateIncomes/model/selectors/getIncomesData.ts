import {StateSchema} from "app/providers/StoreProvider";

export const getIncomesData = (state: StateSchema) => state.incomesSchema?.data;
export const getIncomesTotalValue = (state: StateSchema) => state.incomesSchema?.totalValue;
export const getIncomesIsLoading = (state: StateSchema) => state.incomesSchema?.isLoading;
export const getIncomesError = (state: StateSchema) => state.incomesSchema?.error;
