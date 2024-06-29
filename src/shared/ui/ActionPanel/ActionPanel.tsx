import {classNames} from "shared/lib/classNames/classNames";
import cls from './Panel.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Card} from "shared/ui/Card";
import {HStack, VStack} from "shared/ui/Stack";
import AddIcon from 'shared/assets/icons/add.svg';
import EditIcon from 'shared/assets/icons/edit.svg';
import {Icon} from "shared/ui/Icon/Icon";

interface PanelProps {
    className?: string
}

export const FinanceActionPanel = memo((props: PanelProps) => {
    const {
        className,
    } = props;
    const {t} = useTranslation();

    return (
        <Card padding={'20'} className={classNames(cls.FinanceActionPanel, {}, [className])}>
            <VStack maxHeight gap={'20'} align={'center'} justify={'center'}>
                <Icon Svg={AddIcon} color={'green'} pointer/>
                <Icon Svg={EditIcon} color={'red'} pointer/>
            </VStack>
        </Card>
    );
});