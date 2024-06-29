import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Card.module.scss';
import {ReactNode} from "react";

export type CardPadding = '10' | '20' | '40' | '60';

interface CardProps {
    className?: string;
    children: ReactNode;
    padding: CardPadding;
    max?: boolean
}

const paddingClasses: Record<CardPadding, string> = {
    10: cls.padding10,
    20: cls.padding20,
    40: cls.padding40,
    60: cls.padding60,
}

export const Card = (props: CardProps) => {
    const {
        className,
        padding,
        children,
        max
    } = props;

    const additional = [
        className,
        paddingClasses[padding]
    ]

    const mods: Mods = {
        [cls.max]: max
    }

    return (
        <div className={classNames(cls.Card, mods, additional)}>
            {children}
        </div>
    );
};
