import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AddFinanceCategorySchema} from "../types/addFinanceCategorySchema";
import {Finance} from "entities/Finance";
import {addFinanceCategory} from "../services/addFinanceCategory";

const initialState: AddFinanceCategorySchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
}
export const addFinanceCategorySlice = createSlice({
    name: 'addFinanceCategorySlice',
    initialState,
    reducers: {
        addFinance: (state, action: PayloadAction<Finance>) => {
            state.data = {
                ...state.data,
                ...action.payload
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addFinanceCategory.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addFinanceCategory.fulfilled, (state, action: PayloadAction<Finance>) => {
                state.isLoading = false;
            })
            .addCase(addFinanceCategory.rejected, (state, action) => {
                state.isLoading = false;
            })
    },
})

export const { actions: addFinanceCategoryActions } = addFinanceCategorySlice;
export const { reducer: addFinanceCategoryReducer } = addFinanceCategorySlice;