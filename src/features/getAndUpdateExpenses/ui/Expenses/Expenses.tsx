import {classNames} from "shared/lib/classNames/classNames";
import cls from './Expenses.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import ChartBar from "shared/ui/Charts/ChartBar/ChartBar";
import {HStack} from "shared/ui/Stack";
import {FinanceActionPanel, FinanceTable} from "entities/Finance";

interface ExpensesProps {
    className?: string;
    onOpenModal?: () => void;
}

export const Expenses = memo((props: ExpensesProps) => {
    const {
        className,
        onOpenModal
    } = props;
    const {t} = useTranslation();

    return (
        <HStack align={'start'} gap={'20'} className={classNames(cls.Expenses, {}, [className])}>
            <FinanceActionPanel
                onOpenModal={onOpenModal}
                hoverColor={'red'}
            />
            <FinanceTable
                onOpenModal={onOpenModal}
                title={'Expenses'}
                color={'red'}
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
    );
});
