import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RegistrationSchema} from "../types/registrationSchema";
import {registerByEmail} from "../services/registerByEmail";

const initialState: RegistrationSchema = {
    email: '',
    username: '',
    password: '',
    isLoading: false,
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        clearForm: (state) => {
            state.email = '';
            state.username = '';
            state.password = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerByEmail.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerByEmail.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(registerByEmail.rejected, (state, action ) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;