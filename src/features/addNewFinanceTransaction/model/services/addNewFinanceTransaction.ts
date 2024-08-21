import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {fetchFinanceByType, FinanceType, Transaction} from "entities/Finance";
import {getNewFinanceTransactionData} from "../selectors/getNewFinanceTransaction";

export const addNewFinanceTransaction = createAsyncThunk<
    Transaction,
    FinanceType,
    ThunkConfig<string>
>(
    'addNewFinanceTransaction',
    async (type, thunkAPI) => {
        const {extra, dispatch,  rejectWithValue, getState} = thunkAPI;

        const data = getNewFinanceTransactionData(getState());
        const newData = {...data, type: type}

        try {
            const response = await extra.api.post<Transaction>(`/finance/addTransaction`, newData);
            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchFinanceByType(type))
            return response.data
        } catch (e: any) {
            return rejectWithValue(String(e.response.data.message));
        }
    },
);