import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {fetchFinanceByType, Finance, FinanceType} from "entities/Finance";
import {getFinCategoryData} from "../selectors/getFinCategoryData";

export const addFinanceCategory = createAsyncThunk<
    Finance,
    FinanceType,
    ThunkConfig<string>
>(
    'addFinanceCategory',
    async (type, thunkAPI) => {
        const {extra, dispatch,  rejectWithValue, getState} = thunkAPI;

        const data = getFinCategoryData(getState());
        const newData = {...data, type: type}

        try {
            const response = await extra.api.post<Finance>(`/finance/create`, newData);

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