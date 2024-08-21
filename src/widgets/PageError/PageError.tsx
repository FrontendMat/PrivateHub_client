import {classNames} from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import React, {memo} from "react";
import {Text} from "shared/ui/Text/Text";
import ErrorIcon from "shared/assets/icons/error.svg"
import ErrorBoundaryIcon from "shared/assets/icons/errorBoundary.svg";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {VStack} from "shared/ui/Stack";
import {Card} from "shared/ui/Card";

interface PageErrorProps {
    className?: string;
    title?: string;
    text?: string;
    errorBoundary?: boolean
}

export const PageError = memo((props: PageErrorProps) => {
    const {
        className,
        title,
        text,
        errorBoundary
    } = props;


    const reloadPage = () => {
        location.reload()
    }

    if (errorBoundary) {
        return (
            <VStack maxHeight align={'center'} justify={'center'} gap={'10'} className={classNames('', {}, [className])}>
                <Icon
                    Svg={ErrorBoundaryIcon}
                    size={IconSize.VL}
                    color={'red'}
                    hover={'red'}
                />
                <VStack justify={'center'} align={'center'}>
                    <Text
                        text={'Something went wrong'}
                        theme={'red'}
                        size={'size_xl'}
                    />
                    <Text
                        text={'Please, reload this page'}
                        theme={'red'}
                        size={'size_l'}
                    />
                </VStack>
                <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={reloadPage}
                >
                    Reload
                </Button>
            </VStack>
        );
    }
    // <VStack
    //     max
    //     maxHeight
    //     justify={'center'}
    //     gap={'20'}
    //     className={classNames('', {}, [className])}
    // >
    //     <VStack
    //         max
    //         gap={'10'}
    //         align={'center'}
    //     >
    //         <Icon
    //             Svg={ErrorIcon}
    //             size={IconSize.L}
    //         />
    //         <Text
    //             text={title}
    //             theme={'red'}
    //             size={'size_l'}
    //         />
    //         <Text
    //             text={text}
    //             theme={'red'}
    //             size={'size_m'}
    //         />
    //     </VStack>
    // </VStack>

    return (
        <Card width={'max'} padding={'20'} maxHeight>
            <VStack gap={'10'} align={'center'} maxHeight justify={'center'}>
                <Icon
                    Svg={ErrorIcon}
                    size={IconSize.XL}
                    color={'red'}
                    hover={'red'}
                />
                <Text
                    text={'Something went wrong'}
                    theme={'red'}
                    bold
                    size={'size_lm'}
                />
                <Text
                    text={text}
                    theme={'red'}
                    size={'size_l'}
                />
                <Text
                    className={cls.tip}
                    text={'Please, reload this page or try later'}
                    theme={'red'}
                    size={'size_l'}
                />
                <Button
                    theme={ButtonTheme.BACKGROUND_RED}
                    onClick={reloadPage}
                >
                    Reload
                </Button>
            </VStack>
        </Card>
    );
});
