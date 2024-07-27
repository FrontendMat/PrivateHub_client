import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './addNewFinanceTransactionForm.module.scss';
import {memo, useCallback, useState} from "react";
import {HStack, VStack} from "shared/ui/Stack";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {getNewFinanceTransactionData, getNewFinanceTransactionIsLoading, getNewFinanceTransactionError} from "../../model/selectors/getNewFinanceTransaction";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Input, InputTheme} from "shared/ui/Input/Input";
import {addNewFinanceTransactionReducer, addNewFinanceTransactionActions} from "../../model/slice/addNewFinanceTransactionSlice";
import {Finance, FinanceType} from "entities/Finance";
import {ListBox} from "shared/ui/ListBox/ListBox";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {addNewFinanceTransaction} from "../../model/services/addNewFinanceTransaction";
import {Text} from "shared/ui/Text/Text";
import {Card} from "shared/ui/Card";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import MoneyIcon from "shared/assets/icons/money.svg";
import PigIcon from "shared/assets/icons/money-pig.svg";
import {Form} from "shared/ui/Form/Form";

interface AddNewFinanceCategoryFormProps {
    className?: string;
    onModalClose: () => void;
    categories?: Finance[];
    financeType: FinanceType;
}

const reducers: ReducersList = {
    addNewFinanceTransaction: addNewFinanceTransactionReducer
}

const AddNewFinanceTransactionForm = memo((props: AddNewFinanceCategoryFormProps) => {
    const {
        className,
        onModalClose,
        financeType,
        categories = []
    } = props;
    const {t} = useTranslation();
    const finance = useSelector(getNewFinanceTransactionData);
    const isLoading = useSelector(getNewFinanceTransactionIsLoading);
    const error = useSelector(getNewFinanceTransactionError);
    const dispatch = useAppDispatch();
    const [category, setCategory] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    const onSuccess = useCallback(() => {
        setIsSuccess(true)
    }, [])

    const isIncomes = financeType === 'Incomes';

    const options = categories?.map((e) => (
        {
            value: e._id,
            content: e.name,
        }
    ))

    const setName = useCallback((value: string) => {
        const parsedValue = Number(value);

        if (!isNaN(parsedValue) && parsedValue.toString().length <= 7) {
            dispatch(addNewFinanceTransactionActions.addFinance({amount: parsedValue}));
        }
    }, [dispatch])

    const setType = useCallback((value: string) => {
        const categoryName = categories?.find( e => e._id === value)
        if (categoryName?.name) {
            setCategory(categoryName.name)
        }

        dispatch(addNewFinanceTransactionActions.addFinance({category: value}))
    }, [dispatch, categories])

    const createCategory = useCallback(async () => {
        const result = await dispatch(addNewFinanceTransaction(financeType));

        if (result.meta.requestStatus === 'fulfilled') {
            onModalClose();
            onSuccess();
        }
    }, [dispatch, onSuccess, onModalClose, financeType])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Form>
                <VStack gap={'20'} className={classNames('', {}, [className])}>
                    <HStack max className={cls.title} align={'center'} justify={'between'}>
                        <Text
                            text={'Value'}
                            theme={'primary'}
                            size={'size_l'}
                        />
                        <Icon size={IconSize.M} Svg={PigIcon} color={isIncomes ? 'green' : 'red'} hover={isIncomes ? 'green' : 'red'}/>
                    </HStack>
                    <VStack max gap={'20'} align={'start'}>
                        <HStack max align={'center'}>
                            <Card
                                padding={'icon'}
                                border={'full_left'}
                                theme={'primary'}
                            >
                                <Icon
                                    Svg={MoneyIcon}
                                    size={IconSize.XS}
                                    hover={'secondary'}
                                    color={'secondary'}
                                />
                            </Card>
                            <Input
                                theme={InputTheme.WITH_ICON}
                                value={finance?.amount}
                                onChange={setName}
                                placeholder={'Enter value'}
                            />
                        </HStack>
                        <ListBox<any>
                            onChange={setType}
                            value={category}
                            defaultValue={'Select Category'}
                            items={options}
                            title={'Type'}
                        />
                    </VStack>
                    <HStack
                        max
                        align={'center'}
                        justify={'between'}
                    >
                        <Button
                            onClick={onModalClose}
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            Cancel
                        </Button>
                        <Button
                            type={'submit'}
                            onClick={createCategory}
                            theme={ButtonTheme.BACKGROUND}
                            disabled={isLoading}
                        >
                            Create
                        </Button>
                    </HStack>
                </VStack>
            </Form>
        </DynamicModuleLoader>
    );
});

export default AddNewFinanceTransactionForm;