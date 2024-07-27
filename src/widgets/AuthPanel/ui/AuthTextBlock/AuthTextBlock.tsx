import {classNames} from "shared/lib/classNames/classNames";
import cls from './AuthTextBlock.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Card} from "shared/ui/Card";
import {Text} from "shared/ui/Text/Text";
import {VStack} from "shared/ui/Stack";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface AuthTextBlockProps {
    className?: string;
    onClick?: () => void;
    isNew: boolean;
}

export const AuthTextBlock = memo((props: AuthTextBlockProps) => {
    const {
        className,
        onClick,
        isNew
    } = props;
    const {t} = useTranslation();

    let content;
    if (!isNew) {
        content =
            <>
                <Text
                    text={'Welcome Back!'}
                    theme={'secondary'}
                    size={'size_xl'}
                    bold
                />
                <Text
                    theme={'secondary'}
                    text={'Enter your personal details to use all of site features'}
                />
                <Text
                    theme={'secondary'}
                    text={'or'}
                    bold
                />
                <Button
                    onClick={onClick}
                    theme={ButtonTheme.SECONDARY}
                    max
                >
                    Sign Up
                </Button>
            </>
    } else {
        content =
            <>
                <Text
                    text={'Hello, Friend!'}
                    theme={'secondary'}
                    size={'size_xl'}
                    bold
                />
                <Text
                    theme={'secondary'}
                    text={'Register with your personal details to use all of site features'}
                />
                <Text
                    theme={'secondary'}
                    text={'or'}
                    bold
                />
                <Button
                    onClick={onClick}
                    theme={ButtonTheme.SECONDARY}
                    max
                >
                    Sign In
                </Button>
            </>
    }

    return (
        <Card theme={'primary'} className={classNames(cls.AuthTextBlock, {}, [className])}>
            <VStack
                align={'center'}
                justify={'center'}
                maxHeight
                gap={'20'}
                className={cls.block}
            >
                {content}
            </VStack>
        </Card>
    );
});
