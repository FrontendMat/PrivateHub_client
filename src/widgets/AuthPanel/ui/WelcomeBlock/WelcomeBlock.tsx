import {classNames} from "shared/lib/classNames/classNames";
import cls from './WelcomeBlock.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {logoutAuth} from "entities/User";
import {Card} from "shared/ui/Card";
import {VStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface WelcomeProps {
    className?: string
}

export const WelcomeBlock = memo((props: WelcomeProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('auth');
    const dispatch = useAppDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAuth());
    }, [dispatch]);

    const goToMail = useCallback(() => {
        window.open('https://mail.google.com/mail', '_blank');
    }, []);

    return (
        <Card
            animate
            padding={'60'}
            theme={'inverted_bg'}
            className={classNames('', {}, [className])}
        >
            <VStack
                align={'center'}
                justify={'center'}
                gap={'20'}
                max
                className={cls.wrapper}
            >
                <VStack
                    max
                    gap={'32'}
                    align={'center'}
                    justify={'center'}
                >
                    <Text
                        text={t('Welcome to PrivateHub!')}
                        size={'size_xl'}
                        theme={'primary'}
                        bold
                    />
                    <Text
                        text={t('We have sent an email to your address.Please go to it and confirm your registration')}
                    />
                </VStack>
                <VStack
                    max
                    gap={'10'}
                    align={'center'}
                    justify={'center'}
                >
                    <Button
                        max
                        onClick={goToMail}
                        theme={ButtonTheme.BACKGROUND}
                    >
                        {t('Go to Email')}
                    </Button>
                    <Button
                        max
                        onClick={onLogOut}
                        theme={ButtonTheme.OUTLINE_RED}
                    >
                        {t('Go Back')}
                    </Button>
                </VStack>
            </VStack>
        </Card>
    );
});
