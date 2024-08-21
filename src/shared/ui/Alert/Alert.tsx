import {classNames} from "shared/lib/classNames/classNames";
import cls from './Alert.module.scss';
import {memo, MutableRefObject, useCallback, useEffect, useRef, useState} from "react";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import SuccessIcon from "shared/assets/icons/true.svg";
import ErrorIcon from "shared/assets/icons/error.svg";
import WarningIcon from "shared/assets/icons/error.svg";
import {Portal} from "shared/ui/Portal/Portal";
import {useTheme} from "shared/lib/hooks/useTheme/useTheme";
import {HStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";
import CloseIcon from "shared/assets/icons/close.svg";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

export type AlertTheme = 'success' | 'error' | 'warning'

interface AlertProps {
    className?: string;
    color?: AlertTheme,
    text?: string,
    isOpen?: boolean,
}

export const Alert = memo((props: AlertProps) => {
    const {
        className,
        text= '',
        color = 'success',
        isOpen = false,
    } = props;
    const {theme} = useTheme();
    const {t} = useTranslation();

    const [isVisible, setIsVisible] = useState(true);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        timeRef.current = setTimeout(() => {
            setIsVisible(false)
        }, 6000)

        return () => clearTimeout(timeRef.current)
    }, [isOpen, isVisible]);

    const onClose = useCallback(() => {
        setIsVisible(false)
    }, [])

    if (!isVisible) return null;

    let alertIcon;
    switch (color) {
    case 'success':
        alertIcon = SuccessIcon;
        break;
    case 'warning':
        alertIcon = WarningIcon;
        break;
    case 'error':
        alertIcon = ErrorIcon;
        break;
    default:
        alertIcon = SuccessIcon;
    }

    return (
        <Portal>
            <HStack
                align={'center'}
                gap={'4'}
                className={classNames(cls.Alert, {}, [className, theme, cls[color], 'app_modal'])}
            >
                <Icon
                    Svg={alertIcon}
                    className={cls.icon}
                    size={IconSize.M}
                />
                <Text
                    text={t(text)}
                    bold
                />
                <Button
                    square
                    className={cls.closeBtn}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClose}
                >
                    <Icon
                        Svg={CloseIcon}
                        size={IconSize.S}
                        color={'gray'}
                    />
                </Button>
            </HStack>
        </Portal>
    );
});
