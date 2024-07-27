import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinaceTableEmpty.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Icon, IconColor, IconSize} from "shared/ui/Icon/Icon";
import MoneyPig from "shared/assets/icons/money-pig.svg"
import {Text, TextSize} from "shared/ui/Text/Text";
import {VStack} from "shared/ui/Stack";

interface FinanceTableEmptyProps {
    className?: string;
    color: IconColor;
}

export const FinanceTableEmpty = memo((props: FinanceTableEmptyProps) => {
    const {
        className,
        color
    } = props;
    const {t} = useTranslation();

    return (
        <VStack
            max
            gap={'20'}
            justify={'center'}
            align={'center'}
            className={classNames(cls.FinanceTableEmpty, {}, [className])}
        >
            <Icon
                Svg={MoneyPig}
                size={IconSize.VL}
                color={color}
                hover={color}
            />
            <Text
                text={'Empty Table...'}
            />
        </VStack>
    );
});
