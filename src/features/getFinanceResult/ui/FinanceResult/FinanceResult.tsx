import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useEffect} from "react";
import {HStack} from "shared/ui/Stack";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MoneyIcon from "shared/assets/icons/money-result.svg";
import BalanceIcon from "shared/assets/icons/balance.svg";
import BankIcon from "shared/assets/icons/bank.svg";
import {FinanceResultCard} from "../FinanceResultCard/FinanceResultCard";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {financeResultReducer} from "../../model/slice/financeResultSlice";
import {BadgeNew} from "shared/ui/Badge";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchFinanceResult} from "../../model/services/fetchFinanceResult";
import {useSelector} from "react-redux";
import {
    getFinanceResultData, getFinanceResultError, getFinanceResultIsLoading
} from "../../model/selectors/getFinanceResultData";

interface FinanceResultProps {
    className?: string
}

const reducers: ReducersList = {
    financeResult: financeResultReducer
}

export const FinanceResult = memo((props: FinanceResultProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('dashboard');
    const dispatch = useAppDispatch();
    const data = useSelector(getFinanceResultData);
    const isLoading = useSelector(getFinanceResultIsLoading);
    const error = useSelector(getFinanceResultError);

    useEffect(() => {
        dispatch(fetchFinanceResult())
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack max gap={'20'} align={'center'} className={classNames('', {}, [className])}>
                <FinanceResultCard
                    isLoading={isLoading}
                    pathLink={RoutePath.finance}
                    icon={MoneyIcon}
                    title={t('Incomes')}
                    value={data?.incomes}
                    color={'green'}
                    mark={'+ '}
                />
                <FinanceResultCard
                    isLoading={isLoading}
                    pathLink={RoutePath.finance}
                    icon={MoneyIcon}
                    title={t('Expenses')}
                    value={data?.expenses}
                    color={'red'}
                    mark={'- '}
                />
                <FinanceResultCard
                    isLoading={isLoading}
                    pathLink={RoutePath.finance}
                    icon={BalanceIcon}
                    title={t('Summary')}
                    value={Math.abs(data?.summary || 0)}
                    color={'primary'}
                    mark={data?.mark || ''}
                />
                <BadgeNew color={'red'}>
                    <FinanceResultCard
                        isLoading={isLoading}
                        pathLink={RoutePath.bank}
                        icon={BankIcon}
                        title={t('My Bank')}
                        value={92000}
                        color={'yellow'}
                    />
                </BadgeNew>
            </HStack>
        </DynamicModuleLoader>
    );
});
