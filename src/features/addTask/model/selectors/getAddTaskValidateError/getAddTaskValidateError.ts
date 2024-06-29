import {StateSchema} from "app/providers/StoreProvider";

export const getAddTaskValidateError = (state: StateSchema) => state.addTaskForm?.validateErrors;

