import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './HeaderDropdownItem.module.scss';
import {useTranslation} from "react-i18next";
import {memo, SVGProps, VFC} from "react";
import {HStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";
import {Icon, IconSize} from "shared/ui/Icon/Icon";

interface HeaderDropdownItemProps {
    className?: string;
    title: string;
    icon: VFC<SVGProps<SVGSVGElement>>;
    isButton?: boolean;
}

export const HeaderDropdownItem = memo((props: HeaderDropdownItemProps) => {
    const {
        className,
        isButton = false,
        title,
        icon
    } = props;
    const {t} = useTranslation();

    const mods: Mods = {
        [cls.isButton]: isButton,
    }

    return (
        <HStack
            align={'center'}
            gap={'14'}
            className={classNames(cls.HeaderDropdownItem, mods, [className])}
        >
            <Icon
                Svg={icon}
                size={IconSize.S}
                color={'gray'}
                className={cls.item}
            />
            <Text
                text={t(title)}
                size={'size_m'}
                className={cls.item}
            />
        </HStack>
    );
});
