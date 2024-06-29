import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    PRIMARY_GREY = 'primary_grey',
    NORMAL = 'normal',
    NORMAL_GREY = 'normal_grey',
    ERROR = 'error',
}

export enum TextSize {
    M= 'size_m',
    L = 'size_l',
    LM = 'size_lm'
}

export enum TextAlign {
    LEFT= 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    size?: TextSize;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        size = TextSize.M,
        align = TextAlign.LEFT,
        theme= TextTheme.NORMAL
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    }

    return (
        <div className={classNames(cls.Text, mods, [className, cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};