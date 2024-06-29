import {classNames} from "shared/lib/classNames/classNames";
import cls from './FinanceActionPanel.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Card} from "shared/ui/Card";
import {VStack} from "shared/ui/Stack";
import AddIcon from 'shared/assets/icons/add.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import {Icon, IconColor} from "shared/ui/Icon/Icon";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface PanelProps {
    className?: string;
    onOpenModal?: () => void;
    hoverColor?: IconColor;
}

export const FinanceActionPanel = memo((props: PanelProps) => {
    const {
        className,
        onOpenModal,
        hoverColor = 'primary'
    } = props;
    const {t} = useTranslation();

    return (
        <Card padding={'20'} className={classNames(cls.FinanceActionPanel, {}, [className])}>
            <VStack maxHeight gap={'20'} align={'center'} justify={'center'}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    square
                    onClick={onOpenModal}
                >
                    <Icon
                        Svg={AddIcon}
                        color={'gray'}
                        hover={hoverColor}
                        pointer
                    />
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    square
                    onClick={onOpenModal}
                >
                    <Icon
                        Svg={EditIcon}
                        color={'gray'}
                        hover={hoverColor}
                        pointer
                    />
                </Button>
                <Button
                    theme={ButtonTheme.CLEAR}
                    square
                    onClick={onOpenModal}
                >
                    <Icon
                        Svg={EyeIcon}
                        color={'gray'}
                        hover={hoverColor}
                        pointer
                    />
                </Button>
            </VStack>
        </Card>
    );
});