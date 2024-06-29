import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Finance, FinanceResponse} from "entities/Finance";
import {IncomesSchema} from "../types/IncomesSchema";
import {fetchIncomes} from "../services/fetchIncomes/fetchIncomes";

const initialState: IncomesSchema = {
    data: undefined,
    totalValue: 0,
    isLoading: false,
    error: undefined,
}
export const incomesSlice = createSlice({
    name: 'incomesSlice',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchIncomes.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchIncomes.fulfilled, (state, action: PayloadAction<FinanceResponse>) => {
                state.isLoading = false;
                state.data = action.payload.data;
                state.totalValue = action.payload.totalValue;
            })
            .addCase(fetchIncomes.rejected, (state, action) => {
                state.isLoading = false;
            })
    },
})

export const { actions: incomesActions } = incomesSlice;
export const { reducer: incomesReducer } = incomesSlice;