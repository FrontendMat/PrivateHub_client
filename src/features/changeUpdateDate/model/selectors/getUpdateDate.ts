import {StateSchema} from "app/providers/StoreProvider";

export const getUpdateDateData = (state: StateSchema) => state.updateFinanceDate?.date || state.user.authData?.financeUpdateDate;
export const getUpdateDateIsLoading = (state: StateSchema) => state.updateFinanceDate?.isLoading;
export const getUpdateDateError = (state: StateSchema) => state.updateFinanceDate?.error;