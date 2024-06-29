import {classNames} from "shared/lib/classNames/classNames";
import cls from './EditTaskForm.module.scss';
import {memo, useCallback} from "react";
import {editTaskActions} from "../../model/slice/editTaskSlice";
import {Text} from "shared/ui/Text/Text";
import {Input, InputTheme} from "shared/ui/Input/Input";
import {TaskTypes, TaskTypesSelect} from "entities/TaskTypes";
import {TaskLevel, TaskLevelSelect} from "entities/TaskLevel";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getTaskEditForm} from "../../model/selectors/getTaskEditData/getTaskEditData";
import {editTaskDetails} from "../../model/services/editTaskDetails/editTaskDetails";
import {EditTaskFormHeader} from "../../ui/EditTaskFormHeader/EditTaskFormHeader";
import {getTaskEditReadonly} from "../../model/selectors/getTaskEditReadonly/getTaskEditReadonly";
import {Textarea, TextareaTheme} from "shared/ui/Textarea/Textarea";
import {EditTaskFormSkeleton} from "../EditTaskFormSkeleton/EditTaskFormSkeleton";
import {CheckBox} from "shared/ui/CheckBox/CheckBox";

interface EditTaskFormProps {
    className?: string;
    onModalClose: () => void;
    onSuccess: () => void;
    editTaskId?: string;
    isLoading?: boolean;
    error?: string
}

const EditTaskForm = memo((props: EditTaskFormProps) => {
    const {
        className,
        onModalClose,
        onSuccess,
        isLoading,
        error,
    } = props;
    const dispatch = useAppDispatch();
    const task = useSelector(getTaskEditForm);
    const readonly = useSelector(getTaskEditReadonly);

    const setTitle = useCallback((value: string) => {
        dispatch(editTaskActions.editTask({title: value}))
    }, [dispatch]);

    const setDescription = useCallback((value: string) => {
        dispatch(editTaskActions.editTask({description: value}))
    }, [dispatch])

    const setType = useCallback((value: TaskTypes) => {
        dispatch(editTaskActions.editTask({type: value}))
    }, [dispatch])

    const setOffice = useCallback((value: string) => {
        dispatch(editTaskActions.editTask({office: value}))
    }, [dispatch])

    const setLevel = useCallback((value: TaskLevel) => {
        dispatch(editTaskActions.editTask({level: value}))
    }, [dispatch])

    const setIsDone = useCallback(() => {
        dispatch(editTaskActions.editTask({isDone: !task?.isDone}))
    }, [dispatch, task?.isDone])

    const editTask = useCallback(async () => {
        const result = await dispatch(editTaskDetails())
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
            onModalClose()
        }
    }, [dispatch, onModalClose, onSuccess])

    if (task === undefined) {
        return (
            <div className={classNames(cls.EditTaskForm, {}, [className])}>
                <EditTaskFormSkeleton/>
            </div>
        )
    } else if (error) {
        return (
            <div className={classNames(cls.EditTaskForm, {}, [className])}>
                error
            </div>
        )
    }

    return (
        <div className={classNames(cls.EditTaskForm, {}, [className])}>
            <EditTaskFormHeader
                onSave={editTask}
                taskId={task?._id}
            />
            <div className={cls.form}>
                <div className={cls.selectors}>
                    <div className={cls.selectItem}>
                        <TaskTypesSelect
                            onChange={setType}
                            value={task?.type}
                            readonly={readonly}
                            title={'Type'}
                            defaultValue={'Select Type'}
                        />
                    </div>
                    <div className={cls.selectItem}>
                        <TaskLevelSelect
                            onChange={setLevel}
                            value={task?.level}
                            readonly={readonly}
                            title={'Level'}
                            defaultValue={'Select Level'}
                        />
                    </div>
                    <div className={cls.selectItem}>
                        <CheckBox
                            onChange={setIsDone}
                            checked={task?.isDone}
                            readonly={readonly}
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
                        readonly={readonly}
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
                        readonly={readonly}
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
            </div>
        </div>
    );
});

export default EditTaskForm;
