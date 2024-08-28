import {classNames} from "shared/lib/classNames/classNames";
import cls from './RegistrationForm.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {HStack, VStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";
import {Input, InputTheme} from "shared/ui/Input/Input";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {Form} from "shared/ui/Form/Form";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {registerActions, registerReducer} from "../../model/slice/registerSlice";
import {useSelector} from "react-redux";
import {
    getRegistrationEmail,
    getRegistrationError, getRegistrationIsLoading, getRegistrationPassword, getRegistrationUsername
} from "../../model/selectors/getRegistrationData/getRegistrationData";
import {Alert} from "shared/ui/Alert/Alert";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {registerByEmail} from "../../model/services/registerByEmail";

interface RegistrationFormProps {
    className?: string
}

const reducers: ReducersList = {
    registrationForm: registerReducer,
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation('auth');
    const dispatch = useAppDispatch();
    const email = useSelector(getRegistrationEmail);
    const username = useSelector(getRegistrationUsername);
    const password = useSelector(getRegistrationPassword);
    const isLoading = useSelector(getRegistrationIsLoading);
    const error = useSelector(getRegistrationError);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(registerActions.setEmail(value))
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(registerActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(registerActions.setPassword(value))
    }, [dispatch]);

    const onRegistrationClick = useCallback(async () => {
        const result = await dispatch(registerByEmail({email, username, password}));
    }, [dispatch, email, username, password]);

    const clearForm = useCallback(() => {
        dispatch(registerActions.clearForm())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            {error && <Alert color={'error'} text={error}/>}
            <Form>
                <VStack
                    align={'start'}
                    justify={'center'}
                    gap={'20'}
                    max
                    maxHeight
                    className={classNames('', {}, [className])}
                >
                    <VStack max gap={'2'} justify={'center'} align={'center'}>
                        <Text
                            text={t('Create Account')}
                            theme={'primary'}
                            size={'size_xl'}
                            bold
                        />
                        <Text
                            text={t('Please fill out the following fields to create an account')}
                            theme={'gray'}
                            size={'size_m'}
                        />
                    </VStack>
                    <VStack max gap={'20'} className={cls.inputs}>
                        <HStack align={'center'} max>
                            <Input
                                placeholder={'Email'}
                                value={email}
                                type={'email'}
                                onChange={onChangeEmail}
                                theme={InputTheme.BACKGROUND}
                            />
                        </HStack>
                        <HStack align={'center'} max>
                            <Input
                                placeholder={t('Username')}
                                type={'text'}
                                value={username}
                                onChange={onChangeUsername}
                                theme={InputTheme.BACKGROUND}
                            />
                        </HStack>
                        <HStack align={'center'} max>
                            <Input
                                placeholder={t('Password (must be between 8 and 14 characters)')}
                                value={password}
                                onChange={onChangePassword}
                                theme={InputTheme.BACKGROUND}
                                type={"password"}
                            />
                        </HStack>
                    </VStack>
                    <VStack
                        max
                        gap={'10'}
                    >
                        <Button
                            max
                            theme={ButtonTheme.BACKGROUND}
                            size={ButtonSize.XL}
                            className={cls.btn}
                            onClick={onRegistrationClick}
                            disabled={isLoading}
                        >
                            {t('Sign Up')}
                        </Button>
                        <Button
                            max
                            theme={ButtonTheme.OUTLINE_RED}
                            size={ButtonSize.XL}
                            className={cls.btn}
                            onClick={clearForm}
                            disabled={isLoading}
                        >
                            {t('Clear Form')}
                        </Button>
                    </VStack>
                </VStack>
            </Form>
        </DynamicModuleLoader>
    );
});
