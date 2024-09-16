import {memo, useMemo} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {FinanceBlock, getFinanceData, getFinanceType} from "entities/Finance";
import {FinanceStatistic} from "features/getFinanceStatistic";
import {AddNewFinanceCategoryModal} from "features/addNewFinanceCategory";
import {AddNewFinanceTransactionModal} from "features/addNewFinanceTransaction";
import {blockSwitcherNav} from "shared/types/blockSwitcher";
import FinanceIcon from "shared/assets/icons/money.svg";
import BarIcon from "shared/assets/icons/barChart.svg";
import {Alert} from "shared/ui/Alert/Alert";
import {BlockSwitcher} from "shared/ui/BlockSwitcher";
import {useGetModals} from "widgets/FinancePanel/lib/useGetModals";

export const FinancePageModals = memo(() => {
    const {t} = useTranslation('finance');
    const financeType = useSelector(getFinanceType);
    const financeData = useSelector(getFinanceData);
    const navTabs: blockSwitcherNav[] = useMemo(() => (
        [
            {text: t('Incomes'), icon: FinanceIcon},
            {text: t('Expenses'), icon: FinanceIcon},
            {text: t('Statistic'), icon: BarIcon}
        ]
    ), [t])
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

    return (
        <>
            {isSuccess
                && <Alert
                    text={text}
                    color={'success'}
                />
            }

            <AddNewFinanceTransactionModal
                setAlertText={setAlertText}
                onSuccess={onSuccess}
                onClose={openEditModal}
                isOpen={isEditModalOpen}
                financeType={financeType}
                categories={financeData}
            />
            <BlockSwitcher
                tabsNav={navTabs}
                tabsItems={[
                    <FinanceBlock
                        key={1}
                        type={'Incomes'}
                        title={t('Incomes')}
                        color={'green'}
                        onOpenModal={openModal}
                        onOpenEditModal={openEditModal}
                    />,
                    <FinanceBlock
                        key={2}
                        type={'Expenses'}
                        title={t('Expenses')}
                        color={'red'}
                        onOpenModal={openModal}
                        onOpenEditModal={openEditModal}
                    />,
                    <FinanceStatistic
                        key={3}
                    />
                ]}
            />
        </>
    );
});
