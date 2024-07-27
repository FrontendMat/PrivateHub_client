import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FinanceSchema} from "../types/finance";
import {fetchFinanceByType} from "../services/fetchFinanceByType/fetchFinanceByType";

const initialState: FinanceSchema = {
    data: undefined,
    financeType: undefined,
    totalValue: 0,
    isLoading: false,
    error: undefined,
}
export const financeSlice = createSlice({
    name: 'financeSlice',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchFinanceByType.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFinanceByType.fulfilled, (state, action: PayloadAction<FinanceSchema>) => {
                state.isLoading = false;
                state.data = action.payload.data;
                state.financeType = action.payload.financeType;
                state.totalValue = action.payload.totalValue;
            })
            .addCase(fetchFinanceByType.rejected, (state, action) => {
                state.isLoading = false;
            })
    },
})

export const { actions: financeActions } = financeSlice;
export const { reducer: financeReducer } = financeSlice;