import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {HStack} from "shared/ui/Stack";
import {HeaderNavItems} from "../../model/items";
import {HeaderNavItem} from "../HeaderNavItem/HeaderNavItem";

interface HeaderNavProps {
    className?: string
}

export const HeaderNav = memo((props: HeaderNavProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <HStack
            gap={'10'}
            align={'center'}
            className={classNames('', {}, [className])}
        >
            {HeaderNavItems?.map(item => (
                <HeaderNavItem
                    key={item.path}
                    path={item.path}
                    text={t(`${item.text}`)}
                />
            ))}
        </HStack>
    );
});
