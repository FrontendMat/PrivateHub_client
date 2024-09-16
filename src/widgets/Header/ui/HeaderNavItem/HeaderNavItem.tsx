import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";
import cls from './HeaderNavItem.module.scss';

interface HeaderNavItemProps {
    className?: string;
    path: string;
    text: string;
}

export const HeaderNavItem = memo((props: HeaderNavItemProps) => {
    const {
        className,
        text,
        path
    } = props;
    const {t} = useTranslation();

    return (
        <AppLink
            to={path}
            className={classNames(cls.HeaderNavItem, {}, [className])}>
            {text}
        </AppLink>
    );
});
