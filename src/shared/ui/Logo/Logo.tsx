import {classNames} from "shared/lib/classNames/classNames";
import cls from './Logo.module.scss';
import {memo} from "react";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import LogoIcon from "shared/assets/icons/logo.svg";
import {Text} from "shared/ui/Text/Text";

export type LogoType = 'vertical' | 'horizontal';

interface LogoProps {
    className?: string;
    type: LogoType;
    titleOnly?: boolean;
    iconOnly?: boolean;
    iconSize?: IconSize;
}

const typeClasses: Record<LogoType, string> = {
    vertical: cls.vertical,
    horizontal: cls.horizontal,
}

export const Logo = memo((props: LogoProps) => {
    const {
        className,
        type,
        titleOnly = false,
        iconOnly = false,
        iconSize
    } = props;

    const additional = [
        className,
        typeClasses[type]
    ]

    return (
        <div className={classNames(cls.text, {}, additional)}>
            <Icon
                Svg={LogoIcon}
                size={iconSize}
            />
            {!iconOnly &&
                <Text
                    text={'PrivateHub'}
                    size={'size_lm'}
                    align={'center'}
                    theme={'primary'}
                    bold
                />
            }
        </div>
    );
});
