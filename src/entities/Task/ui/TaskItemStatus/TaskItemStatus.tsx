import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskItemStatus.module.scss';
import {memo} from "react";

interface TaskItemStatusProps {
    className?: string
}

export const TaskItemStatus = memo((props: TaskItemStatusProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.TaskItemStatus, {}, [className])}>

        </div>
    );
});
