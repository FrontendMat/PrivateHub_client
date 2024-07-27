import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo, useEffect} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchFinanceStatistic} from "../../model/services/fetchFinanceStatistic";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {getFinanceStatisticReducer} from "../../model/slice/financeStatistic";
import {Statistic} from "entities/Statistic";
import {useSelector} from "react-redux";
import {
    getFinanceStatisticError,
    getFinanceStatisticExpensesData,
    getFinanceStatisticExpensesValue,
    getFinanceStatisticIncomesData,
    getFinanceStatisticIncomesValue,
    getFinanceStatisticIsLoading, getFinanceStatisticSumData,
    getFinanceStatisticTotalValue
} from "../../model/selectors/getFinanceStatistic";
import {VStack} from "shared/ui/Stack";

interface FinanceStatisticProps {
    className?: string
}

const reducers: ReducersList = {
    financeStatistic: getFinanceStatisticReducer
}

export const FinanceStatistic = memo((props: FinanceStatisticProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const incomesData = useSelector(getFinanceStatisticIncomesData);
    const expensesData = useSelector(getFinanceStatisticExpensesData);
    const sumData = useSelector(getFinanceStatisticSumData);
    const expensesValue = useSelector(getFinanceStatisticExpensesValue);
    const incomesValue = useSelector(getFinanceStatisticIncomesValue);
    const totalValue = useSelector(getFinanceStatisticTotalValue);
    const isLoading = useSelector(getFinanceStatisticIsLoading);
    const error = useSelector(getFinanceStatisticError);

    useEffect(() => {
        dispatch(fetchFinanceStatistic())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap={'20'} max>
                <Statistic
                    isLoading={isLoading}
                    data={incomesData}
                    totalValue={incomesValue}
                    keyTitle={'date'}
                    mainTitle={'Date'}
                    secondaryTitle={'Value'}
                    title={'Incomes:'}
                    color={'green'}
                    error={error}
                />
                <Statistic
                    isLoading={isLoading}
                    data={expensesData}
                    totalValue={expensesValue}
                    keyTitle={'date'}
                    mainTitle={'Date'}
                    secondaryTitle={'Value'}
                    title={'Expenses:'}
                    color={'red'}
                    error={error}
                />
                <Statistic
                    isLoading={isLoading}
                    data={sumData}
                    totalValue={totalValue}
                    keyTitle={'date'}
                    mainTitle={'Date'}
                    secondaryTitle={'Value'}
                    title={'Summary:'}
                    color={'primary'}
                    error={error}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
