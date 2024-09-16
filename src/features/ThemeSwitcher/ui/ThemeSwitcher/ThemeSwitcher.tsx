import {memo} from 'react';
import {HStack} from "shared/ui/Stack";
import {Switcher} from "../Switcher/Switcher";
import {Text} from "shared/ui/Text/Text";
import {useTranslation} from "react-i18next";
import {Card} from "shared/ui/Card";
import {classNames} from "shared/lib/classNames/classNames";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
    const {t} = useTranslation('settings');

    return (
        <Card
            padding={'20'}
            className={classNames('', {}, [className])}
        >
            <HStack
                gap={'10'}
                align={'center'}
            >
                <Text
                    text={t('Change Theme' + ':')}
                    size={'size_m'}
                    theme={'gray'}
                    bold
                />
                <Switcher/>
            </HStack>
        </Card>
    )
});
