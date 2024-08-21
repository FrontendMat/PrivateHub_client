import {classNames} from "shared/lib/classNames/classNames";
import cls from './TransactionList.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {TransactionCard} from "entities/Transaction/ui/TransactionCard/TransactionCard";
import {HStack} from "shared/ui/Stack";
import {Card} from "shared/ui/Card";
import {Text} from "shared/ui/Text/Text";

interface TransactionListProps {
    className?: string
}

export const TransactionList = memo((props: TransactionListProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const a = [
        1, 2, 3,4,6,7
    ]

    return (
        <Card padding={'20'} theme={'inverted_bg'}>
            <Text className={cls.title} align={'left'} text={'Transactions:'} bold size={'size_l'}/>
            <HStack
                gap={'10'}
                align={'center'}
                className={classNames(cls.TransactionList, {}, [className])}
            >
                {a.map(e => (
                    <TransactionCard
                        key={e}
                    />
                ))}
            </HStack>
        </Card>

    );
});
