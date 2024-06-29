import {memo, useCallback, useEffect, useState} from "react";
import {TaskList} from "entities/Task";
import cls from './TasksPage.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {
    getTasksError,
    getTasksHasMore,
    getTasksIsLoading,
    getTasksPageNum,
} from "../../model/selectors/tasks/tasks";
import {getTasks, tasksReducer} from "../../model/slice/tasksSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchTasksByUserId} from "../../model/services/fetchTasksByUserId/fetchTasksByUserId";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {AddTaskModal} from "features/addTask";
import {TaskPageHeader} from "../TaskPageHeader/TaskPageHeader";
import {Alert, AlertTheme} from "shared/ui/Alert/Alert";
import {EditTaskModal, DeleteTaskModal} from "features/editTask";
import {Page} from "shared/ui/Page/ui/Page";
import {
    getAddTaskValidateError
} from "features/addTask/model/selectors/getAddTaskValidateError/getAddTaskValidateError";

interface TaskPageProps {
    className?: string
}

const reducers: ReducersList = {
    tasks: tasksReducer,
}

const TasksPage = memo((props: TaskPageProps) => {
    const {
        className,
    } = props;
    const isLoading = useSelector(getTasksIsLoading);
    const error = useSelector(getTasksError);
    const tasks = useSelector(getTasks.selectAll);
    const page = useSelector(getTasksPageNum);
    const validateError = useSelector(getAddTaskValidateError);
    const hasMore = useSelector(getTasksHasMore);
    const dispatch = useAppDispatch();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState('');
    const [onAddTaskSuccess, setOnAddTaskSuccess] = useState(false);
    
    useEffect(() => {
        dispatch(fetchTasksByUserId())
    }, [dispatch, page]);

    const onAddModalOpen = useCallback(() => {
        setIsAddModalOpen(true);
        setOnAddTaskSuccess(false);
    }, [])

    const onAddModalClose = useCallback(() => {
        setIsAddModalOpen(false);
    }, [])

    const onSuccess = useCallback(() => {
        setOnAddTaskSuccess(true);
        dispatch(fetchTasksByUserId())
    }, [dispatch]);

    const getTaskEditId = useCallback((task: string) => {
        setTaskToEdit(task);
        setOnAddTaskSuccess(false);
        setIsEditModalOpen(true)
    }, [])

    const getTaskDeleteId = useCallback((task: string) => {
        setTaskToEdit(task);
        setOnAddTaskSuccess(false);
        setIsDeleteModalOpen(true)
    }, [])

    const onEditModalClose = useCallback(() => {
        setIsEditModalOpen(false)
    }, [])

    const onDeleteModalClose = useCallback(() => {
        setIsDeleteModalOpen(false)
    }, [])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page>
                <div className={classNames(cls.TaskPage, {}, [className])}>
                    <TaskPageHeader
                        className={cls.header}
                        onAddTask={onAddModalOpen}
                    />
                    {validateError?.length && validateError.map((err) => (
                        <Alert
                            key={err}
                            theme={AlertTheme.WARNING}
                            text={err}
                        />
                    ))}
                    {onAddTaskSuccess &&
                        <Alert
                            theme={AlertTheme.SUCCESS}
                            text='Success'
                        />
                    }
                    {isAddModalOpen &&
                        <AddTaskModal
                            isOpen={isAddModalOpen}
                            onClose={onAddModalClose}
                            onSuccess={onSuccess}
                        />
                    }
                    {isEditModalOpen &&
                        <EditTaskModal
                            onClose={onEditModalClose}
                            onSuccess={onSuccess}
                            isOpen={isEditModalOpen}
                            editTaskId={taskToEdit}
                        />
                    }
                    {isDeleteModalOpen &&
                        <DeleteTaskModal
                            isOpen={isDeleteModalOpen}
                            editTaskId={taskToEdit}
                            onClose={onDeleteModalClose}
                            onSuccess={onSuccess}
                        />
                    }
                    <TaskList
                        className={cls.taskTable}
                        isLoading={isLoading}
                        getTaskEditId={getTaskEditId}
                        getTaskDeleteId={getTaskDeleteId}
                        error={error}
                        task={tasks}
                    />
                </div>
            </Page>
        </DynamicModuleLoader>
    );
});

export default memo(TasksPage);