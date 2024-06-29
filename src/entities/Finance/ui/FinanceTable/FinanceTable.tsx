import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinanceTable.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Table, TableHeaderTheme} from "shared/ui/Table/Table";
import AddIcon from "shared/assets/icons/add.svg";
import {VStack} from "shared/ui/Stack";
import {TableItem} from "shared/ui/TableItem/TableItem";
import {Card} from "shared/ui/Card";
import {Finance} from "entities/Finance";

interface FinanceTableProps {
    className?: string;
    title?: string;
    color: TableHeaderTheme;
    onOpenModal?: () => void;
    data?: Finance[];
    totalValue?: number;
}

const a = [
    {text: 'food', value: 30000},
    {text: 'plate', value: 3000},
    {text: 'invest', value: 1000},
    {text: 'casino', value: 500},
    {text: 'casino', value: 500},
    {text: 'casino', value: 500},
    {text: 'casino', value: 500},
]

export const FinanceTable = memo((props: FinanceTableProps) => {
    const {
        className,
        onOpenModal,
        color,
        data,
        title,
        totalValue
    } = props;
    const {t} = useTranslation();

    return (
        <Card max padding={'20'} className={classNames('', {}, [className])}>
            <Table
                theme={color}
                topTitle={title}
                bottomTitle={'Total Value'}
                totalValue={totalValue}
                icon={AddIcon}
                onOpenModal={onOpenModal}
            >
                {data?.map((e, i) => (
                    <TableItem key={i} text={e.name} value={e.amount}/>
                ))}
            </Table>
        </Card>
    );
});
