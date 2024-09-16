import {classNames} from "shared/lib/classNames/classNames";
import {memo, useCallback} from "react";
import {HStack} from "shared/ui/Stack";
import {Input} from "shared/ui/Input/Input";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {getUpdateDateData} from "../../model/selectors/getUpdateDate";
import {updateDateActions} from "../../model/slice/updateDateSlice";
import {Text} from "shared/ui/Text/Text";
import {ListBox} from "shared/ui/ListBox/ListBox";
import {createUpdateDateArray} from "../../lib/createUpdateDateArray";
import {useTranslation} from "react-i18next";

interface ChangeDateFieldProps {
    className?: string;
    readonly?: boolean;
    saveChanges: () => void;
    onReadonly: () => void;
}

export const ChangeDateField = memo((props: ChangeDateFieldProps) => {
    const {
        className,
        readonly,
        saveChanges,
        onReadonly
    } = props;
    const {t} = useTranslation('finance');
    const dispatch = useAppDispatch();
    const date = useSelector(getUpdateDateData);
    const array = createUpdateDateArray(28);

    const setNewDate = useCallback((value: string) => {
        dispatch(updateDateActions.setNewDate(+value))
    }, [dispatch]);

    const clearInput = useCallback(() => {
        dispatch(updateDateActions.setClearField())
        onReadonly()
    }, [dispatch, onReadonly])
    
    return (
        <HStack
            max
            align={'center'}
            justify={'between'}
            gap={'20'}
            className={classNames('', {}, [className])}
        >
            <ListBox
                theme={'top_list'}
                items={array}
                value={date}
                readonly={readonly}
                onChange={setNewDate}
                title={t('Update Date')}
            />
            {readonly
                ? <HStack
                    gap={'10'}
                >
                    <Button
                        onClick={onReadonly}
                        theme={ButtonTheme.BACKGROUND}
                    >
                        {t('Change')}
                    </Button>
                </HStack>
                :
                <HStack
                    gap={'10'}
                >
                    <Button
                        onClick={saveChanges}
                        theme={ButtonTheme.BACKGROUND}
                    >
                        {t('Save')}
                    </Button>
                    <Button
                        onClick={clearInput}
                        theme={ButtonTheme.OUTLINE_RED}
                    >
                        {t('Cancel')}
                    </Button>
                </HStack>
            }
        </HStack>
    );
});
