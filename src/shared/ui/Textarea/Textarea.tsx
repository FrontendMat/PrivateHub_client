import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Textarea.module.scss';
import React, { TextareaHTMLAttributes, memo} from "react";

type HTMLTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'readOnly'>

export enum TextareaTheme {
    OUTLINED = 'outlined',
    CLEAR = 'clear',
    BACKGROUND = 'background',
}

interface TextareaProps extends HTMLTextareaProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    theme?: TextareaTheme;
}

export const Textarea = memo((props: TextareaProps) => {
    const {
        className,
        value = '',
        onChange,
        placeholder,
        autofocus,
        readonly,
        theme = TextareaTheme.OUTLINED,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <textarea
            className={classNames(cls.Textarea, mods, [className, cls[theme]])}
            readOnly={readonly}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            {...otherProps}
        />
    );
});
