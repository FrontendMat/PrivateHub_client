import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './AddNewFinanceCategoryForm.module.scss';
import {memo, useCallback, useState} from "react";
import {HStack, VStack} from "shared/ui/Stack";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {
    getFinCategoryData,
    getFinCategoryError,
    getFinCategoryIsLoading
} from "../../model/selectors/getFinCategoryData";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Input, InputTheme} from "shared/ui/Input/Input";
import {addFinanceCategoryActions, addFinanceCategoryReducer} from "../../model/slice/addFinanceCategorySlice";
import {FinanceType} from "entities/Finance";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {addFinanceCategory} from "../../model/services/addFinanceCategory";
import {Text} from "shared/ui/Text/Text";
import {Card} from "shared/ui/Card";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import PenIcon from "shared/assets/icons/pen.svg";
import CloseIcon from "shared/assets/icons/close.svg";
import {CheckBox} from "shared/ui/CheckBox/CheckBox";
import {Form} from "shared/ui/Form/Form";
import {Alert} from "shared/ui/Alert/Alert";

interface AddNewFinanceCategoryFormProps {
    className?: string;
    onModalClose: () => void;
    financeType: FinanceType;
    title: string;
    onSuccess: () => void;
    setAlertText: (text: string) => void;
}

const reducers: ReducersList = {
    addFinanceCategory: addFinanceCategoryReducer
}

const AddNewFinanceCategoryForm = memo((props: AddNewFinanceCategoryFormProps) => {
    const {
        className,
        financeType,
        onModalClose,
        onSuccess,
        setAlertText,
    } = props;
    const {t} = useTranslation('finance');
    const finance = useSelector(getFinCategoryData);
    const isLoading = useSelector(getFinCategoryIsLoading);
    const error = useSelector(getFinCategoryError);
    const dispatch = useAppDispatch();

    const setName = useCallback((value: string) => {
        dispatch(addFinanceCategoryActions.addFinance({name: value}))
    }, [dispatch]);

    const setIsRegular = useCallback(() => {
        dispatch(addFinanceCategoryActions.addFinance({isRegular: !finance?.isRegular}))
    }, [dispatch, finance?.isRegular]);

    const clearForm = useCallback(() => {
        dispatch(addFinanceCategoryActions.clearForm())
    }, [dispatch]);

    const createCategory = useCallback(async () => {
        const result = await dispatch(addFinanceCategory(financeType))
        if (result.meta.requestStatus === 'fulfilled') {
            onModalClose();
            setAlertText(t('Category created'))
            onSuccess();
        }
    }, [t, setAlertText, dispatch, onSuccess, onModalClose, financeType]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            {error &&
                <Alert
                    color={'error'}
                    text={t(error)}
                />
            }
            <Form>
                <VStack gap={'20'} className={classNames('', {}, [className])}>
                    <HStack max className={cls.title} align={'center'} justify={'between'}>
                        <Text
                            text={t(`Category`)}
                            theme={'primary'}
                            size={'size_l'}
                        />
                        <Button
                            square
                            onClick={onModalClose}
                            theme={ButtonTheme.CLEAR}
                        >
                            <Icon
                                Svg={CloseIcon}
                                color={'gray'}
                                size={IconSize.S}
                                pointer
                            />
                        </Button>
                    </HStack>
                    <HStack max align={'start'}>
                        <Card
                            padding={'icon'}
                            border={'full_left'}
                            theme={'primary'}
                        >
                            <Icon
                                Svg={PenIcon}
                                size={IconSize.XS}
                                hover={'secondary'}
                                color={'secondary'}
                            />
                        </Card>
                        <Input
                            theme={InputTheme.WITH_ICON}
                            value={finance?.name}
                            required
                            onChange={setName}
                            placeholder={t('Enter category name')}
                        />
                    </HStack>
                    <HStack align={'center'} gap={'10'}>
                        <CheckBox
                            checked={finance?.isRegular}
                            onChange={setIsRegular}
                        />
                        <Text
                            text={t('Regular category')}
                            theme={'gray'}
                            size={'size_m'}
                        />
                    </HStack>
                    <HStack
                        max
                        align={'center'}
                        justify={'between'}
                    >
                        <Button
                            onClick={clearForm}
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            {t('Clear')}
                        </Button>
                        <Button
                            type={'submit'}
                            onClick={createCategory}
                            theme={ButtonTheme.BACKGROUND}
                            disabled={isLoading}
                        >
                            {t('Create')}
                        </Button>
                    </HStack>
                </VStack>
            </Form>
        </DynamicModuleLoader>
    );
});

export default AddNewFinanceCategoryForm;