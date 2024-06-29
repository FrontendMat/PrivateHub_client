import {classNames} from "shared/lib/classNames/classNames";
import cls from './AddTaskModal.module.scss';
import {memo, Suspense} from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {Loader} from "shared/ui/Loader/Loader";
import {AddTaskFormAsync} from "../AddTaskForm/AddTaskForm.async";

interface AddTaskModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const AddTaskModal = memo((props: AddTaskModalProps) => {
    const {
        className,
        isOpen,
        onSuccess,
        onClose,
    } = props;

    return (
        <Modal
            className={classNames(cls.AddTaskModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <AddTaskFormAsync
                    onModalClose={onClose}
                    onSuccess={onSuccess}
                />
            </Suspense>
        </Modal>
    );
});
