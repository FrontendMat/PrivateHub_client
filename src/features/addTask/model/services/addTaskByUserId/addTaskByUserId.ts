import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getTaskData} from "../../selectors/getTaskData/getTaskData";
import {ManageTask} from "entities/Task";
import {validateTaskData} from "../../services/validateTaskData/validateTaskData";
import {ValidateAddTaskError} from "../../types/addTaskFormSchema";

export const addTasksByUserId = createAsyncThunk<
    ManageTask,
    void,
    ThunkConfig<ValidateAddTaskError[]>
>(
    'addTasksByUserId',
    async (_, thunkAPI) => {
        const {extra, dispatch,  rejectWithValue, getState} = thunkAPI;
        const taskData = getTaskData(getState());

        const errors = validateTaskData(taskData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.post<ManageTask>(`/tasks/addTask`, taskData);

            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (e) {
            return rejectWithValue([ValidateAddTaskError.SERVER_ERROR]);
        }
    },
);