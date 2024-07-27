import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';
import {type FC, memo} from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
    fullWidth?: boolean
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        fullWidth,
        className,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth
    }

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
});