import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinancePanel.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {AddNewFinanceCategoryModal} from "features/addNewFinanceCategory";
import {AddNewFinanceTransactionModal} from "features/addNewFinanceTransaction";
import {FinanceBlock, FinanceType, getFinanceData} from "entities/Finance";
import {useGetModals} from "widgets/FinancePanel/lib/useGetModals";
import {useSelector} from "react-redux";
import {Alert} from "shared/ui/Alert/Alert";
import {TableHeaderTheme} from "shared/ui/Table/Table";
import {VStack} from "shared/ui/Stack";
import {ChangeDateBlock} from "features/changeUpdateDate";

interface FinancePanelProps {
    className?: string,
    financeType: FinanceType,
}

export const FinancePanel = memo((props: FinancePanelProps) => {
    const {
        className,
        financeType
    } = props;
    const financeData = useSelector(getFinanceData);
    const {t} = useTranslation();

    const {
        isSuccess,
        text,
        isAddModalOpen,
        isEditModalOpen,
        openModal,
        onSuccess,
        openEditModal,
        setAlertText
    } = useGetModals();
    
    let color;
    switch (financeType) {
    case 'Incomes':
        color = 'green';
        break;
    case "Expenses":
        color = 'red'
    }

    return (
        <VStack
            gap={'20'}
            className={classNames(cls.FinancePanel, {}, [className])}
        >
            {isSuccess
                && <Alert
                    text={text}
                    color={'success'}
                />
            }
            <AddNewFinanceCategoryModal
                setAlertText={setAlertText}
                onSuccess={onSuccess}
                title={financeType}
                onClose={openModal}
                isOpen={isAddModalOpen}
                financeType={financeType}
            />
            <AddNewFinanceTransactionModal
                setAlertText={setAlertText}
                onSuccess={onSuccess}
                onClose={openEditModal}
                isOpen={isEditModalOpen}
                financeType={financeType}
                categories={financeData}
            />
            <FinanceBlock
                type={financeType}
                title={t(financeType)}
                color={color as TableHeaderTheme}
                onOpenModal={openModal}
                onOpenEditModal={openEditModal}
                dateBlock={ <ChangeDateBlock/>}
            />
        </VStack>
    );
});
