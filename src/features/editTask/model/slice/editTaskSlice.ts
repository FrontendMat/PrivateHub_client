import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EditTaskFormSchema} from "../types/editTaskFormSchema";
import {fetchTaskDetailsById} from "../../model/services/fetchTaskDetailsById/fetchTaskDetailsById";
import {editTaskDetails} from "../../model/services/editTaskDetails/editTaskDetails";
import {deleteTaskById} from "../../model/services/deleteTaskById/deleteTaskById";
import {ManageTask} from "entities/Task";

const initialState: EditTaskFormSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
}
export const editTaskSlice = createSlice({
    name: 'editTaskSlice',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        editTask: (state, action: PayloadAction<ManageTask>) => {
            state.form = {
                ...state.form,
                ...action.payload
            };
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTaskDetailsById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTaskDetailsById.fulfilled, (state, action: PayloadAction<ManageTask>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchTaskDetailsById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(editTaskDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editTaskDetails.fulfilled, (state, action: PayloadAction<ManageTask>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(editTaskDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteTaskById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(deleteTaskById.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(deleteTaskById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { actions: editTaskActions } = editTaskSlice;
export const { reducer: editTaskReducer } = editTaskSlice;
