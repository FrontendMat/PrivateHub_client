import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AddNewFinanceTransactionSchema} from "../types/addNewFinanceTransactionSchema";
import {addNewFinanceTransaction} from "../services/addNewFinanceTransaction";
import {Transaction} from "entities/Finance/model/types/finance";
import {StateSchema} from "app/providers/StoreProvider";

const initialState: AddNewFinanceTransactionSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
}
export const addNewFinanceTransactionSlice = createSlice({
    name: 'addNewFinanceTransactionSlice',
    initialState,
    reducers: {
        addFinance: (state, action: PayloadAction<Transaction>) => {
            state.data = {
                ...state.data,
                ...action.payload
            };
        },
        clearForm: (state) => {
            state.data = undefined
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewFinanceTransaction.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addNewFinanceTransaction.fulfilled, (state, action: PayloadAction<Transaction>) => {
                state.isLoading = false;
            })
            .addCase(addNewFinanceTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: addNewFinanceTransactionActions } = addNewFinanceTransactionSlice;
export const { reducer: addNewFinanceTransactionReducer } = addNewFinanceTransactionSlice;