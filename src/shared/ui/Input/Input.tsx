import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Input.module.scss'
import React, {InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'required'>

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
    readonly?: boolean;
    theme?: InputTheme;
    maxWidth?: boolean;
    required?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        required = true,
        readonly,
        maxWidth = true,
        theme = InputTheme.OUTLINED,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.max]: maxWidth
    };

    return (
        <input
            className={classNames(cls.input, mods, [className, cls[theme]])}
            readOnly={readonly}
            type={type}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            {...otherProps}
        />
    );
});
