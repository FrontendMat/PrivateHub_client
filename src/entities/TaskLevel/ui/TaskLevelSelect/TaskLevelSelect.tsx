import {classNames} from "shared/lib/classNames/classNames";
import {memo, useCallback} from "react";
import {TaskLevel} from "../../model/taskLevel";
import {ListBox} from "shared/ui/ListBox/ListBox";

interface TaskLevelSelectProps {
    className?: string;
    value?: TaskLevel;
    onChange?: (value: TaskLevel) => void;
    readonly?: boolean;
    title?: string;
    defaultValue: string;
}

const options = [
    {value: TaskLevel.LOW, content: TaskLevel.LOW},
    {value: TaskLevel.MEDIUM, content: TaskLevel.MEDIUM},
    {value: TaskLevel.HIGH, content: TaskLevel.HIGH},
    {value: TaskLevel.HELL, content: TaskLevel.HELL},
]

export const TaskLevelSelect = memo(({className, value, defaultValue, title, onChange, readonly}: TaskLevelSelectProps) => {
    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as TaskLevel )
    }, [onChange])

    return (
        <ListBox
            className={classNames('', {}, [className])}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            defaultValue={defaultValue}
            title={title}
        />
    );
});
