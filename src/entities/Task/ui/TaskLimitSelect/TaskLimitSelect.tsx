import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskLimitSelect.module.scss';
import {memo, useCallback} from "react";
import {ListBox, ListBoxTheme} from "shared/ui/ListBox/ListBox";

interface TaskLimitSelectProps {
    className?: string;
    onChange?: (value: TaskLimitEnum) => void;
    value?: string;
    title?: string
}

export enum TaskLimitEnum {
    FIFTY = "50",
    SEVENTY_FIVE = "75",
    HUNDRED = "100",
}

const options = [
    {value: TaskLimitEnum.FIFTY, content: TaskLimitEnum.FIFTY},
    {value: TaskLimitEnum.SEVENTY_FIVE, content: TaskLimitEnum.SEVENTY_FIVE},
    {value: TaskLimitEnum.HUNDRED, content: TaskLimitEnum.HUNDRED},
]

export const TaskLimitSelect = memo((props: TaskLimitSelectProps) => {
    const {
        className,
        onChange,
        value,
        title
    } = props;

    const onChangeHandler = useCallback((value?: string) => {
        onChange?.(value as TaskLimitEnum)
    }, [onChange])

    return (
        <ListBox
            className={classNames(cls.TaskLimitSelect, {}, [className])}
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={''}
            theme={ListBoxTheme.TOP_LIST}
            title={title}
        />
    );
});
