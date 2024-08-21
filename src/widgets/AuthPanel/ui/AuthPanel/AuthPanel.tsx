import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './AuthPanel.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {Card} from "shared/ui/Card";
import {HStack} from "shared/ui/Stack";
import {AuthTextBlock} from "../AuthTextBlock/AuthTextBlock";
import {LoginForm} from "features/loginByUserEmail";
import {RegistrationForm} from "features/registerByUserEmail";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {WelcomeBlock} from "../WelcomeBlock/WelcomeBlock";

interface AuthPanelProps {
    className?: string
}

export const AuthPanel = memo((props: AuthPanelProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const userData = useSelector(getUserAuthData);
    const [newUser, setNewUser] = useState(false);

    const toggleForms = useCallback(() => {
        setNewUser(prev => !prev)
    }, [])

    const mods1: Mods = {
        [cls.active]: !newUser
    }
    const mods2: Mods = {
        [cls.active]: newUser
    }

    if (userData && !userData.isActivated) {
        console.log('here33')
        return <WelcomeBlock/>
    }

    return (
        <Card
            animate
            padding={'20'}
            theme={'inverted_bg'}
            className={classNames(cls.AuthPanel, {}, [className])}
        >
            <HStack gap={'40'} maxHeight align={'center'}>
                <AuthTextBlock
                    isNew={newUser}
                    onClick={toggleForms}
                />
                <div className={cls.wrapper}>
                    <LoginForm
                        className={classNames(cls.form, mods1, [className])}
                    />
                    <RegistrationForm
                        className={classNames(cls.form, mods2, [className])}
                    />
                </div>
            </HStack>
        </Card>
    );
});
