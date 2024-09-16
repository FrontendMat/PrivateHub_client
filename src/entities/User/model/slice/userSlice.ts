import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthResponse, UserSchema} from "../types/user";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localstorage";
import {checkIsUserAuth} from "../../model/services/checkIsUserAuth/checkIsUserAuth";
import {logoutAuth} from "../services/logoutUser/logoutUser";

const initialState: UserSchema = {
    _inited: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<AuthResponse>) => {
            state.authData = action.payload.user;
        },
        setUserUpdateData: (state, action: PayloadAction<number>) => {
            if (state.authData) {
                state.authData.financeUpdateDate = action.payload;
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkIsUserAuth.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(checkIsUserAuth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
                state.isLoading = false;
                state.authData = action.payload.user;
                state._inited = true;
            })
            .addCase(checkIsUserAuth.rejected, (state, action) => {
                state.isLoading = false;
                state._inited = true;
                state.authData = undefined;
                state.error = action.payload;
            })
            .addCase(logoutAuth.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(logoutAuth.fulfilled, (state, ) => {
                state.isLoading = false;
                state.authData = undefined;
                state._inited = true;
            })
            .addCase(logoutAuth.rejected, (state, action) => {
                state.isLoading = false;
                state._inited = true;
                state.error = action.payload;
            })
    },
})

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;