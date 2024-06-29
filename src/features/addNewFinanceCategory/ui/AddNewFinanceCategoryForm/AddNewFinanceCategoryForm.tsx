import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './AddNewFinanceCategoryForm.module.scss';
import {memo, useCallback} from "react";
import {HStack, VStack} from "shared/ui/Stack";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {getFinCategoryData} from "../../model/selectors/getFinCategoryData";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Input, InputTheme} from "shared/ui/Input/Input";
import {addFinanceCategoryActions, addFinanceCategoryReducer} from "../../model/slice/addFinanceCategorySlice";
import {FinanceType} from "entities/Finance";
import {ListBox, ListBoxItems} from "shared/ui/ListBox/ListBox";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {addFinanceCategory} from "../../model/services/addFinanceCategory";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface AddNewFinanceCategoryFormProps {
    className?: string;
    onModalClose: () => void;
    onSuccess: () => void;
}

const options: ListBoxItems[] = [
    {
        value: 'Incomes',
        content: 'Incomes'
    },
    {
        value: 'Expenses',
        content: 'Expenses'
    }
]

const reducers: ReducersList = {
    addFinanceCategorySchema: addFinanceCategoryReducer
}

const AddNewFinanceCategoryForm = memo((props: AddNewFinanceCategoryFormProps) => {
    const {
        className,
        onModalClose
    } = props;
    const {t} = useTranslation();
    const finance = useSelector(getFinCategoryData);
    const dispatch = useAppDispatch();

    const setName = useCallback((value: string) => {
        dispatch(addFinanceCategoryActions.addFinance({name: value}))
    }, [dispatch])

    const setType = useCallback((value: FinanceType) => {
        dispatch(addFinanceCategoryActions.addFinance({type: value}))
    }, [dispatch])

    const createCategory = useCallback(() => {
        dispatch(addFinanceCategory())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap={'20'} className={classNames('', {}, [className])}>
                <VStack max className={cls.title} align={'start'}>
                    <Text
                        title={'Add new category'}
                        theme={TextTheme.PRIMARY}
                    />
                </VStack>
                <VStack gap={'20'} align={'start'}>
                    <Input
                        theme={InputTheme.BACKGROUND}
                        value={finance?.name}
                        onChange={setName}
                        placeholder={'Enter category name'}
                    />
                    <ListBox<FinanceType>
                        onChange={setType}
                        value={finance?.type}
                        defaultValue={'Select Type'}
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
                        onClick={createCategory}
                        theme={ButtonTheme.BACKGROUND}
                    >
                        Create
                    </Button>
                </HStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default AddNewFinanceCategoryForm;