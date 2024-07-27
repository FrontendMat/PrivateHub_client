import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FinanceStatisticResponse, FinanceStatisticSchema} from "../types/financeStatisticSchema";
import {fetchFinanceStatistic} from "../services/fetchFinanceStatistic";

const initialState: FinanceStatisticSchema = {
    isLoading: false,
    error: undefined
}

export const getFinanceStatisticSlice = createSlice({
    name: 'getFinanceStatisticSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFinanceStatistic.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFinanceStatistic.fulfilled, (state, action: PayloadAction<FinanceStatisticResponse>) => {
                state.isLoading = false;
                state.incomes = action.payload.data?.incomes;
                state.expenses = action.payload.data?.expenses;
                state.sum = action.payload.data?.sum;
                state.incomesValue = action.payload.data?.incomesValue;
                state.expensesValue = action.payload.data?.expensesValue;
                state.result = action.payload.result;
            })
            .addCase(fetchFinanceStatistic.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(action.payload)
            })
    },
})

export const { actions: getFinanceStatisticActions } = getFinanceStatisticSlice;
export const { reducer: getFinanceStatisticReducer } = getFinanceStatisticSlice;