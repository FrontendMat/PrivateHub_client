import {classNames} from "shared/lib/classNames/classNames";
import cls from './ProfilePage.module.scss';
import {memo} from "react";
import {Page} from "shared/ui/Page";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const {
        className,
    } = props;

    return (
        <Page className={classNames(cls.ProfilePage, {}, [className])}>
            Profile
        </Page>
    );
});

export default ProfilePage;