import {classNames} from "shared/lib/classNames/classNames";
import cls from './EditTaskFormHeader.module.scss';
import {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {getTaskEditReadonly} from "../../model/selectors/getTaskEditReadonly/getTaskEditReadonly";
import {getUserAuthData} from "entities/User";
import {getTaskEditData} from "../../model/selectors/getTaskEditData/getTaskEditData";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {editTaskActions} from "../../model/slice/editTaskSlice";
import {getTaskEditIsLoading} from "../../model/selectors/getTaskEditIsLoading/getTaskEditIsLoading";

interface EditTaskFormHeaderProps {
    className?: string;
    taskId?: string;
    onSave?: () => void;
}

export const EditTaskFormHeader = memo((props: EditTaskFormHeaderProps) => {
    const {
        className,
        taskId = 'Task ID',
        onSave
    } = props;
    const readonly = useSelector(getTaskEditReadonly);
    const userData = useSelector(getUserAuthData);
    const taskData = useSelector(getTaskEditData);
    const isLoading = useSelector(getTaskEditIsLoading);
    const canEdit = userData?.id === taskData?.user;
    const dispatch = useAppDispatch();
    
    const onEdit = useCallback(() => {
        dispatch(editTaskActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(editTaskActions.cancelEdit())
    }, [dispatch])
    
    return (
        <div className={classNames(cls.EditTaskFormHeader, {}, [className])}>
            <Text
                title={`Task: ${taskId}`}
                theme={TextTheme.PRIMARY}
                align={TextAlign.LEFT}
            />
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly
                        ? (
                            <Button 
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                            >
                                Edit
                            </Button>
                        )
                        : (
                            <>
                                <Button
                                    className={cls.editBtn}
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className={cls.saveBtn}
                                    theme={ButtonTheme.BACKGROUND}
                                    onClick={onSave}
                                    disabled={isLoading}
                                >
                                    Save
                                </Button>
                            </>
                        )
                    }
                </div>
            )}
        </div>
    );
});
