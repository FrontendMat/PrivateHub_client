import {classNames} from "shared/lib/classNames/classNames";
import cls from './EditTaskModal.module.scss';
import {memo, Suspense, useEffect} from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {Loader} from "shared/ui/Loader/Loader";
import {EditTaskFormAsync} from "../EditTaskForm/EditTaskForm.async";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchTaskDetailsById} from "../../model/services/fetchTaskDetailsById/fetchTaskDetailsById";
import {useSelector} from "react-redux";
import {getTaskEditIsLoading} from "../../model/selectors/getTaskEditIsLoading/getTaskEditIsLoading";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {editTaskReducer} from "../../model/slice/editTaskSlice";
import {getTaskEditError} from "../../model/selectors/getTaskEditError/getTaskEditError";

interface EditTaskModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
    onSuccess: () => void;
    editTaskId?: string
}

const reducers: ReducersList = {
    editTaskForm: editTaskReducer
}

export const EditTaskModal = memo((props: EditTaskModalProps) => {
    const {
        className,
        isOpen,
        onSuccess,
        onClose,
        editTaskId
    } = props;
    const isLoading = useSelector(getTaskEditIsLoading);
    const error = useSelector(getTaskEditError);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (editTaskId) {
            dispatch(fetchTaskDetailsById(editTaskId))
        }
    }, [dispatch, editTaskId])

    return (
        <Modal
            className={classNames(cls.EditTaskModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <DynamicModuleLoader reducers={reducers}>
                    <EditTaskFormAsync
                        editTaskId={editTaskId}
                        onModalClose={onClose}
                        onSuccess={onSuccess}
                        isLoading={isLoading}
                        error={error}
                    />
                </DynamicModuleLoader>
            </Suspense>
        </Modal>
    );
});
