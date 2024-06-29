import {StateSchema} from "app/providers/StoreProvider";

export const getTaskData = (state: StateSchema) => state.addTaskForm?.data;