import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfileCard.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ProfileCardAvatar} from "../ProfileCardAvatar/ProfileCardAvatar";
import {ProfileCardText} from "../ProfileCardText/ProfileCardText";

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <ProfileCardAvatar/>
            <ProfileCardText/>
        </div>
    );
});
