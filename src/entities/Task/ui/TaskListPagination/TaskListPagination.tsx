import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskListPagination.module.scss';
import {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {getTasksLimitNum, getTasksPageNum, getTasksTotalPages} from "pages/TasksPage/model/selectors/tasks/tasks";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Pagination} from "shared/ui/Pagination/ui/Pagination/Pagination";
import {tasksActions} from "pages/TasksPage/model/slice/tasksSlice";
import {TaskLimitEnum, TaskLimitSelect} from "entities/Task/ui/TaskLimitSelect/TaskLimitSelect";
import {fetchTasksByUserId} from "pages/TasksPage/model/services/fetchTasksByUserId/fetchTasksByUserId";

interface TaskListPaginationProps {
    className?: string;
}

export const TaskListPagination = memo((props: TaskListPaginationProps) => {
    const {
        className,
    } = props;
    const totalPages = useSelector(getTasksTotalPages);
    const page = useSelector(getTasksPageNum) || 0;
    const limit = useSelector(getTasksLimitNum);
    const dispatch = useAppDispatch();

    const nextPage = useCallback((newPage: number) => {
        dispatch(tasksActions.setPage(newPage))
    }, [dispatch])

    const onLimitHandler = useCallback((value: TaskLimitEnum) => {
        dispatch(tasksActions.setLimit(+value));
        dispatch(tasksActions.setPage(1))
        dispatch(fetchTasksByUserId())
    }, [dispatch])

    return (
        <div className={classNames(cls.TaskListPagination, {}, [className])}>
            <Pagination
                nextPage={nextPage}
                totalPages={totalPages}
                currentPage={page}
            />
            <TaskLimitSelect
                value={String(limit)}
                onChange={onLimitHandler}
                title={'Tasks limit'}
            />
        </div>
    );
});
