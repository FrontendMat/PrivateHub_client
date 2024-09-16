import {classNames} from "shared/lib/classNames/classNames";
import cls from './ChangeDateBlock.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useCallback, useState} from "react";
import {Card} from "shared/ui/Card";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {updateDateReducer} from "../../model/slice/updateDateSlice";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {updateFinanceDate} from "../../model/services/updateFinanceDate";
import {ChangeDateField} from "../ChangeDateField/ChangeDateField";

interface ChangeDateBlockProps {
    className?: string;
}

const reducers: ReducersList = {
    updateFinanceDate: updateDateReducer,
}

export const ChangeDateBlock = memo((props: ChangeDateBlockProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [readonly, setReadonly] = useState(true);

    const onReadonly = useCallback(() => {
        setReadonly(prev => !prev)
    }, []);

    const saveChanges = useCallback(async () => {
        const result = await dispatch(updateFinanceDate());
        if (result.meta.requestStatus === 'fulfilled') {
            setReadonly(true)
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card
                width={'max'}
                padding={'20'}
                className={classNames(cls.ChangeDateBlock, {}, [className])}
            >
                <ChangeDateField
                    readonly={readonly}
                    onReadonly={onReadonly}
                    saveChanges={saveChanges}
                />
            </Card>
        </DynamicModuleLoader>
    );
});
