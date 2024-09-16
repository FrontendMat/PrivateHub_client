import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React, {memo, useCallback} from "react";
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LangSwitcher} from "features/LangSwitcher";
import {HStack} from "shared/ui/Stack";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {logoutAuth} from "entities/User";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import SettingsIcon from 'shared/assets/icons/settings.svg';

interface HeaderRightProps {
    className?: string;
    userName?: string;
}

export const HeaderRight = memo((props: HeaderRightProps) => {
    const {
        className,
        userName
    } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAuth());
    }, [dispatch])

    return (
        <HStack
            align={'center'}
            gap={'10'}
            className={classNames('', {}, [className])}
        >
            <AppLink
                to={RoutePath.settings}
            >
                <HStack
                    align={'center'}
                    justify={'center'}
                >
                    <Icon
                        Svg={SettingsIcon}
                        size={IconSize.S}
                        color={'gray'}
                    />
                </HStack>
            </AppLink>
            <LangSwitcher/>
            <Text
                size={'size_l'}
                text={userName}
                bold
            />
            <Button
                onClick={onLogOut}
                theme={ButtonTheme.BACKGROUND_RED}
            >
                {t('Log Out')}
            </Button>
        </HStack>
    );
});
