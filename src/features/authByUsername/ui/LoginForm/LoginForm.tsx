import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import {Input, InputTheme} from "shared/ui/Input/Input";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {Text, TextAlign, TextSize, TextTheme} from "shared/ui/Text/Text";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginUserName} from "../../model/selectors/getLoginUserName/getLoginUserName";
import {useCallback} from "react";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import LogoIcon from "shared/assets/icons/logo.svg";
import {Alert, AlertTheme} from "shared/ui/Alert/Alert";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import {Card} from "shared/ui/Card";
import {VStack} from "shared/ui/Stack";

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
    const username = useSelector(getLoginUserName);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({username, password}));

    }, [dispatch, username, password, ])

    return (
        <DynamicModuleLoader
            reducers={initialReducer}
            removeAfterUnmount={true}
        >
            {error && <Alert theme={AlertTheme.ERROR} text={error}/>}
            <Card
                className={classNames(cls.LoginForm, {}, [className])}
                padding={'40'}
            >
                <VStack
                    className={cls.blockRight}
                    align={'center'}
                    justify={'center'}
                >
                    <div className={cls.logo}>
                        <Icon
                            Svg={LogoIcon}
                            size={IconSize.L}
                            className={cls.logoIcon}
                        />
                        <Text
                            title={'OrgaNize'}
                            text={'Personal Admin Panel'}
                            align={TextAlign.CENTER}
                            theme={TextTheme.PRIMARY_GREY}
                            size={TextSize.LM}
                        />
                    </div>
                </VStack>
                <VStack
                    align={'center'}
                >
                    <Text
                        title={'Welcome'}
                        text={'Log in to your account'}
                        align={TextAlign.CENTER}
                        theme={TextTheme.NORMAL_GREY}
                        size={TextSize.LM}
                    />
                    <div className={cls.inputs}>
                        <Input
                            placeholder={'Username'}
                            className={cls.input}
                            value={username}
                            onChange={onChangeUsername}
                            theme={InputTheme.BACKGROUND}
                        />
                        <Input
                            placeholder={'Password'}
                            className={cls.input}
                            value={password}
                            onChange={onChangePassword}
                            theme={InputTheme.BACKGROUND}
                            type={"password"}
                        />
                    </div>
                    <Button
                        theme={ButtonTheme.BACKGROUND}
                        size={ButtonSize.XL}
                        className={cls.btn}
                        onClick={onLoginClick}
                        disabled={isLoading}
                    >
                        Log In
                    </Button>
                </VStack>
            </Card>
        </DynamicModuleLoader>
    );
};
