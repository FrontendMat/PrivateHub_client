import {classNames} from "shared/lib/classNames/classNames";
import cls from './Logo.module.scss';
import {memo} from "react";

interface LogoProps {
    className?: string
}

export const Logo = memo((props: LogoProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.Logo, {}, [className])}>

        </div>
    );
});
