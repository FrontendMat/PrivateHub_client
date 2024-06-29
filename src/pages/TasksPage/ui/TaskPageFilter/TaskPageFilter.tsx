import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskPageFilter.module.scss';
import {memo, useCallback} from "react";
import {ListBox} from "shared/ui/ListBox/ListBox";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {tasksActions} from "../../model/slice/tasksSlice";
import {useSelector} from "react-redux";
import {getTasksFilter} from "../../model/selectors/tasks/tasks";
import {TaskTypes, TaskTypesSelect} from "entities/TaskTypes";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {fetchTasksByUserId} from "../../model/services/fetchTasksByUserId/fetchTasksByUserId";
import {getUserAuthData} from "entities/User";
import {TaskLevel, TaskLevelSelect} from "entities/TaskLevel";

interface TaskPageFilterProps {
    className?: string
}

export const TaskPageFilter = memo((props: TaskPageFilterProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const taskFilter = useSelector(getTasksFilter);
    const user = useSelector(getUserAuthData);

    const users = [
        {value: '', content: 'All'},
        {value: 'LasVegas', content: 'LasVegas'},
        {value: 'Sultan', content: 'Sultan'},
        {value: 'User1', content: 'User1'},
        {value: 'User2', content: 'User2'},
        {value: 'User3', content: 'User3'},
    ]

    const status = [
        {value: '', content: 'All'},
        {value: 'FALSE', content: 'Not Done'},
        {value: 'TRUE', content: 'Done'},
    ]

    const filterByUser = useCallback((user: string) => {
        dispatch(tasksActions.setFilter({user: user}))
    }, [dispatch])

    const filterByOffice = useCallback((office: string) => {
        dispatch(tasksActions.setFilter({office: office}))
    }, [dispatch])

    const filterByType = useCallback((type: string) => {
        dispatch(tasksActions.setFilter({type: type}))
    }, [dispatch])

    const filterByLevel = useCallback((level: string) => {
        dispatch(tasksActions.setFilter({level: level}))
    }, [dispatch])

    const filterByStatus = useCallback((status: string) => {
        dispatch(tasksActions.setFilter({status: status}))
    }, [dispatch])

    const filterTask = useCallback(() => {
        dispatch(fetchTasksByUserId())
    }, [dispatch])

    const resetFilterTask = useCallback(() => {
        dispatch(tasksActions.setResetFilter())
        dispatch(fetchTasksByUserId())
    }, [dispatch])

    return (
        <div className={classNames(cls.TaskPageFilter, {}, [className])}>
            <TaskTypesSelect
                defaultValue={'Filter'}
                title={'Type'}
                value={taskFilter?.type as TaskTypes}
                onChange={filterByType}
            />

            <TaskLevelSelect
                onChange={filterByLevel}
                defaultValue={'Filter'}
                value={taskFilter?.level as TaskLevel}
                title={'Level'}
            />
            <div className={cls.btnWrapper}>
                <Button
                    theme={ButtonTheme.BACKGROUND}
                    onClick={filterTask}
                    className={cls.btn}
                    disabled={!taskFilter}
                >
                    Filter
                </Button>
                <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={resetFilterTask}
                    className={cls.btn}
                    disabled={!taskFilter}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
});
