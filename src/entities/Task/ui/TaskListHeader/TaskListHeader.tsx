import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskListHeader.module.scss';
import {memo} from "react";

interface TaskListHeaderProps {
    className?: string,
}

export const TaskListHeader = memo((props: TaskListHeaderProps) => {
    const {
        className,
    } = props;

    return (
        <tr className={classNames(cls.TaskListHeader, {}, [className])}>
            <th className={cls.th}>Date</th>
            <th className={cls.th}>User</th>
            <th className={cls.th}>Title</th>
            <th className={cls.th}>Type</th>
            <th className={cls.th}>Office</th>
            <th className={cls.th}>Level</th>
            <th className={cls.th_center}>Status</th>
            <th className={cls.th_center}>Actions</th>
        </tr>
    );
});
