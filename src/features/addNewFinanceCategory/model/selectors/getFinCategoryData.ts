import {StateSchema} from "app/providers/StoreProvider";

export const getFinCategoryData = (state: StateSchema) => state.addFinanceCategorySchema?.data;
