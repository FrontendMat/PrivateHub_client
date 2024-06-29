import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './BlockSwitcherData.module.scss';
import {memo, ReactNode} from "react";

interface BlockSwitcherDataProps {
    id: number;
    className?: string;
    children?: ReactNode;
    currentId?: number
}

export const BlockSwitcherData = memo((props: BlockSwitcherDataProps) => {
    const {
        className,
        currentId,
        id,
        children
    } = props;
    const isHide = id !== currentId;

    const mods: Mods = {
        [cls.hide]: isHide
    }

    return (
        <div className={classNames(cls.BlockSwitcherData, mods, [className])}>
            {children}
        </div>
    );
});
