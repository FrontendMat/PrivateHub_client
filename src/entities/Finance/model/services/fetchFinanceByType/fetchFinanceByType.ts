import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {FinanceSchema, FinanceType} from "entities/Finance";

export const fetchFinanceByType = createAsyncThunk<
    FinanceSchema,
    FinanceType,
    ThunkConfig<string>
>(
    'fetchFinanceByType',
    async (type, thunkAPI) => {
        const {extra,  rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<FinanceSchema>(`/finance/getFinance`, {params: {type: type}});
            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (e) {
            return rejectWithValue(String(e));
        }
    },
);