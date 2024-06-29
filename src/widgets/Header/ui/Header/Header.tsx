import {classNames} from "shared/lib/classNames/classNames";
import cls from './Header.module.scss';
import {memo, useCallback} from "react";
import {ThemeSwitcher} from "features/ThemeSwitcher/ui/ThemeSwitcher";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {logoutAuth} from "entities/User";
import {HeaderLogo} from "../HeaderLogo/HeaderLogo";


interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAuth());
    }, [dispatch])

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <HeaderLogo/>
            <div className={cls.buttons}>
                <div className={cls.themeBtn}>
                    <ThemeSwitcher/>
                </div>
                <Button
                    theme={ButtonTheme.BACKGROUND}
                    onClick={onLogOut}
                >
                    Log out
                </Button>
            </div>
        </div>
    );
});
