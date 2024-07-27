import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {FinanceResult} from "../type/financeResultSchema";

export const fetchFinanceResult = createAsyncThunk<
    FinanceResult,
    void,
    ThunkConfig<string>
>(
    'fetchFinanceResult',
    async (_, thunkAPI) => {
        const {extra,  rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<FinanceResult>(`/finance/getResult`);
            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (e: any) {
            return rejectWithValue(String(e.response.data.message));
        }
    },
);