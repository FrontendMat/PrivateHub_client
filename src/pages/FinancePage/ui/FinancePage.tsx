import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinancePage.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {useSelector} from "react-redux";
import {Page} from "shared/ui/Page";
import {BlockSwitcher} from "shared/ui/BlockSwitcher";
import {AddNewFinanceCategoryModal } from "features/addNewFinanceCategory";
import {
    AddNewFinanceTransactionModal
} from "features/addNewFinanceTransaction";
import {Alert} from "shared/ui/Alert/Alert";
import {FinanceBlock, getFinanceData, getFinanceType} from "entities/Finance";
import {FinanceStatistic} from "features/getFinanceStatistic";

interface FinancePageProps {
    className?: string
}

const FinancePage = memo((props: FinancePageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const financeType = useSelector(getFinanceType);
    const financeData = useSelector(getFinanceData);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsAddModalOpen(!isAddModalOpen)
    }, [isAddModalOpen])

    const openEditModal = useCallback(() => {
        setIsEditModalOpen(!isEditModalOpen)
    }, [isEditModalOpen])

    return (
        <Page className={classNames(cls.FinancePage, {}, [className])}>
            <AddNewFinanceCategoryModal
                title={financeType}
                onClose={openModal}
                isOpen={isAddModalOpen}
                financeType={financeType}
            />
            <AddNewFinanceTransactionModal
                onClose={openEditModal}
                isOpen={isEditModalOpen}
                financeType={financeType}
                categories={financeData}
            />
            <Alert
                text={'Success'}
            />
            <BlockSwitcher
                tabsNav={[
                    'Incomes',
                    'Expenses',
                    'Statistic',
                ]}
                tabsItems={[
                    <FinanceBlock
                        key={'1'}
                        title={'Incomes'}
                        color={'green'}
                        onOpenModal={openModal}
                        onOpenEditModal={openEditModal}
                    />,
                    <FinanceBlock
                        key={'2'}
                        title={'Expenses'}
                        color={'red'}
                        onOpenModal={openModal}
                        onOpenEditModal={openEditModal}
                    />,
                    <FinanceStatistic
                        key={'3'}
                    />
                ]}
            />
        </Page>
    );
});

export default FinancePage;