import {classNames} from "shared/lib/classNames/classNames";
import cls from './DeleteTaskModal.module.scss';
import {memo, Suspense, useCallback} from "react";
import {Loader} from "shared/ui/Loader/Loader";
import {Modal} from "shared/ui/Modal/Modal";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import WarningIcon from "shared/assets/icons/error.svg"
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {deleteTaskById} from "../../model/services/deleteTaskById/deleteTaskById";

interface DeleteTaskModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
    onSuccess: () => void;
    editTaskId: string
}

export const DeleteTaskModal = memo((props: DeleteTaskModalProps) => {
    const {
        className,
        isOpen,
        editTaskId,
        onClose,
        onSuccess
    } = props;
    const dispatch = useAppDispatch();

    const onTaskDelete = useCallback(async () => {
        const result = await dispatch(deleteTaskById(editTaskId))
        if (result.meta.requestStatus === 'fulfilled') {
            onClose()
            onSuccess()
        }
    }, [dispatch, editTaskId, onClose, onSuccess])

    return (
        <Modal
            className={classNames(cls.EditTaskModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <div className={cls.iconWrapper}>
                    <Icon
                        Svg={WarningIcon}
                        size={IconSize.L}
                        className={cls.warning}
                    />
                </div>
                <Text
                    title={'Are you sure you want to delete this task?'}
                    text={'Once deleted, you will not be able to recover it'}
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                />
                <div className={cls.btnWrapper}>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        theme={ButtonTheme.BACKGROUND_RED}
                        onClick={onTaskDelete}
                    >
                        Delete
                    </Button>
                </div>
            </Suspense>
        </Modal>
    );
});
