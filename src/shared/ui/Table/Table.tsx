import {classNames} from "shared/lib/classNames/classNames";
import cls from './Table.module.scss';
import {useTranslation} from "react-i18next";
import React, {memo, ReactNode} from "react";
import {HStack, VStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";

export type TableHeaderTheme = 'primary' | 'red' | 'green' | 'yellow';

interface TableHeaderProps {
    className?: string;
    topTitle?: string;
    bottomTitle?: string;
    totalValue?: number;
    theme: TableHeaderTheme;
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
    onOpenModal?: () => void;
    children: ReactNode;
    actions?: ReactNode;
}

const themeClasses: Record<TableHeaderTheme, string> = {
    primary: cls.primary_bg,
    green: cls.green_bg,
    red: cls.red_bg,
    yellow: cls.yellow_bg
}

export const Table = memo((props: TableHeaderProps) => {
    const {
        className,
        topTitle,
        bottomTitle,
        totalValue = 0,
        theme = 'primary',
        children,
        actions
    } = props;
    const {t} = useTranslation();

    const additional = [
        className,
        themeClasses[theme]
    ]

    return (
        <VStack max>
            <HStack
                max
                align={'center'}
                justify={'between'}
                className={classNames(cls.TableHeader, {}, additional)}
            >
                {topTitle}
                <HStack align={'center'}>
                    {actions}
                </HStack>
                <Text
                    text={'Value'}
                    theme={'secondary'}
                />
            </HStack>
            <VStack max gap={'8'} className={cls.TableBody}>
                {children}
            </VStack>
            <HStack
                max
                align={'center'}
                justify={'between'}
                className={classNames(cls.TableFooter, {}, additional)}
            >
                {bottomTitle}
                <Text
                    text={String(totalValue)}
                    theme={'secondary'}
                    bold
                />
            </HStack>
        </VStack>
    );
});
