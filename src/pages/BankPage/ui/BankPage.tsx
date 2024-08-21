import {classNames} from "shared/lib/classNames/classNames";
// import cls from './BankPage.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Page} from "shared/ui/Page";
import {PageInDev} from "widgets/PageInDev/PageInDev";

interface BankPageProps {
    className?: string
}

const BankPage = memo((props: BankPageProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <Page className={classNames('cls.BankPage', {}, [className])}>
            <PageInDev/>
        </Page>
    );
});

export default BankPage;