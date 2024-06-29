import {classNames} from "shared/lib/classNames/classNames";
import {memo, useCallback, useMemo} from "react";
import {TaskTypes} from "../../model/types/taskTypes";
import cls from './TaskTypesSelect.module.scss'
import {ListBox} from "shared/ui/ListBox/ListBox";

interface TaskTypesSelectProps {
    className?: string;
    value?: TaskTypes;
    onChange?: (value: TaskTypes) => void;
    readonly?: boolean;
    title?: string;
    defaultValue: string;
    all?: boolean;
}

export const TaskTypesSelect = memo(({className, all, value, onChange, defaultValue, readonly, title}: TaskTypesSelectProps) => {
    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as TaskTypes)
    }, [onChange])

    const options = useMemo(() => [
        {value: '', content: 'All', unavailable: all},
        {value: TaskTypes.LAND, content: TaskTypes.LAND},
        {value: TaskTypes.PRELAND, content: TaskTypes.PRELAND},
        {value: TaskTypes.WP, content: TaskTypes.WP},
        {value: TaskTypes.ANOTHER, content: TaskTypes.ANOTHER},
    ], [])

    return (
        <ListBox
            className={classNames('', {}, [className])}
            items={options}
            value={value}
            defaultValue={defaultValue}
            onChange={onChangeHandler}
            readonly={readonly}
            title={title}
        />
    );
});
