import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UpdateDateSchema} from "../types/types";
import {updateFinanceDate} from "../services/updateFinanceDate";

const initialState: UpdateDateSchema = {
    date: undefined,
    isLoading: false,
    error: undefined,
}
export const updateDateSlice = createSlice({
    name: 'updateDateSlice',
    initialState,
    reducers: {
        setNewDate: (state, action: PayloadAction<number>) => {
            if (Number(action.payload)) {
                state.date = action.payload;
            }
        },
        setClearField: (state) => {
            state.date = state.form;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateFinanceDate.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateFinanceDate.fulfilled, (state, action: PayloadAction<UpdateDateSchema>) => {
                state.isLoading = false;
                state.date = action.payload.date;
                state.form = action.payload.date;
            })
            .addCase(updateFinanceDate.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: updateDateActions } = updateDateSlice;
export const { reducer: updateDateReducer } = updateDateSlice;