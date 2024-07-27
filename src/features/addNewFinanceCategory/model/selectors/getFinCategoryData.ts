import {StateSchema} from "app/providers/StoreProvider";

export const getFinCategoryData = (state: StateSchema) => state.addFinanceCategory?.data;
export const getFinCategoryIsLoading = (state: StateSchema) => state.addFinanceCategory?.isLoading;
export const getFinCategoryError = (state: StateSchema) => state.addFinanceCategory?.error;
