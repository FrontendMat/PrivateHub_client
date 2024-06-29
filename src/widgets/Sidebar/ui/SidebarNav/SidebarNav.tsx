import {classNames} from "shared/lib/classNames/classNames";
import cls from './SidebarNav.module.scss';
import {memo} from "react";
import {SidebarItemsList} from "widgets/Sidebar/model/items";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";
import {VStack} from "shared/ui/Stack";

interface SidebarNavProps {
    className?: string;
}

export const SidebarNav = memo((props: SidebarNavProps) => {
    const {
        className,
    } = props;

    return (
        <VStack gap={'10'} max className={classNames(cls.SidebarNav, {}, [className])}>
            {SidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                />
            ))}
        </VStack>
    );
});