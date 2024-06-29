import {classNames} from "shared/lib/classNames/classNames";
import cls from './AddTaskForm.module.scss';
import {memo, useCallback} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input, InputTheme} from "shared/ui/Input/Input";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {TaskLevel, TaskLevelSelect} from "entities/TaskLevel";
import {TaskTypes, TaskTypesSelect} from "entities/TaskTypes";
import {useSelector} from "react-redux";
import {getTaskData} from "../../model/selectors/getTaskData/getTaskData";
import {getTaskIsLoading} from "../../model/selectors/getTaskIsLoading/getTaskIsLoading";
import {getTaskError} from "../../model/selectors/getTaskError/getTaskError";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {addTaskActions, addTaskReducer} from "../../model/slice/addTaskSlice";
import {addTasksByUserId} from "../../model/services/addTaskByUserId/addTaskByUserId";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {Textarea, TextareaTheme} from "shared/ui/Textarea/Textarea";
import {CheckBox} from "shared/ui/CheckBox/CheckBox";


interface AddTaskFormProps {
    className?: string;
    onModalClose: () => void;
    onSuccess: () => void;
}

const reducers: ReducersList = {
    addTaskForm: addTaskReducer
}

const AddTaskForm = memo((props: AddTaskFormProps) => {
    const {
        className,
        onModalClose,
        onSuccess,
    } = props;
    const error = useSelector(getTaskError);
    const task = useSelector(getTaskData);
    const isLoading = useSelector(getTaskIsLoading);
    const dispatch = useAppDispatch();

    const setTitle = useCallback((value: string) => {
        dispatch(addTaskActions.addTask({title: value}))
    }, [dispatch]);

    const setDescription = useCallback((value: string) => {
        dispatch(addTaskActions.addTask({description: value}))
    }, [dispatch])

    const setType = useCallback((value: TaskTypes) => {
        dispatch(addTaskActions.addTask({type: value}))
    }, [dispatch])

    const setOffice = useCallback((value: string) => {
        dispatch(addTaskActions.addTask({office: value}))
    }, [dispatch])

    const setLevel = useCallback((value: TaskLevel) => {
        dispatch(addTaskActions.addTask({level: value}))
    }, [dispatch])

    const setIsDone = useCallback(() => {
        dispatch(addTaskActions.addTask({isDone: !task?.isDone}))
    }, [dispatch, task?.isDone])

    const addTask = useCallback(async () => {
        const result = await dispatch(addTasksByUserId())
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
            onModalClose()
        }
    }, [dispatch, onModalClose, onSuccess])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddTaskForm, {}, [className])}>
                <Text
                    className={cls.title}
                    title={'New Task'}
                    align={TextAlign.LEFT}
                    theme={TextTheme.PRIMARY}
                />
                <div className={cls.form}>
                    <div className={cls.selectors}>
                        <div className={cls.selectItem}>
                            <TaskTypesSelect
                                onChange={setType}
                                value={task?.type}
                                title={'Type'}
                                all={true}
                                defaultValue={'Select Type'}
                            />
                        </div>
                        <div className={cls.selectItem}>
                            <TaskLevelSelect
                                onChange={setLevel}
                                value={task?.level}
                                title={'Level'}
                                defaultValue={'Select Level'}
                            />
                        </div>
                        <div className={cls.selectItem}>
                        </div>
                        <div className={cls.selectItem}>
                            <CheckBox
                                onChange={setIsDone}
                                checked={task?.isDone}
                                title={'Status'}
                            />
                        </div>
                    </div>
                    <div className={cls.inputItem}>
                        <Text
                            text={'Title'}
                            className={cls.text}
                        />
                        <Input
                            placeholder={'Task title...'}
                            onChange={setTitle}
                            value={task?.title}
                            theme={InputTheme.BACKGROUND}
                        />
                    </div>
                    <div className={cls.inputItem}>
                        <Text
                            text={'Description'}
                            className={cls.text}
                        />
                        <Textarea
                            placeholder={'Task description...'}
                            onChange={setDescription}
                            value={task?.description}
                            theme={TextareaTheme.BACKGROUND}
                            className={cls.description}
                        />
                    </div>
                </div>
                <div className={cls.buttons}>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onModalClose}
                    >
                        Close
                    </Button>
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        onClick={addTask}
                        disabled={isLoading}
                    >
                        Create
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
});


export default AddTaskForm;