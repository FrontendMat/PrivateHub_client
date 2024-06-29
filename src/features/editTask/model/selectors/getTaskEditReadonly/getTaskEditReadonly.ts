import {StateSchema} from "app/providers/StoreProvider";

export const getTaskEditReadonly = (state: StateSchema) => state.editTaskForm?.readonly;