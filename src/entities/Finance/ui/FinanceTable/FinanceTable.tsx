import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinanceTable.module.scss';
import {useTranslation} from "react-i18next";
import {memo, ReactNode} from "react";
import {Table, TableHeaderTheme} from "shared/ui/Table/Table";
import AddIcon from "shared/assets/icons/add.svg";
import {TableItem} from "shared/ui/TableItem/TableItem";
import {Finance} from "../../model/types/finance";
import {VStack} from "shared/ui/Stack";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {Text} from "shared/ui/Text/Text";
import {FinanceTableEmpty} from "../FinanceTableEmpty/FinanceTableEmpty";

interface FinanceTableProps {
    className?: string;
    title?: string;
    color: TableHeaderTheme;
    onOpenModal?: () => void;
    data?: Finance[];
    totalValue?: number;
    isLoading?: boolean;
    error?: string;
    actions?: ReactNode;
}

export const FinanceTable = memo((props: FinanceTableProps) => {
    const {
        className,
        onOpenModal,
        color,
        data,
        title,
        isLoading,
        error,
        actions,
        totalValue
    } = props;
    const {t} = useTranslation('finance');

    let content;
    if (isLoading) {
        content = <VStack max gap={'8'}>
            <Skeleton width={'100%'} height={41} border={'4px'}/>
            <Skeleton width={'100%'} height={41} border={'4px'}/>
            <Skeleton width={'100%'} height={41} border={'4px'}/>
            <Skeleton width={'100%'} height={41} border={'4px'}/>
            <Skeleton width={'100%'} height={41} border={'4px'}/>
        </VStack>
    } else if (error) {
        content = <Text text={error}/>
    } else if (data?.length && data.length > 0) {
        content = <>
            {data?.map((e, i) => (
                <TableItem
                    key={i}
                    text={e.name}
                    value={e.amount}
                />
            ))}
        </>
    } else {
        content = <FinanceTableEmpty color={color}/>
    }

    return (
        <Table
            theme={color}
            topTitle={title}
            bottomTitle={t('Total Value')}
            totalValue={totalValue}
            icon={AddIcon}
            onOpenModal={onOpenModal}
            actions={actions}
        >
            {content}
        </Table>
    );
});
