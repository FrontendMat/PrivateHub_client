import {classNames} from "shared/lib/classNames/classNames";
import cls from './HeaderAvatar.module.scss';
import React, {memo, useCallback} from "react";
import {HStack, VStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";
import {Dropdown} from "shared/ui/Dropdown/Dropdown";
import {Avatar} from "shared/ui/Avatar/Avatar";
import Ph from "shared/assets/photo.jpeg";
import {logoutAuth, User} from "entities/User";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import ProfileIcon from 'shared/assets/icons/user.svg';
import LogoutIcon from 'shared/assets/icons/logout.svg';
import SettingsIcon from 'shared/assets/icons/settings.svg';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {HeaderDropdownItem} from "../HeaderDropdownItem/HeaderDropdownItem";

interface HeaderAvatarProps {
    className?: string;
    userData?: User;
}

export const HeaderAvatar = memo((props: HeaderAvatarProps) => {
    const {
        className,
        userData
    } = props;
    const dispatch = useAppDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAuth());
    }, [dispatch])

    return (
        <HStack gap={'10'} align={'center'}>
            <VStack gap={'2'} justify={'between'} align={'end'}>
                <Text
                    size={'size_l'}
                    text={userData?.username}
                    theme={'normal'}
                    bold
                />
                <Text
                    size={'size_m'}
                    text={(userData?.role)}
                />
            </VStack>
            <Dropdown
                direction={'bottom left'}
                items={
                    [
                        {
                            content: <HeaderDropdownItem icon={ProfileIcon} title={'Profile'}/>,
                            href: RoutePath.profile + userData?.username + "/" + userData?.id,
                        },
                        {
                            content: <HeaderDropdownItem icon={SettingsIcon} title={'Settings'}/>,
                            href: RoutePath.settings,
                        },
                        {
                            content: <div className={cls.line}/>,
                            isLine: true
                        },
                        {
                            content: <Button
                                theme={ButtonTheme.BACKGROUND_RED}
                                onClick={onLogOut}
                                max
                                className={cls.logout_btn}
                            >
                                <HeaderDropdownItem
                                    icon={LogoutIcon}
                                    title={'Log Out'}
                                    isButton
                                />
                            </Button>,
                        },
                    ]
                }
                trigger={
                    <Avatar
                        src={Ph}
                        size={'medium'}
                    />
                }
            />
        </HStack>
    );
});
