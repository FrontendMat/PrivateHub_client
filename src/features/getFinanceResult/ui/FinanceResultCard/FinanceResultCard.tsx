import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinanceResultCard.module.scss';
import {useTranslation} from "react-i18next";
import React, {memo} from "react";
import {Card, CardThemes} from "shared/ui/Card";
import {HStack, VStack} from "shared/ui/Stack";
import {Text, TextColors} from "shared/ui/Text/Text";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

interface StatisticCardProps {
    className?: string;
    color?: TextColors,
    value?: number,
    icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    title?: string,
    mark?: string,
    pathLink?: string,
    isLoading?: boolean
}

export const FinanceResultCard = memo((props: StatisticCardProps) => {
    const {
        className,
        color,
        isLoading,
        title,
        pathLink = '',
        mark= '',
        value= 0,
        icon
    } = props;
    const {t} = useTranslation('main');

    return (
        <AppLink
            className={cls.card}
            to={pathLink}
            fullWidth
        >
            <Card
                width={'max'}
                padding={'20'}
                theme={'inverted_bg'}
                className={classNames('', {}, [className])}
            >
                <HStack
                    gap={'20'}
                    align={'center'}
                    justify={'between'}
                >
                    <Card
                        padding={'icon'}
                        theme={color as CardThemes}
                    >
                        <Icon
                            Svg={icon}
                            color={'secondary'}
                            hover={'secondary'}
                            size={IconSize.L}
                        />
                    </Card>
                    <VStack
                        gap={'2'}
                        align={'end'}
                    >
                        <Text
                            bold
                            text={title}
                            theme={'gray'}
                            size={'size_l'}
                            align={'center'}
                        />
                        {isLoading 
                            ? <Skeleton width={72} height={27} border={'5px'}/>
                            : <Text bold text={mark + String(value)} theme={color} size={'size_l'} align={'center'}/>
                        }
                    </VStack>
                </HStack>
            </Card>
        </AppLink>
    );
});
