import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss';
import {memo} from "react";
import {Page} from "shared/ui/Page";
import {ProfileCard} from "entities/Profile";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            <ProfileCard/>
        </Page>
    );
});

export default ProfilePage;