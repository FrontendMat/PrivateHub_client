import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {memo} from "react";
import {SidebarNav} from "../SidebarNav/SidebarNav";
import {Card} from "shared/ui/Card";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import ArrowRightIcon from "shared/assets/icons/arrow-right.svg";
import ArrowLeftIcon from "shared/assets/icons/arrow-left.svg";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useCollapsed} from "shared/lib/hooks/useCollapsed/useCollapsed";
import {SidebarFooter} from "widgets/Sidebar/ui/SidebarFooter/SidebarFooter";


interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const {
        className,
    } = props;
    const {collapsed, toggleCollapsed} = useCollapsed();

    const mods: Mods = {
        [cls.collapsed]: collapsed
    }

    return (
        <Card
            padding={'20'}
            border={'full_right'}
            className={classNames(cls.Sidebar, mods, [className])}
        >
            <Button
                className={cls.icon}
                theme={ButtonTheme.CLEAR}
                square
                onClick={toggleCollapsed}
            >
                {collapsed 
                    ? <Icon Svg={ArrowRightIcon} size={IconSize.S} hover={'primary'} color={'gray'} pointer/>
                    : <Icon Svg={ArrowLeftIcon} size={IconSize.S} hover={'primary'} color={'gray'} pointer/>
                }
            </Button>
            <SidebarNav
                collapsed={collapsed}
            />
            <SidebarFooter/>
        </Card>
    );
});
