import {classNames} from "shared/lib/classNames/classNames";
import {memo, Suspense} from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {Loader} from "shared/ui/Loader/Loader";
import {AddNewFinanceCategoryFormAsync} from "../AddNewFinanceCategoryForm/AddNewFinanceCategoryForm.async";

interface AddNewFinanceCategoryModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const AddNewFinanceCategoryModal = memo((props: AddNewFinanceCategoryModalProps) => {
    const {
        className,
        isOpen,
        onSuccess,
        onClose,
    } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <AddNewFinanceCategoryFormAsync
                    onModalClose={onClose}
                    onSuccess={onSuccess}
                />
            </Suspense>
        </Modal>
    );
});