import {classNames} from "shared/lib/classNames/classNames";
import cls from './Finance.module.scss';
import {useTranslation} from "react-i18next";
import {memo, ReactNode, useEffect} from "react";
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
    title: string;
    type: FinanceType;
    color: TableHeaderTheme;
    dateBlock?: ReactNode
}

const reducers: ReducersList = {
    finance: financeReducer
}

export const Finance = memo((props: IncomesProps) => {
    const {
        className,
        title,
        type,
        color,
        dateBlock,
        onOpenModal,
        onOpenEditModal,
    } = props;
    const {t} = useTranslation('finance');
    const data = useSelector(getFinanceData);
    const isLoading = useSelector(getFinanceIsLoading);
    const error = useSelector(getFinanceError);
    const totalValue = useSelector(getFinanceTotalValue);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFinanceByType(type))
    }, [type, dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                align={'start'}
                gap={'20'}
                className={classNames(cls.Incomes, {}, [className])}
            >
                <VStack
                    gap={'20'}
                    max
                >
                    <Card
                        width={'max'}
                        padding={'20'}
                    >
                        <VStack
                            max
                            gap={'10'}
                        >
                            <FinanceActionPanel
                                onOpenModal={onOpenModal}
                                onOpenEditModal={onOpenEditModal}
                            />
                            <FinanceTable
                                title={t(title)}
                                color={color}
                                data={data}
                                totalValue={totalValue}
                                isLoading={isLoading}
                                error={error}
                            />
                        </VStack>
                    </Card
                    >
                    {dateBlock}
                </VStack>
                <FinanceGraph
                    data={data}
                    isLoading={isLoading}
                />
            </HStack>
        </DynamicModuleLoader>
    );
});
