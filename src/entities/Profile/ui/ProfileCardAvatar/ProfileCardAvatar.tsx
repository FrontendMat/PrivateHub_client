import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfileCardAvatar.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Card} from "shared/ui/Card";
import {Avatar} from "shared/ui/Avatar/Avatar";
import AvatarPhoto from 'shared/assets/photo.jpeg'
import {HStack, VStack} from "shared/ui/Stack";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Text} from "shared/ui/Text/Text";

const a = 'https://wallpapers.com/images/featured/night-mountain-2bhotujq381jpvh6.jpg'

interface ProfileCardBackgroundPhotoProps {
    className?: string
}

export const ProfileCardAvatar = memo((props: ProfileCardBackgroundPhotoProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const user = useSelector(getUserAuthData);

    return (
        <Card
            padding={'20'}
            max
            className={classNames(cls.ProfileCardBackgroundPhoto, {}, [className])}
        >
            <Avatar
                size={'full'}
                src={a}
                className={cls.wallpapers}
            />
            <HStack className={cls.wrapper} align={'center'} justify={'center'} max>
                <Avatar
                    size={'large'}
                    src={AvatarPhoto}
                    className={cls.avatar}
                />
                <VStack gap={'4'} className={cls.text} justify={'center'} align={'center'}>
                    <Text
                        text={user?.username + ' ' + user?.userlastname}
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
            </HStack>

        </Card>
    );
});
