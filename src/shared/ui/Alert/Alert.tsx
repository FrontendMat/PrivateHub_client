import {classNames} from "shared/lib/classNames/classNames";
import cls from './Alert.module.scss';
import {memo, useEffect, useState} from "react";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import SuccessIcon from "shared/assets/icons/true.svg";
import ErrorIcon from "shared/assets/icons/error.svg";
import WarningIcon from "shared/assets/icons/error.svg";
import {Portal} from "shared/ui/Portal/Portal";
import {useTheme} from "shared/lib/hooks/useTheme/useTheme";
import {HStack} from "shared/ui/Stack";

export enum AlertTheme {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning'
}

interface AlertProps {
    className?: string;
    color?: AlertTheme,
    text?: string
}

export const Alert = memo((props: AlertProps) => {
    const {
        className,
        text,
        color = AlertTheme.SUCCESS
    } = props;
    const {theme} = useTheme();
    const [isVisible, setIsVisible] = useState(true);

    let alertIcon;
    switch (color) {
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

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 6000)

        return () => clearTimeout(timer)
    }, []);
    
    if (!isVisible) {
        return null
    }

    return (
        <Portal>
            <HStack
                align={'center'}
                gap={'8'}
                className={classNames(cls.Alert, {}, [className, theme, cls[color], 'app_modal'])}
            >
                <Icon
                    Svg={alertIcon}
                    className={cls.icon}
                    size={IconSize.M}
                />
                <p>
                    {text}
                </p>
            </HStack>
        </Portal>
    );
});
