import {classNames} from "shared/lib/classNames/classNames";
import {memo} from "react";
import {SidebarItemsList} from "widgets/Sidebar/model/items";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";
import {VStack} from "shared/ui/Stack";

interface SidebarNavProps {
    className?: string;
    collapsed: boolean;
}

export const SidebarNav = memo((props: SidebarNavProps) => {
    const {
        className,
        collapsed
    } = props;

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {SidebarItemsList.map((item) => (
                <SidebarItem
                    collapsed={collapsed}
                    key={item.path}
                    item={item}
                />
            ))}
        </VStack>
    );
});