import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Card.module.scss';
import {HTMLAttributes, ReactNode} from "react";

export type CardPadding = '0' | '10' | '16' | '20' | '40' | '60' | 'icon' | 'text';

export type CardBorder = 'full' | 'full_top' | 'full_bottom' | 'full_left' | 'full_right';

export type CardThemes = 'background' | 'inverted_bg' | 'primary' | 'secondary' | 'green' | 'red' | 'yellow';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    padding?: CardPadding;
    max?: boolean;
    theme?: CardThemes;
    border?: CardBorder;
    opacity?: boolean;
    noShadow?: boolean;
    animate?: boolean;
}

const paddingClasses: Record<CardPadding, string> = {
    0: cls.padding0,
    10: cls.padding10,
    16: cls.padding16,
    20: cls.padding20,
    40: cls.padding40,
    60: cls.padding60,
    icon: cls.paddingIcon,
    text: cls.paddingText
}

const borderClasses: Record<CardBorder, string> = {
    full: cls.border_full,
    full_bottom: cls.border_fullBottom,
    full_top: cls.border_fullTop,
    full_right: cls.border_fullRight,
    full_left: cls.border_fullLeft,
}

const themesClasses: Record<CardThemes, string> = {
    background: cls.background,
    inverted_bg: cls.inverted_bg,
    primary: cls.primary,
    secondary: cls.secondary,
    green: cls.green,
    red: cls.red,
    yellow: cls.yellow,
}

export const Card = (props: CardProps) => {
    const {
        className,
        padding= '20',
        theme = 'inverted_bg',
        border= 'full',
        opacity = false,
        children,
        noShadow,
        animate,
        max
    } = props;

    const additional = [
        className,
        paddingClasses[padding],
        themesClasses[theme],
        borderClasses[border]
    ]

    const mods: Mods = {
        [cls.max]: max,
        [cls.opacity]: opacity,
        [cls.noShadow]: noShadow,
        [cls.animate]: animate
    }

    return (
        <div className={classNames(cls.Card, mods, additional)}>
            {children}
        </div>
    );
};
