import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit'
import {StateSchema} from "app/providers/StoreProvider";
import {fetchTasksByUserId} from "../../model/services/fetchTasksByUserId/fetchTasksByUserId";
import {Task} from "entities/Task";
import {TaskFilters, TasksResponse, TasksSchema} from "../types/tasksSchema";

const tasksAdapter = createEntityAdapter<Task>({
    selectId: (task) => task._id,
})

export const getTasks = tasksAdapter.getSelectors<StateSchema>(
    (state) => state.tasks || tasksAdapter.getInitialState()
)

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState: tasksAdapter.getInitialState<TasksSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        limit: 0,
        totalPages: 0,
        hasMore: true,
        search: '',
        filter: undefined,
        sort: ''
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setSort: (state, action: PayloadAction<string>) => {
            state.sort = action.payload
        },
        setFilter: (state, action: PayloadAction<TaskFilters>) => {
            state.filter = {
                ...state.filter,
                ...action.payload
            };
        },
        setResetFilter: (state) => {
            state.filter = undefined
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasksByUserId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTasksByUserId.fulfilled, (state, action: PayloadAction<TasksResponse>) => {
                state.isLoading = false;
                tasksAdapter.setAll(state, action.payload.tasks);
                state.totalPages = action.payload.totalPages;
                state.hasMore = action.payload.tasks.length >= state.limit;
            })
            .addCase(fetchTasksByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const {actions: tasksActions} = tasksSlice;
export const {reducer: tasksReducer} = tasksSlice;

