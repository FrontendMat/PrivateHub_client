import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskPageSort.module.scss';
import {memo, useCallback} from "react";
import {ListBox} from "shared/ui/ListBox/ListBox";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getTasksSort} from "../../model/selectors/tasks/tasks";
import {tasksActions} from "pages/TasksPage/model/slice/tasksSlice";

interface TaskPageSortProps {
    className?: string
}

export const TaskPageSort = memo((props: TaskPageSortProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const sort = useSelector(getTasksSort);

    const sortOptions = [
        {value: 'Des', content: 'Des'},
        {value: 'Asc', content: 'Asc'},
    ]

    const onSort = useCallback((sort: string) => {
        dispatch(tasksActions.setSort(sort))
    }, [dispatch])

    return (
        <div className={classNames(cls.TaskPageSort, {}, [className])}>
            <ListBox
                items={sortOptions}
                onChange={onSort}
                title={'Sort'}
                value={sort}
            />
        </div>
    );
});
