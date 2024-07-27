import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import {Input, InputTheme} from "shared/ui/Input/Input";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {Text} from "shared/ui/Text/Text";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginEmail} from "../../model/selectors/getLoginEmail/getLoginEmail";
import {useCallback} from "react";
import {loginByEmail} from "../../model/services/loginByEmail/loginByEmail";
import {Alert, AlertTheme} from "shared/ui/Alert/Alert";
import {HStack, VStack} from "shared/ui/Stack";
import {Form} from "shared/ui/Form/Form";

interface LoginFormProps {
    className?: string
}

const initialReducer: ReducersList = {
    loginForm: loginReducer
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const password = useSelector(getLoginPassword);
    const email = useSelector(getLoginEmail);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByEmail({email, password}));
    }, [dispatch, email, password, ])

    return (
        <DynamicModuleLoader
            reducers={initialReducer}
            removeAfterUnmount
        >
            {error && <Alert color={AlertTheme.ERROR} text={error}/>}
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
                            text={'Sign In'}
                            theme={'primary'}
                            size={'size_xl'}
                            bold
                        />
                        <Text
                            text={'Please sign in to access your account'}
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
                                onChange={onChangeUsername}
                                theme={InputTheme.BACKGROUND}
                            />
                        </HStack>
                        <HStack align={'center'} max>
                            <Input
                                placeholder={'Password'}
                                value={password}
                                onChange={onChangePassword}
                                theme={InputTheme.BACKGROUND}
                                type={"password"}
                            />
                        </HStack>
                    </VStack>
                    <Button
                        max
                        theme={ButtonTheme.BACKGROUND}
                        size={ButtonSize.XL}
                        className={cls.btn}
                        onClick={onLoginClick}
                        disabled={isLoading}
                        type={'submit'}
                    >
                        Sign In
                    </Button>
                </VStack>
            </Form>
        </DynamicModuleLoader>
    );
};
