import {classNames} from "shared/lib/classNames/classNames";
import cls from './RegistrationForm.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {HStack, VStack} from "shared/ui/Stack";
import {Text} from "shared/ui/Text/Text";
import {Input, InputTheme} from "shared/ui/Input/Input";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {Form} from "shared/ui/Form/Form";

interface RegistrationFormProps {
    className?: string
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
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
                    text={'Create Account'}
                    theme={'primary'}
                    size={'size_xl'}
                    bold
                />
                <Text
                    text={'Please fill out the following fields to create an account'}
                    theme={'gray'}
                    size={'size_m'}
                />
            </VStack>
            <VStack max gap={'20'} className={cls.inputs}>
                <HStack align={'center'} max>
                    <Input
                        placeholder={'Username'}
                        // value={email}
                        type={'text'}
                        // onChange={onChangeUsername}
                        theme={InputTheme.BACKGROUND}
                    />
                </HStack>
                <HStack align={'center'} max>
                    <Input
                        placeholder={'Email'}
                        // value={email}
                        type={'email'}
                        // onChange={onChangeUsername}
                        theme={InputTheme.BACKGROUND}
                    />
                </HStack>
                <HStack align={'center'} max>
                    <Input
                        placeholder={'Password'}
                        // value={password}
                        // onChange={onChangePassword}
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
                // onClick={onLoginClick}
                // disabled={isLoading}
            >
                Sign Up
            </Button>
        </VStack>
    );
});
