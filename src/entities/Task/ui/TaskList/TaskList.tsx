import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskList.module.scss';
import {memo} from "react";
import {TaskItem} from "../TaskItem/TaskItem";
import {TaskListHeader} from "../TaskListHeader/TaskListHeader";
import {Task} from "../../model/types/task";
import {TaskListSkeleton} from "../TaskListSkeleton/TaskListSkeleton";
import {PageError} from "widgets/PageError/PageError";
import {TaskListNoData} from "../TaskListNoData/TaskListNoData";
import {TaskListPagination} from "../TaskListPagination/TaskListPagination";

interface TaskListProps {
    className?: string;
    task?: Task[];
    isLoading?: boolean;
    error?: string;
    getTaskEditId: (task: string) => void;
    getTaskDeleteId: (task: string) => void;
}

export const TaskList = memo((props: TaskListProps) => {
    const {
        className,
        task,
        isLoading,
        error,
        getTaskEditId,
        getTaskDeleteId,
    } = props;

    let content;
    if (error) {
        content = (
            <PageError
                title={'Something went wrong'}
                text={'Please, reload page'}
            />
        )
    } else if (isLoading) {
        content = (
            <TaskListSkeleton/>
        )
    } else if (task?.length && task.length > 0) {
        content = (
            <>
                <table className={cls.table}>
                    <thead className={cls.thead}>
                        <TaskListHeader className={cls.tableHeader}/>
                    </thead>
                    <tbody className={cls.tbody}>
                        {task?.map((task) => (
                            <TaskItem
                                key={task._id}
                                task={task}
                                getTaskEditId={getTaskEditId}
                                getTaskDeleteId={getTaskDeleteId}
                            />
                        ))}
                    </tbody>
                </table>
            </>
        )
    } else {
        content = (
            <TaskListNoData/>
        )
    }

    return (
        <div className={classNames(cls.TaskList, {}, [className])}>
            <div className={cls.contentWrapper}>
                {content}
            </div>
            <TaskListPagination/>
        </div>
    );
});
