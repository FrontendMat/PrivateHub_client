import {classNames} from "shared/lib/classNames/classNames";
import cls from './SettingsPage.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Page} from "shared/ui/Page";

interface SettingsPageProps {
    className?: string
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <Page className={classNames(cls.SettingsPage, {}, [className])}>
            SettingsPage
        </Page>
    );
});

export default SettingsPage;