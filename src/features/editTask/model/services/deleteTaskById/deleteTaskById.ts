import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {ManageTask} from "entities/Task";

export const deleteTaskById = createAsyncThunk<
    ManageTask,
    string,
    ThunkConfig<string>
>(
    'deleteTaskById',
    async (taskId, thunkAPI) => {
        const {extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.delete<ManageTask>(`/tasks/delete/${taskId}`);

            return response.data;
        } catch (e) {
            return rejectWithValue('error')
        }
    },
);