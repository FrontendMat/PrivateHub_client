import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Finance, FinanceResponse} from "entities/Finance";

export const fetchIncomes = createAsyncThunk<
    FinanceResponse,
    void,
    ThunkConfig<string>
>(
    'fetchIncomes',
    async (_, thunkAPI) => {
        const {extra, dispatch,  rejectWithValue, getState} = thunkAPI;

        try {
            const response = await extra.api.get<FinanceResponse>(`/finance/getFinance`, {params: {type: 'Incomes'}});
            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (e) {
            return rejectWithValue(String(e));
        }
    },
);