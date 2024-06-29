import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Icon.module.scss';
import type React from "react";

export enum IconSize {
    S = 'size_small',
    M = 'size_medium',
    L = 'size_large'
}

export type IconColor = 'primary' | 'secondary' | 'gray' | 'green' | 'yellow' | 'red';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size?: IconSize;
    color?: IconColor;
    hover?: IconColor;
    pointer?: boolean
}

const colorHoverClasses: Record<IconColor, string> = {
    primary: cls.primary_hover,
    secondary: cls.secondary_hover,
    gray: cls.gray_hover,
    green: cls.green_hover,
    yellow: cls.yellow_hover,
    red: cls.red_hover,
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
        hover = 'primary',
        pointer
    } = props;

    const additional = [
        className,
        cls[size],
        colorClasses[color],
        colorHoverClasses[hover]
    ]

    const mods: Mods = {
        [cls.pointer]: pointer
    }

    return (
        <Svg className={classNames('', mods, additional)}/>
    );
};
