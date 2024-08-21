import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Text.module.scss'
import {memo} from "react";

export type TextSize = 'size_s' | 'size_m' | 'size_l' | 'size_lm' | 'size_xl' ;

export type TextAlign = 'left' | 'center' | 'right';

export type TextColors = 'primary' | 'secondary' | 'green' | 'yellow' | 'red' | 'normal' | 'gray';

interface TextProps {
    className?: string;
    text?: string;
    size?: TextSize;
    theme?: TextColors;
    align?: TextAlign;
    bold?: boolean;
    fullWidth?: boolean;
}

const sizeClasses: Record<TextSize, string> = {
    size_s: cls.size_s,
    size_m: cls.size_m,
    size_l: cls.size_l,
    size_lm: cls.size_lm,
    size_xl: cls.size_xl
}

const alignClasses: Record<TextAlign, string> = {
    left: cls.left,
    center: cls.center,
    right: cls.right,
}

const themeClasses: Record<TextColors, string> = {
    primary: cls.primary,
    secondary: cls.secondary,
    gray: cls.gray,
    red: cls.red,
    green: cls.green,
    yellow: cls.yellow,
    normal: cls.normal,
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text= '',
        size = 'size_m',
        align = 'center',
        theme = 'gray',
        bold,
        fullWidth
    } = props;

    const mods: Mods = {
        [cls.bold] : bold,
        [cls.fullWidth] : fullWidth,
    }

    const additional = [
        className,
        sizeClasses[size],
        alignClasses[align],
        themeClasses[theme],
    ]

    return (
        <p className={classNames(cls.Text, mods, additional)}>
            {text}
        </p>
    );
});