import {classNames} from "shared/lib/classNames/classNames";
import {memo, Suspense} from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {Loader} from "shared/ui/Loader/Loader";
import {AddNewFinanceCategoryFormAsync} from "../AddNewFinanceCategoryForm/AddNewFinanceCategoryForm.async";
import {FinanceType} from "entities/Finance";

interface AddNewFinanceCategoryModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
    financeType: FinanceType;
    title: string
}

export const AddNewFinanceCategoryModal = memo((props: AddNewFinanceCategoryModalProps) => {
    const {
        className,
        isOpen,
        financeType,
        title,
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
                    financeType={financeType}
                    title={title}
                />
            </Suspense>
        </Modal>
    );
});