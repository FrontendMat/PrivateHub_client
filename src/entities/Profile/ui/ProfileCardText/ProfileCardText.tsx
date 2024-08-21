import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfileCardText.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Text} from "shared/ui/Text/Text";
import {VStack} from "shared/ui/Stack";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";

interface ProfileCardTextProps {
    className?: string
}

export const ProfileCardText = memo((props: ProfileCardTextProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const user = useSelector(getUserAuthData);

    return (
        <VStack gap={'4'} className={cls.text} justify={'center'} align={'center'}>
            <Text
                text={user?.username}
                bold
                size={'size_xl'}
                theme={'normal'}
            />
            <Text
                text={'Admin'}
                size={'size_l'}
                theme={'gray'}
            />
        </VStack>
    );
});
