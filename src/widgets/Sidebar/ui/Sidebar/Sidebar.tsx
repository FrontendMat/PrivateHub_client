import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {memo, useCallback, useState} from "react";
import {SidebarNav} from "../SidebarNav/SidebarNav";
import {Button} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
            <SidebarNav/>
        </div>
    );
});
