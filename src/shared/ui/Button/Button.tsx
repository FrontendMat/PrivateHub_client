import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import {type ButtonHTMLAttributes, type FC, memo, ReactNode} from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    SECONDARY = 'secondary',
    BACKGROUND_RED = 'background_red',
    BACKGROUND_INVERTED = 'background_inverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    max?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        className,
        theme = ButtonTheme.OUTLINE,
        max = false,
        square,
        size = ButtonSize.M,
        children,
        disabled,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.max]: max
    }

    return (
        <button
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
});
