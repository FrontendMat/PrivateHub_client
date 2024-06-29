import {StateSchema} from "app/providers/StoreProvider";

export const getTasksIsLoading = (state: StateSchema) => state.tasks?.isLoading;
export const getTasksError = (state: StateSchema) => state.tasks?.error;
export const getTasksPageNum = (state: StateSchema) => state.tasks?.page || 1;
export const getTasksLimitNum = (state: StateSchema) => state.tasks?.limit || 25;
export const getTasksHasMore = (state: StateSchema) => state.tasks?.hasMore;
export const getTasksTotalPages = (state: StateSchema) => state.tasks?.totalPages || 1;
export const getTasksFilter = (state: StateSchema) => state.tasks?.filter;
export const getTasksSearch = (state: StateSchema) => state.tasks?.search;
export const getTasksSort = (state: StateSchema) => state.tasks?.sort || 'Des';