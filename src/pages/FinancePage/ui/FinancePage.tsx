import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinancePage.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {Page} from "shared/ui/Page";
import {BlockSwitcher} from "shared/ui/BlockSwitcher";
import {Incomes} from "features/getAndUpdateIncomes";
import { AddNewFinanceCategoryModal } from "features/addNewFinanceCategory";
import {Alert} from "shared/ui/Alert/Alert";
import {Expenses} from "features/getAndUpdateExpenses";

interface FinancePageProps {
    className?: string
}

const FinancePage = memo((props: FinancePageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsAddModalOpen(!isAddModalOpen)
    }, [isAddModalOpen])

    const onSuccess = useCallback(() => {
        openModal()
    }, [])

    return (
        <Page className={classNames(cls.FinancePage, {}, [className])}>
            {isAddModalOpen &&
            <AddNewFinanceCategoryModal
                onClose={openModal}
                onSuccess={onSuccess}
                isOpen={isAddModalOpen}
            />
            }
            <BlockSwitcher
                tabsNav={[
                    'Incomes',
                    'Expenses',
                    'Statistic',
                ]}
                tabsItems={[
                    <Incomes
                        onOpenModal={openModal}
                    />,
                    <Expenses/>,
                    <div>penis</div>,
                ]}
            />
        </Page>
    );
});

export default FinancePage;