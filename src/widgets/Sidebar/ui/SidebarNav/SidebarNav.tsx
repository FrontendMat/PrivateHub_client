import {classNames} from "shared/lib/classNames/classNames";
import {memo, useMemo} from "react";
import {SidebarItem} from "../SidebarItem/SidebarItem";
import {VStack} from "shared/ui/Stack";
import {useSelector} from "react-redux";
import {getSidebarItems} from "../../model/selectors/getSidebarItems";

interface SidebarNavProps {
    className?: string;
    collapsed: boolean;
}

export const SidebarNav = memo((props: SidebarNavProps) => {
    const {
        className,
        collapsed
    } = props;
    const sidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {itemsList}
        </VStack>
    );
});