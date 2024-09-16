import {classNames} from "shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss';
import {Text} from "shared/ui/Text/Text";
import NotFoundIcon from "shared/assets/icons/notFound.svg"
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Page} from "shared/ui/Page";
import {VStack} from "shared/ui/Stack";
import {Card} from "shared/ui/Card";

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            <Card padding={'20'} theme={'inverted_bg'} width={'max'} className={cls.container}>
                <VStack gap={'20'} maxHeight align={'center'} justify={'center'}>
                    <Icon
                        Svg={NotFoundIcon}
                        size={IconSize.VL}
                    />
                    <VStack gap={'10'} justify={'center'} align={'center'}>
                        <Text
                            text={'Page Not Found'}
                            align={'center'}
                            size={'size_xl'}
                            bold
                        />
                        <Text
                            text={"Sorry, we couldn't find this page"}
                            align={'center'}
                            size={'size_m'}
                        />
                    </VStack>
                    {/*<AppLink*/}
                    {/*    to={RoutePath.main}*/}
                    {/*>*/}
                    {/*    <Button*/}
                    {/*        theme={ButtonTheme.BACKGROUND}*/}
                    {/*    >*/}
                    {/*        Go Back*/}
                    {/*    </Button>*/}
                    {/*</AppLink>*/}
                </VStack>
            </Card>
        </Page>
    );
};

export default NotFoundPage;