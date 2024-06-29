import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskPageHeader.module.scss';
import {memo, useCallback} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {SearchField} from "features/searchField";
import {TaskPageFilter} from "../TaskPageFilter/TaskPageFilter";
import {tasksActions} from "pages/TasksPage/model/slice/tasksSlice";
import {fetchTasksByUserId} from "pages/TasksPage/model/services/fetchTasksByUserId/fetchTasksByUserId";
import {useSelector} from "react-redux";
import {getTasksFilter, getTasksSearch} from "pages/TasksPage/model/selectors/tasks/tasks";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useDebounce} from "shared/lib/hooks/useDebounce/useDebounce";
import {TaskPageSort} from "../TaskPageSort/TaskPageSort";

interface TaskPageHeaderProps {
    className?: string;
    onAddTask?: () => void;
}

export const TaskPageHeader = memo((props: TaskPageHeaderProps) => {
    const {
        className,
        onAddTask
    } = props;
    const dispatch = useAppDispatch();
    const search = useSelector(getTasksSearch);
    const filter = useSelector(getTasksFilter);
    const fetchSearchData = useCallback(() => {
        dispatch(fetchTasksByUserId())
    }, [dispatch])

    const debounceFetchSearchData = useDebounce(fetchSearchData, 500)

    const onSearchEnter = useCallback((search: string) => {
        dispatch(tasksActions.setSearch(search))
        debounceFetchSearchData()
    }, [dispatch, debounceFetchSearchData]);

    const clearSearchInput = useCallback(() => {
        dispatch(tasksActions.setSearch(''))
        debounceFetchSearchData()
    }, [dispatch, debounceFetchSearchData]);

    return (
        <div className={classNames(cls.TaskPageHeader, {}, [className])}>
            <div className={cls.topBlock}>
                <Button theme={ButtonTheme.BACKGROUND} onClick={onAddTask}>
                    Create Task
                </Button>
                <TaskPageSort/>
                <SearchField
                    className={cls.searchField}
                    search={search}
                    onSearchEnter={onSearchEnter}
                    clearInput={clearSearchInput}
                />
            </div>
            <div className={cls.bottomBlock}>
                <TaskPageFilter className={cls.filtersBlock}/>
            </div>
        </div>
    );
});
