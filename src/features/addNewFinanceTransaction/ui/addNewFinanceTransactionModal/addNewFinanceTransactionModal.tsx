import {classNames} from "shared/lib/classNames/classNames";
import {memo, Suspense} from "react";
import {Modal} from "shared/ui/Modal/Modal";
import {Loader} from "shared/ui/Loader/Loader";
import {AddNewFinanceTransactionFormAsync} from "../addNewFinanceTransactionForm/addNewFinanceTransactionForm.async";
import {Finance, FinanceType} from "entities/Finance";

interface AddNewFinanceCategoryModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
    categories?: Finance[];
    financeType: FinanceType;
}

export const AddNewFinanceTransactionModal = memo((props: AddNewFinanceCategoryModalProps) => {
    const {
        className,
        isOpen,
        financeType,
        onClose,
        categories
    } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader/>}>
                <AddNewFinanceTransactionFormAsync
                    onModalClose={onClose}
                    categories={categories}
                    financeType={financeType}
                />
            </Suspense>
        </Modal>
    );
});