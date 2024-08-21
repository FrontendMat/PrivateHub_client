import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinanceActionPanel.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {HStack} from "shared/ui/Stack";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface PanelProps {
    className?: string;
    onOpenModal?: () => void;
    onOpenEditModal?: () => void;
}

export const FinanceActionPanel = memo((props: PanelProps) => {
    const {
        className,
        onOpenModal,
        onOpenEditModal,
    } = props;
    const {t} = useTranslation('finance');

    return (
        <HStack max gap={'20'} align={'center'} justify={'between'}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onOpenModal}
            >
                {t('+ Add Category')}
            </Button>
            <Button
                theme={ButtonTheme.BACKGROUND}
                onClick={onOpenEditModal}
            >
                {t('+ Add Value')}
            </Button>
        </HStack>

    );
});