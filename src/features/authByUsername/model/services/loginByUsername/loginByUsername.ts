import {createAsyncThunk} from "@reduxjs/toolkit";
import {userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localstorage";
import {ThunkConfig} from "app/providers/StoreProvider";
import {AuthResponse} from "entities/User";

export interface LoginByUserNameProps {
    username: string;
    password: string
}

export const loginByUsername = createAsyncThunk<
    AuthResponse,
    LoginByUserNameProps,
    ThunkConfig<string>
>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, } = thunkAPI;
        try {
            const response = await extra.api.post<AuthResponse>('/user/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.accessToken);
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e: any) {
            console.log(e)
            return rejectWithValue(e.response.data.message);
        }
    },
);