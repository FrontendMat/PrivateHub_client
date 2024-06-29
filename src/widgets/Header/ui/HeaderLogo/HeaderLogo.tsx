import {classNames} from "shared/lib/classNames/classNames";
import cls from './HeaderLogo.module.scss';
import {memo} from "react";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import LogoIcon from "shared/assets/icons/logo.svg";
import {Text, TextSize, TextTheme} from "shared/ui/Text/Text";

interface HeaderLogoProps {
    className?: string
}

export const HeaderLogo = memo((props: HeaderLogoProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.HeaderLogo, {}, [className])}>
            <Icon
                Svg={LogoIcon}
                className={cls.logo}
                size={IconSize.L}/>
            <Text
                title={'OrgaNize'}
                className={cls.text}
                size={TextSize.L}
                theme={TextTheme.PRIMARY}
            />
        </div>
    );
});
