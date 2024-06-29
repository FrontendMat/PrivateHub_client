import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskItem.module.scss';
import {memo, useCallback} from "react";
import {Task} from "../../model/types/task";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import DeleteIcon from "shared/assets/icons/delete.svg";
import EyeIcon from "shared/assets/icons/eye.svg";
import DoneIcon from "shared/assets/icons/true.svg";
import NotDoneIcon from "shared/assets/icons/false.svg";
import {TaskItemLevel} from "../TaskItemLevel/TaskItemLevel";

interface TaskItemProps {
    className?: string;
    task: Task;
    getTaskEditId: (task: string) => void;
    getTaskDeleteId: (task: string) => void;
}

export const TaskItem = memo((props: TaskItemProps) => {
    const {
        className,
        task,
        getTaskEditId,
        getTaskDeleteId
    } = props;

    const editTask = useCallback(() => {
        getTaskEditId(task._id)
    }, [task, getTaskEditId])

    const deleteTask = useCallback(() => {
        getTaskDeleteId(task._id)
    }, [task._id, getTaskDeleteId])

    return (
        <tr className={classNames(cls.TaskItem, {}, [className])}>
            {/*<td className={cls.id}>*/}
            {/*    {task._id}*/}
            {/*</td>*/}
            <td className={cls.date}>
                {task.date}
            </td>
            <td className={cls.name}>
                {task.user?.username}
            </td>
            <td>
                <div className={cls.title}>
                    {task.title}
                </div>
            </td>
            <td className={cls.type}>
                {task.type}
            </td>
            <td className={cls.level}>
                <TaskItemLevel level={task.level}/>
            </td>
            <td className={cls.status}>
                <div className={cls.statusIcons}>
                    {task.isDone
                        ? <Icon size={IconSize.M} Svg={DoneIcon} className={cls.done}/>
                        : <Icon size={IconSize.M} Svg={NotDoneIcon} className={cls.notDone}/>
                    }
                </div>
            </td>
            <td className={cls.actions}>
                <div onClick={editTask}>
                    <Icon
                        className={cls.eyeIcon}
                        Svg={EyeIcon}
                    />
                </div>
                <div onClick={deleteTask}>
                    <Icon
                        className={cls.deleteIcon}
                        Svg={DeleteIcon}
                    />
                </div>
            </td>
        </tr>

    );
});
