import {ValidateAddTaskError} from "../../types/addTaskFormSchema";
import {ManageTask} from "entities/Task";


export const validateTaskData = (task?: ManageTask) => {
    if (!task) {
        return [ValidateAddTaskError.NO_DATA];
    }

    const {
        title, type, level, office
    } = task;

    const errors: ValidateAddTaskError[] = [];

    if (!title) {
        errors.push(ValidateAddTaskError.INCORRECT_TITLE);
    }

    if (!type || !level || !office) {
        errors.push(ValidateAddTaskError.INCORRECT_TASK_PARAMS);
    }

    return errors;
};
