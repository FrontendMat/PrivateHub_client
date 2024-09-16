import {classNames} from "shared/lib/classNames/classNames";
import cls from './SettingsPage.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Page} from "shared/ui/Page";
import {ThemeSwitcher} from "features/ThemeSwitcher";

interface SettingsPageProps {
    className?: string
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('settings');

    return (
        <Page className={classNames(cls.SettingsPage, {}, [className])}>
            <ThemeSwitcher/>
        </Page>
    );
});

export default SettingsPage;