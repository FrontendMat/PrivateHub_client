import {classNames} from "shared/lib/classNames/classNames";
import cls from './Incomes.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useEffect} from "react";
import ChartBar from "shared/ui/Charts/ChartBar/ChartBar";
import {HStack} from "shared/ui/Stack";
import {useSelector} from "react-redux";
import {getIncomesData, getIncomesTotalValue} from "../../model/selectors/getIncomesData";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchIncomes} from "../../model/services/fetchIncomes/fetchIncomes";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {incomesReducer, } from "../../model/slice/incomesSlice";
import {FinanceActionPanel, FinanceTable} from "entities/Finance";

interface IncomesProps {
    className?: string;
    onOpenModal?: () => void;
}

const reducers: ReducersList = {
    incomesSchema: incomesReducer
}

const data = [
    {name: 'food', value: 30000},
    {name: 'plate', value: 3000},
    {name: 'invest', value: 1000},
    {name: 'casino', value: 500},
    {name: 'casino', value: 500},
    {name: 'casino', value: 500},
    {name: 'casino', value: 500},
]

export const Incomes = memo((props: IncomesProps) => {
    const {
        className,
        onOpenModal
    } = props;
    const {t} = useTranslation();
    const data = useSelector(getIncomesData);
    const totalValue = useSelector(getIncomesTotalValue);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchIncomes())
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <HStack align={'start'} gap={'20'} className={classNames(cls.Incomes, {}, [className])}>
                <FinanceActionPanel
                    onOpenModal={onOpenModal}
                    hoverColor={'green'}
                />
                <FinanceTable
                    title={'Incomes'}
                    color={'green'}
                    data={data}
                    totalValue={totalValue}
                />
                <ChartBar data={[
                    {
                        "id": "ruby",
                        "label": "ruby",
                        "value": 536,
                        "color": "hsl(129, 70%, 50%)"
                    },
                    {
                        "id": "elixir",
                        "label": "elixir",
                        "value": 224,
                        "color": "hsl(147, 70%, 50%)"
                    },
                    {
                        "id": "erlang",
                        "label": "erlang",
                        "value": 332,
                        "color": "hsl(103, 70%, 50%)"
                    },
                    {
                        "id": "javascript",
                        "label": "javascript",
                        "value": 567,
                        "color": "hsl(53, 70%, 50%)"
                    },
                    {
                        "id": "rust",
                        "label": "rust",
                        "value": 17,
                        "color": "hsl(176, 70%, 50%)"
                    }
                ]}/>
            </HStack>
        </DynamicModuleLoader>
    );
});
