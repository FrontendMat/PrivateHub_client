import {classNames} from "shared/lib/classNames/classNames";
import cls from './BadgeNew.module.scss';
import {useTranslation} from "react-i18next";
import React, {memo, ReactNode} from "react";
import {Card, CardThemes} from "shared/ui/Card";
import {Text} from "shared/ui/Text/Text";
import {Icon} from "shared/ui/Icon/Icon";
import NewIcon from "shared/assets/icons/new.svg";
import {HStack} from "shared/ui/Stack";

interface BadgeNewProps {
    className?: string;
    color?: CardThemes;
    children?: ReactNode;
}

export const BadgeNew = memo((props: BadgeNewProps) => {
    const {
        className,
        color,
        children,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={cls.wrapper}>
            {children}
            <Card
                padding={'text'}
                theme={color}
                className={classNames(cls.BadgeNew, {}, [className])}
            >
                <HStack
                    align={'center'}
                    gap={'8'}
                >
                    <Text
                        text={'New'}
                        align={'center'}
                        theme={'secondary'}
                    />
                    <Icon
                        Svg={NewIcon}
                        color={'secondary'}
                        hover={'secondary'}
                    />
                </HStack>
            </Card>
        </div>
    );
});
