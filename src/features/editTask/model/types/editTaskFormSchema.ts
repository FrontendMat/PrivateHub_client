import {ManageTask} from "entities/Task";


export interface EditTaskFormSchema {
    data?: ManageTask,
    form?: ManageTask,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
}