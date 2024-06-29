import {classNames} from "shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss';
import {Text, TextAlign, TextSize} from "shared/ui/Text/Text";
import NotFoundIcon from "shared/assets/icons/notFound.svg"
import {Icon} from "shared/ui/Icon/Icon";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Page} from "shared/ui/Page";

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            <Icon
                Svg={NotFoundIcon}
                className={cls.icon}
            />
            <Text
                title={'Page Not Found'}
                text={"Sorry, we couldn't find this page"}
                align={TextAlign.CENTER}
                size={TextSize.L}
            />
            <AppLink
                to={RoutePath.main}
                className={cls.btn}
            >
                <Button
                    theme={ButtonTheme.BACKGROUND}
                >
                    Go Back
                </Button>
            </AppLink>
        </Page>
    );
};

export default NotFoundPage;