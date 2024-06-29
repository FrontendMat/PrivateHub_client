import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskListNoData.module.scss';
import {memo} from "react";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";

interface TaskListNoDataProps {
    className?: string
}

export const TaskListNoData = memo((props: TaskListNoDataProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.TaskListNoData, {}, [className])}>
            <div className={cls.content}>
                <Text
                    title={'No data'}
                    text={'Task List is empty'}
                    align={TextAlign.CENTER}
                    size={TextSize.L}
                    theme={TextTheme.PRIMARY}
                />
            </div>
        </div>
    );
});
