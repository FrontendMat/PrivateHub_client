import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {UpdateDateSchema} from "../types/types";
import {getUpdateDateData} from "../selectors/getUpdateDate";
import {userActions} from "entities/User";

export const updateFinanceDate = createAsyncThunk<
    UpdateDateSchema,
    void,
    ThunkConfig<string>
>(
    'updateFinanceDate',
    async (_, thunkAPI) => {
        const {extra,  rejectWithValue, getState, dispatch} = thunkAPI;
        const date = getUpdateDateData(getState())

        try {
            const response = await extra.api.put<UpdateDateSchema>(
                `/user/updateFinanceDate`,
                {date}
            );
            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setUserUpdateData(response.data as number))

            return response.data
        } catch (e) {
            return rejectWithValue(String(e));
        }
    },
);