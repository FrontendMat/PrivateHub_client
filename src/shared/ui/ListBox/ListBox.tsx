import React, {Fragment, ReactNode} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from "./ListBox.module.scss"
import {classNames} from "shared/lib/classNames/classNames";

export interface ListBoxItems {
    value: string |  undefined,
    content: ReactNode |  undefined,
    unavailable?: boolean;
    id?: string;
}

export type ListBoxTheme = 'bottom_list' | 'top_list';

export type ListBoxDirection = 'left' | 'right';

export interface ListBoxProps<T extends string> {
    items?: ListBoxItems[];
    className?: string;
    value?: string | ReactNode;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    title?: string;
    clear?: boolean;
    theme?: ListBoxTheme;
    direction?: ListBoxDirection;
}

const emptyArr: ListBoxItems[] = [{value: 'No Data', content: 'No Data', unavailable: true}]

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        items = [],
        value,
        clear = false,
        defaultValue,
        onChange,
        readonly,
        theme = 'bottom_list',
        direction = 'left',
        title,
        className
    } = props;

    let array = items?.length > 0 ? items : emptyArr;

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
                    className={classNames(cls.trigger, {[cls.triggerTitle]: title, [cls.clear_trigger]: clear})}
                >
                    {value === '' || !value ? defaultValue : value}
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {[cls.clear]: clear}, [cls[direction]])}>
                    {array?.map((item) => (
                        <HListBox.Option
                            key={item.id}
                            value={item.value}
                            disabled={item.unavailable}
                            as={Fragment}>
                            {({ active, selected }: any) => (
                                <li
                                    className={classNames(cls.item,{
                                        [cls.active]: active,
                                        [cls.disabledItem]: item.unavailable,
                                        [cls.clear]: clear
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