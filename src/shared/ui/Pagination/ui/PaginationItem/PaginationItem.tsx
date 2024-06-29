import {classNames} from "shared/lib/classNames/classNames";
import cls from './PaginationItem.module.scss';
import {memo} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface PaginationItemProps {
    className?: string;
    page: number;
    currentPage?: number,
    nextPage: (num: number) => void;
}

export const PaginationItem = memo((props: PaginationItemProps) => {
    const {
        className,
        currentPage,
        nextPage,
        page
    } = props;

    const togglePage = () => {
        nextPage(page)
    }

    console.log(page, currentPage)

    return (
        <Button
            onClick={togglePage}
            className={cls.PaginationItem}
            theme={currentPage === page ? ButtonTheme.BACKGROUND : ButtonTheme.OUTLINE}
        >
            {page}
        </Button>
    );
});
