import {classNames} from "shared/lib/classNames/classNames";
import cls from './SettingsPage.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {Page} from "shared/ui/Page";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {Card} from "shared/ui/Card";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getUserAuthData, logoutAuth} from "entities/User";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface SettingsPageProps {
    className?: string
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserAuthData);

    const onLogOut = useCallback(() => {
        dispatch(logoutAuth());
    }, [dispatch])

    return (
        <Page className={classNames(cls.SettingsPage, {}, [className])}>
            <Card padding={'20'}>
                <ThemeSwitcher/>
                <Button
                    theme={ButtonTheme.BACKGROUND_RED}
                    onClick={onLogOut}
                >
                    Log out
                </Button>
            </Card>
        </Page>
    );
});

export default SettingsPage;