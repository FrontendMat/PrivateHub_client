import {StateSchema} from "app/providers/StoreProvider";

export const getTaskError = (state: StateSchema) => state.addTaskForm?.error;