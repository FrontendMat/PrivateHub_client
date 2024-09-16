import {classNames} from "shared/lib/classNames/classNames";
import cls from './Header.module.scss';
import React, {memo} from "react";
import {IconSize} from "shared/ui/Icon/Icon";
import {Logo} from "shared/ui/Logo/Logo";
import {HStack} from "shared/ui/Stack";
import {Card} from "shared/ui/Card";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {HeaderNav} from "../HeaderNav/HeaderNav";
import {HeaderRight} from "../HeaderRight/HeaderRight";

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const {
        className,
    } = props;
    const userData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    return (
        <Card
            border={'full_bottom'}
            padding={'16'}
            width={'max'}
            className={classNames(cls.Header, {}, [className])}
        >
            <HStack
                align={'center'}
                justify={'between'}
            >
                <Logo
                    titleOnly
                    type={'horizontal'}
                    iconSize={IconSize.L}
                />
                <HeaderNav/>
                <HeaderRight
                    userName={userData?.username}
                />
            </HStack>
        </Card>
    );
});
