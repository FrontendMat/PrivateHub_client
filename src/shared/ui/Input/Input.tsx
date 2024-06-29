import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss'
import React, {InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export enum InputTheme {
    OUTLINED = 'outlined',
    CLEAR = 'clear',
    BACKGROUND = 'background',
    WITH_ICON = 'with_icon'
}

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    theme?: InputTheme;
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        icon,
        readonly,
        theme = InputTheme.OUTLINED,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <>

            <input
                className={classNames(cls.input, mods, [className, cls[theme]])}
                readOnly={readonly}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                {...otherProps}
            />
        </>
    );
});
