import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FinanceResult, FinanceResultSchema} from "../type/financeResultSchema";
import {fetchFinanceResult} from "../services/fetchFinanceResult";

const initialState: FinanceResultSchema = {
    isLoading: false,
    error: undefined
}

export const financeResultSlice = createSlice({
    name: 'financeResultSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFinanceResult.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFinanceResult.fulfilled, (state, action: PayloadAction<FinanceResult>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFinanceResult.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: financeResultActions } = financeResultSlice;
export const { reducer: financeResultReducer } = financeResultSlice;