import {StateSchema} from "app/providers/StoreProvider";

export const getTaskEditData = (state: StateSchema) => state.editTaskForm?.data;
export const getTaskEditForm = (state: StateSchema) => state.editTaskForm?.form;