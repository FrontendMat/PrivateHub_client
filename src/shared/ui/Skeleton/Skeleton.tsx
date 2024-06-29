import {classNames} from "shared/lib/classNames/classNames";
import cls from './Skeleton.module.scss';
import {CSSProperties} from "react";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const style: CSSProperties = {
        height,
        width,
        borderRadius: border
    }

    return (
        <div
            style={style}
            className={classNames(cls.Skeleton, {}, [className])}
        />
    );
};
