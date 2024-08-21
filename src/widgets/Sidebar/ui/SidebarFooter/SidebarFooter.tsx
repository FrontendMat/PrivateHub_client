import {classNames} from "shared/lib/classNames/classNames";
import cls from './SidebarFooter.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Text} from "shared/ui/Text/Text";
import {VStack} from "shared/ui/Stack";

interface SidebarFooterProps {
    className?: string
}

export const SidebarFooter = memo((props: SidebarFooterProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <VStack
            max
            justify={'center'}
            align={'center'}
            className={classNames(cls.SidebarFooter, {}, [className])}
        >
            <Text
                text={'v1.0'}
                theme={'gray'}
                size={'size_s'}
                className={cls.text}
            />
            <Text
                text={'PrivateHub | @2024'}
                theme={'gray'}
                size={'size_s'}
                className={cls.text}
            />
        </VStack>
    );
});
