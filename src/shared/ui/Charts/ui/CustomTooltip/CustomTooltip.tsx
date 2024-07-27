import {classNames} from "shared/lib/classNames/classNames";
import cls from './CustomTooltip.module.scss';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Card} from "shared/ui/Card";

interface CustomTooltipProps {
    className?: string;
    id: string | number;
    value: number;
    color: string;
}

export const CustomTooltip = memo((props: CustomTooltipProps) => {
    const {
        className,
        id,
        value,
        color
    } = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.CustomTooltip, {}, [className])}>
            <div
                style={{backgroundColor: String(color), height: 10, minWidth: 10, borderRadius: 4}}
            />
            <p>{id}:</p>
            <p style={{color: color}} className={cls.value}>{value}</p>
        </div>
    );
});
