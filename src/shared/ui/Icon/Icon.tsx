import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Icon.module.scss';
import {SVGProps, VFC} from "react";

export enum IconSize {
    XS = 'size-xs',
    S = 'size_small',
    M = 'size_medium',
    L = 'size_large',
    XL = 'size_xl',
    VL = 'size_very_large',
}

export type IconColor = 'primary' | 'secondary' | 'gray' | 'green' | 'yellow' | 'red';

interface IconProps {
    className?: string;
    Svg: VFC<SVGProps<SVGSVGElement>>;
    size?: IconSize;
    color?: IconColor;
    hover?: IconColor;
    pointer?: boolean
}

const colorClasses: Record<IconColor, string> = {
    primary: cls.primary,
    secondary: cls.secondary,
    gray: cls.gray,
    green: cls.green,
    yellow: cls.yellow,
    red: cls.red,
}

export const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
        size = IconSize.S,
        color = 'primary',
        pointer
    } = props;

    const additional = [
        className,
        cls[size],
        colorClasses[color],
    ]

    const mods: Mods = {
        [cls.pointer]: pointer
    }

    return (
        <Svg className={classNames('', mods, additional)}/>
    );
};
