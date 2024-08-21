import {classNames} from "shared/lib/classNames/classNames";
// import cls from './CalendarPage.tsx.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Page} from "shared/ui/Page";
import {PageInDev} from "widgets/PageInDev/PageInDev";

interface CalendarPageProps {
    className?: string
}

const CalendarPage = memo((props: CalendarPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <Page className={classNames('cls.CalendarPage', {}, [className])}>
            <PageInDev/>
        </Page>
    );
});

export default CalendarPage;