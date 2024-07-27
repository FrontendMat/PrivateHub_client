import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {FinanceStatisticResponse} from "../types/financeStatisticSchema";

export const fetchFinanceStatistic = createAsyncThunk<
    FinanceStatisticResponse,
    void,
    ThunkConfig<string>
>(
    'fetchFinanceStatistic',
    async (_, thunkAPI) => {
        const {extra,  rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<FinanceStatisticResponse>(`/finance/getStatistic`);
            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (e: any) {
            return rejectWithValue(String(e.response.data.message));
        }
    },
);