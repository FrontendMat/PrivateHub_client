import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {getTasksFilter, getTasksLimitNum, getTasksPageNum, getTasksSearch} from "../../selectors/tasks/tasks";
import {TasksResponse} from "../../types/tasksSchema";

export const fetchTasksByUserId = createAsyncThunk<
    TasksResponse,
    void ,
    ThunkConfig<string>
>(
    'fetchTasksByUserId',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;

        const limit = getTasksLimitNum(getState());
        const page = getTasksPageNum(getState());
        const search = getTasksSearch(getState());
        const filterData = getTasksFilter(getState());

        try {
            const response = await extra.api.get<TasksResponse>(`/tasks/getTasks`, {params:
                    {
                        page,
                        limit,
                        filterData,
                        search
                    }
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);