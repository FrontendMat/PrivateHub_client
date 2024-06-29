import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {ManageTask} from "entities/Task";

export const fetchTaskDetailsById = createAsyncThunk<
    ManageTask,
    string,
    ThunkConfig<string>
>(
    'fetchTaskDetailsById',
    async (taskId, thunkAPI) => {
        const {extra, rejectWithValue, } = thunkAPI;
        try {
            const response = await extra.api.get<ManageTask>(`/tasks/${taskId}`);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);