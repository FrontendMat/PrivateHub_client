import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Finance} from "entities/Finance";
import {getFinCategoryData} from "../selectors/getFinCategoryData";


export const addFinanceCategory = createAsyncThunk<
    Finance,
    void,
    ThunkConfig<string>
>(
    'addTasksByUserId',
    async (_, thunkAPI) => {
        const {extra, dispatch,  rejectWithValue, getState} = thunkAPI;
        const data = getFinCategoryData(getState());

        try {
            const response = await extra.api.post<Finance>(`/finance/create`, data);

            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (e) {
            return rejectWithValue(String(e));
        }
    },
);