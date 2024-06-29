import {classNames} from "shared/lib/classNames/classNames";
import cls from './Alert.module.scss';
import {memo} from "react";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import SuccessIcon from "shared/assets/icons/true.svg";
import ErrorIcon from "shared/assets/icons/error.svg";
import WarningIcon from "shared/assets/icons/error.svg";
import {Text} from "shared/ui/Text/Text";

export enum AlertTheme {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning'
}

interface AlertProps {
    className?: string;
    theme?: AlertTheme,
    text?: string
}

export const Alert = memo((props: AlertProps) => {
    const {
        className,
        text,
        theme = AlertTheme.SUCCESS
    } = props;
    
    let alertIcon;
    switch (theme) {
    case AlertTheme.SUCCESS: 
        alertIcon = SuccessIcon;
        break;
    case AlertTheme.WARNING:
        alertIcon = WarningIcon;
        break;
    case AlertTheme.ERROR:
        alertIcon = ErrorIcon;
        break;
    default:
        alertIcon = SuccessIcon;
    }

    return (
        <div className={cls.Alert}>
            <div className={classNames(cls.AlertBg, {}, [className, cls[theme]])}>
                <Icon
                    Svg={alertIcon}
                    className={cls.icon}
                    size={IconSize.M}
                />
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
});
