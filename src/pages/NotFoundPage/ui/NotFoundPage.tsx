import {classNames} from "shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss';
import {Text, TextAlign, TextSize} from "shared/ui/Text/Text";
import NotFoundIcon from "shared/assets/icons/notFound.svg"
import {Icon} from "shared/ui/Icon/Icon";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Page} from "shared/ui/Page";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {VStack} from "shared/ui/Stack";

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
            <VStack gap={'20'}>
                <Text
                    text={'Page Not Found'}
                    align={'center'}
                    size={'size_l'}
                />
                <Text
                    text={"Sorry, we couldn't find this page"}
                    align={'center'}
                    size={'size_m'}
                />
            </VStack>

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