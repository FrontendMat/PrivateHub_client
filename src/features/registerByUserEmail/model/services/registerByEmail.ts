import {createAsyncThunk} from "@reduxjs/toolkit";
import {userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localstorage";
import {ThunkConfig} from "app/providers/StoreProvider";
import {AuthResponse} from "entities/User";

export interface RegisterByEmailProps {
    email: string;
    username: string;
    password: string
}

export const registerByEmail = createAsyncThunk<
    AuthResponse,
    RegisterByEmailProps,
    ThunkConfig<string>
>(
    'register/registerByEmail',
    async (authData, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, } = thunkAPI;
        try {
            const response = await extra.api.post<AuthResponse>('/user/registration', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.accessToken);
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e: any) {
            return rejectWithValue(String(e.response.data.message));
        }
    },
);