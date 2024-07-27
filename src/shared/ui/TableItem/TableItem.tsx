import {classNames} from "shared/lib/classNames/classNames";
import cls from './TableItem.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {HStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";

interface TableItemProps {
    className?: string;
    text?: string;
    value?: number;
}

export const TableItem = memo((props: TableItemProps) => {
    const {
        className,
        text,
        value
    } = props;
    const {t} = useTranslation();

    return (
        <HStack
            max
            align={'center'}
            justify={'between'}
            className={classNames(cls.TableItem, {}, [className])}
        >
            <Text
                text={text}
                theme={'normal'}
            />
            <Text
                text={String(value)}
                theme={'normal'}
            />
        </HStack>
    );
});
