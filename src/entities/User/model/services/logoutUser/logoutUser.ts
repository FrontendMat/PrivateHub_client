import {createAsyncThunk} from "@reduxjs/toolkit";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localstorage";
import {ThunkConfig} from "app/providers/StoreProvider";

export const logoutAuth = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'login/logoutAuth',
    async (_, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, } = thunkAPI;
        try {
            const response = await extra.api.post('user/logout', {withCredentials: true})
            if (!response.data) {
                throw new Error();
            }

            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            return response.data;
        } catch (e: any) {
            return rejectWithValue(String(e.response.data.message));
        }
    },
);