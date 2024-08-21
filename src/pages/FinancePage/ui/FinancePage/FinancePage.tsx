import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinancePage.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Page} from "shared/ui/Page";
import {TransactionList} from "entities/Transaction";
import {FinancePageModals} from "../FinancePageModals/FinancePageModals";
import {VStack} from "shared/ui/Stack";

interface FinancePageProps {
    className?: string
}

const FinancePage = memo((props: FinancePageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('finance');

    return (
        <Page className={classNames(cls.FinancePage, {}, [className])}>
            <VStack gap={'20'}>
                <FinancePageModals/>
                <TransactionList/>
            </VStack>
        </Page>
    );
});

export default FinancePage;