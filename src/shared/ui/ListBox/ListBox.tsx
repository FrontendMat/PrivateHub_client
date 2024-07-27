import {Fragment, ReactNode, useDeferredValue, useMemo} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from "./ListBox.module.scss"
import {classNames, Mods} from "shared/lib/classNames/classNames";

export interface ListBoxItems {
    value: string | undefined,
    content: ReactNode | undefined,
    unavailable?: boolean;
    id?: string;
}

export enum ListBoxTheme {
    BOTTOM_LIST = 'bottom_list',
    TOP_LIST = 'top_list',
}

export interface ListBoxProps<T extends string> {
    items?: ListBoxItems[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    title?: string;
    theme?: ListBoxTheme
}

const emptyArr: ListBoxItems[] = [{value: 'No Data', content: 'No Data'}]

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        items= emptyArr,
        value,
        defaultValue,
        onChange,
        readonly,
        theme = ListBoxTheme.BOTTOM_LIST,
        title,
        className
    } = props;

    return (
        <div className={cls.ListBoxWrapper}>
            {title &&
                <span className={cls.title}>
                    {title}
                </span>
            }
            <HListBox
                disabled={readonly}
                as={'div'}
                className={classNames(cls.ListBox, {[cls.disabled]: readonly}, [className, cls[theme]])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    className={classNames(cls.trigger, {[cls.triggerTitle]: title})}
                >
                    {value === '' || !value ? defaultValue : value}
                </HListBox.Button>
                <HListBox.Options className={cls.options}>
                    {items.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.unavailable}
                            as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item,{
                                        [cls.active]: active, [cls.selected]: selected, [cls.disabledItem]: item.unavailable
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </div>
    )
}