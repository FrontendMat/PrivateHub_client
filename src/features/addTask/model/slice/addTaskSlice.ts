import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AddTaskFormSchema} from "../types/addTaskFormSchema";
import {addTasksByUserId} from "../../model/services/addTaskByUserId/addTaskByUserId";
import {ManageTask} from "entities/Task";

const initialState: AddTaskFormSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
}
export const addTaskSlice = createSlice({
    name: 'addTaskSlice',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ManageTask>) => {
            state.data = {
                ...state.data,
                ...action.payload
            };
        },
        editTask: (state, action: PayloadAction<ManageTask>) => {
            state.form = {
                ...state.form,
                ...action.payload
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTasksByUserId.pending, (state) => {
                state.error = undefined;
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(addTasksByUserId.fulfilled, (state, action: PayloadAction<ManageTask>) => {
                state.isLoading = false;
            })
            .addCase(addTasksByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            })
    },
})

export const { actions: addTaskActions } = addTaskSlice;
export const { reducer: addTaskReducer } = addTaskSlice;