import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './SidebarItem.module.scss';
import {memo, useCallback, useEffect, useState} from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {SidebarItemsType} from "../../model/items";
import {useLocation} from "react-router-dom";
import {getUserAuthData} from "entities/User";
import {useSelector} from "react-redux";

interface SidebarItemProps {
    item: SidebarItemsType;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
    } = props;

    const [active, setActive] = useState(false);
    const location = useLocation();
    const user = useSelector(getUserAuthData);

    const getLocation = useCallback(() => {
        if (location.pathname === item.path) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [location.pathname, item.path])

    useEffect(() => {
        getLocation()
    }, [location.pathname, getLocation]);

    if (item.privateRoute !== item.privateRoute) {
        return null;
    }

    const mods: Mods = {
        [cls.active]: active,
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, mods)}

        >
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>
                {item.text}
            </span>
        </AppLink>
    );
});
