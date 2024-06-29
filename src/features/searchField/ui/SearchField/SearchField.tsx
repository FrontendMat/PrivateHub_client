import {classNames} from "shared/lib/classNames/classNames";
import cls from './SearchField.module.scss';
import {memo} from "react";
import {Input, InputTheme} from "shared/ui/Input/Input";
import SearchIcon from "shared/assets/icons/search.svg";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface SearchFieldProps {
    className?: string;
    search?: string;
    onSearchEnter?: (value: string) => void;
    clearInput?: () => void;
}

export const SearchField = memo((props: SearchFieldProps) => {
    const {
        className,
        search,
        onSearchEnter,
        clearInput
    } = props;

    return (
        <div className={classNames(cls.SearchField, {}, [className])}>
            <div className={cls.iconWrapper}>
                <Icon
                    Svg={SearchIcon}
                    size={IconSize.S}
                    className={cls.icon}
                />
            </div>
            <Input
                value={search}
                onChange={onSearchEnter}
                theme={InputTheme.WITH_ICON}
                placeholder={'Search...'}
            />
            <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={clearInput}
                disabled={!search}
                className={cls.cancelBtn}
            >
                Clear
            </Button>
        </div>
    );
});
