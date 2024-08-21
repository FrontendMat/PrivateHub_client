import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfileCardAvatar.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Card} from "shared/ui/Card";
import {Avatar} from "shared/ui/Avatar/Avatar";
import AvatarPhoto from 'shared/assets/photo.jpeg'
import AvatarBg from 'shared/assets/icons/avatar-bg.svg'
import {HStack, VStack} from "shared/ui/Stack";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Text} from "shared/ui/Text/Text";
import {Icon, IconSize} from "shared/ui/Icon/Icon";

interface ProfileCardBackgroundPhotoProps {
    className?: string
}

export const ProfileCardAvatar = memo((props: ProfileCardBackgroundPhotoProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <Card
            padding={'20'}
            width={'max'}
            className={classNames(cls.ProfileCardBackgroundPhoto, {}, [className])}
        >
            <div
                className={cls.wallpapers}
            />
            <HStack className={cls.wrapper} align={'center'} justify={'center'} max>
                <Avatar
                    size={'large'}
                    src={AvatarPhoto}
                    className={cls.avatar}
                />
            </HStack>
        </Card>
    );
});
