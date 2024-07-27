import {classNames} from "shared/lib/classNames/classNames";
import cls from './Finance.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useEffect} from "react";
import {HStack, VStack} from "shared/ui/Stack";
import {useSelector} from "react-redux";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {TableHeaderTheme} from "shared/ui/Table/Table";
import {financeReducer} from "../../model/slice/financeSlice";
import {getFinanceData, getFinanceIsLoading, getFinanceError, getFinanceTotalValue} from "../../model/selectors/getFinance";
import {fetchFinanceByType} from "../../model/services/fetchFinanceByType/fetchFinanceByType";
import {FinanceType} from "../../model/types/finance";
import {FinanceActionPanel} from "../FinanceActionPanel/FinanceActionPanel";
import {FinanceTable} from "../FinanceTable/FinanceTable";
import {FinanceGraph} from "../FinanceGraph/FinanceGraph";
import {Card} from "shared/ui/Card";

interface IncomesProps {
    className?: string;
    onOpenModal?: () => void;
    onOpenEditModal?: () => void;
    title: FinanceType;
    color: TableHeaderTheme;
}

const reducers: ReducersList = {
    finance: financeReducer
}

export const Finance = memo((props: IncomesProps) => {
    const {
        className,
        title,
        color,
        onOpenModal,
        onOpenEditModal,
    } = props;
    const {t} = useTranslation();
    const data = useSelector(getFinanceData);
    const isLoading = useSelector(getFinanceIsLoading);
    const error = useSelector(getFinanceError);
    const totalValue = useSelector(getFinanceTotalValue);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFinanceByType(title))
    }, [dispatch, title]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <HStack align={'start'} gap={'20'} className={classNames(cls.Incomes, {}, [className])}>
                <Card max padding={'20'}>
                    <VStack max gap={'10'}>
                        <FinanceActionPanel
                            onOpenModal={onOpenModal}
                            onOpenEditModal={onOpenEditModal}
                        />
                        <FinanceTable
                            title={title}
                            color={color}
                            data={data}
                            totalValue={totalValue}
                            isLoading={isLoading}
                            error={error}
                        />
                    </VStack>
                </Card>
                <FinanceGraph
                    data={data}
                    isLoading={isLoading}
                />
            </HStack>
        </DynamicModuleLoader>
    );
});
