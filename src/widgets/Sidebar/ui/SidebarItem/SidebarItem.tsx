import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './SidebarItem.module.scss';
import {memo} from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {SidebarItemType} from "../../model/types/sidebar";
import {useLocation} from "react-router-dom";
import {getUserAuthData} from "entities/User";
import {useSelector} from "react-redux";
import {HStack} from "shared/ui/Stack";
import {useTranslation} from "react-i18next";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed
    } = props;
    const location = useLocation();
    const {t} = useTranslation();

    const isActive = location.pathname === item.path;
    const mods: Mods = {
        [cls.active]: isActive,
        [cls.collapsed]: collapsed
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, mods)}
        >
            <HStack align={'end'} gap={'14'}>
                <item.Icon
                    className={cls.icon}

                />
                <span className={cls.link}>
                    {t(item.text)}
                </span>
            </HStack>
        </AppLink>
    );
});
