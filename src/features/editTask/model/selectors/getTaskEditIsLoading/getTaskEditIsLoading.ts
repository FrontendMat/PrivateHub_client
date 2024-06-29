import {StateSchema} from "app/providers/StoreProvider";

export const getTaskEditIsLoading = (state: StateSchema) => state.editTaskForm?.isLoading;