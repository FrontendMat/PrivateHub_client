import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React, {memo, useCallback} from "react";
import {Text} from "shared/ui/Text/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LangSwitcher} from "features/LangSwitcher";
import {HStack} from "shared/ui/Stack";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {logoutAuth} from "entities/User";

interface HeaderRightProps {
    className?: string;
    userName?: string;
}

export const HeaderRight = memo((props: HeaderRightProps) => {
    const {
        className,
        userName
    } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAuth());
    }, [dispatch])

    return (
        <HStack
            align={'center'}
            gap={'10'}
            className={classNames('', {}, [className])}
        >
            <LangSwitcher/>
            <Text
                size={'size_l'}
                text={userName}
                bold
            />
            <Button
                onClick={onLogOut}
                theme={ButtonTheme.BACKGROUND_RED}
            >
                {t('Log Out')}
            </Button>
        </HStack>
    );
});
