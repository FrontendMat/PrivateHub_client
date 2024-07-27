import {classNames} from "shared/lib/classNames/classNames";
import cls from './Header.module.scss';
import {memo} from "react";
import {IconSize} from "shared/ui/Icon/Icon";
import {Logo} from "shared/ui/Logo/Logo";
import {HStack, VStack} from "shared/ui/Stack";
import {Card} from "shared/ui/Card";
import Ph from "shared/assets/photo.jpeg";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {Text} from "shared/ui/Text/Text";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {ThemeSwitcher} from "features/ThemeSwitcher";


interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const {
        className,
    } = props;
    const userData = useSelector(getUserAuthData)

    return (
        <Card border={'full_bottom'} padding={'16'} max className={classNames(cls.Header, {}, [className])}>
            <HStack align={'center'} justify={'between'}>
                <Logo
                    titleOnly
                    type={'horizontal'}
                    iconSize={IconSize.L}
                />
                <HStack gap={'10'}>
                    <VStack gap={'2'} justify={'between'} align={'end'}>
                        <Text
                            size={'size_l'}
                            text={userData?.username + ' ' + userData?.userlastname}
                            theme={'normal'}
                            bold
                        />
                        <Text
                            size={'size_m'}
                            text={'Admin'}
                        />
                    </VStack>
                    <Avatar
                        src={Ph}
                        size={'medium'}
                    />
                </HStack>
            </HStack>
        </Card>
    );
});
