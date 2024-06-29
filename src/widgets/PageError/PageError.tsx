import {classNames} from "shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import React, {memo} from "react";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";
import ErrorIcon from "shared/assets/icons/error.svg"
import ErrorBoundaryIcon from "shared/assets/icons/errorBoundary.svg";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

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
            <div className={classNames(cls.PageError, {}, [className])}>
                <Icon
                    Svg={ErrorBoundaryIcon}
                    size={IconSize.L}
                    className={cls.icon}
                />
                <Text
                    title={'Something went wrong'}
                    text={'Please, reload this page'}
                    align={TextAlign.CENTER}
                    theme={TextTheme.ERROR}
                    size={TextSize.L}
                />
                <Button
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={reloadPage}
                    className={cls.errorBtn}
                >
                    Reload
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <Icon
                Svg={ErrorIcon}
                size={IconSize.L}
                className={cls.errorIcon}
            />
            <Text
                title={title}
                text={text}
                align={TextAlign.CENTER}
                theme={TextTheme.ERROR}
                size={TextSize.L}
            />
        </div>
    );
});
