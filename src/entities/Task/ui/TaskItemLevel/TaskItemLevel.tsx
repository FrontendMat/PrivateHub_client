import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskItemLevel.module.scss';
import {memo} from "react";

export enum TaskLevelType {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
    HELL = 'Hell'
}

interface TaskItemLevelProps {
    className?: string;
    level?: string,
    type?: TaskLevelType
}

export const TaskItemLevel = memo((props: TaskItemLevelProps) => {
    const {
        className,
        level = TaskLevelType.LOW
    } = props;
    let {type} = props;

    switch (level) {
    case 'Low':
        type = TaskLevelType.LOW;
        break;
    case 'Medium':
        type = TaskLevelType.MEDIUM;
        break;
    case 'High':
        type = TaskLevelType.HIGH;
        break;
    case 'Hell':
        type = TaskLevelType.HELL;
        break;
    default:
        type = TaskLevelType.LOW;
        break;
    }

    return (
        <div className={classNames(cls.TaskItemLevel, {}, [className, cls[type]])}>
            {level}
        </div>
    );
});
