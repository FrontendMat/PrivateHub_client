import {StateSchema} from "app/providers/StoreProvider";

export const getTaskEditError = (state: StateSchema) => state.editTaskForm?.error;