import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './CheckBox.module.scss';
import {memo} from "react";

interface CheckBoxProps {
    className?: string;
    checked?: boolean;
    onChange?: () => void;
    readonly?: boolean;
    title?: string;
}

export const CheckBox = memo((props: CheckBoxProps) => {
    const {
        className,
        checked,
        onChange,
        readonly,
        title,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    }

    return (
        <label className={classNames(cls.container, mods, [className])}>
            <input
                checked={checked}
                onChange={onChange}
                type="checkbox"
                disabled={readonly}
                {...otherProps}
            />
            <div className={classNames(cls.checkmark, {[cls.checkmarkTitle]: title})}></div>
        </label>
    );
});
