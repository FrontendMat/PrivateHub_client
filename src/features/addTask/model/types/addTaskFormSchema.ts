import {ManageTask} from "entities/Task";

export enum ValidateAddTaskError {
    INCORRECT_TITLE = 'Title field is Empty',
    INCORRECT_TASK_PARAMS = 'Please, select all Task Params',
    NO_DATA = 'Task fields is Empty',
    SERVER_ERROR = 'Something went Wrong',
}

export interface AddTaskFormSchema {
    isLoading?: boolean;
    error?: string;
    data?: ManageTask,
    form?: ManageTask,
    validateErrors?: ValidateAddTaskError[];
}