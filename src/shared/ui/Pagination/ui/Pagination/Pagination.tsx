import {classNames} from "shared/lib/classNames/classNames";
import cls from './Pagination.module.scss';
import {memo} from "react";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {PaginationItem} from "shared/ui/Pagination/ui/PaginationItem/PaginationItem";
import {Icon} from "shared/ui/Icon/Icon";
import ArrowLeft from "shared/assets/icons/arrow-left.svg"
import ArrowRight from "shared/assets/icons/arrow-right.svg"

interface PaginationProps {
    className?: string;
    totalPages: number;
    currentPage: number;
    nextPage: (num: number) => void
}

export const Pagination = memo((props: PaginationProps) => {
    const {
        className,
        totalPages,
        currentPage,
        nextPage
    } = props;
    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    const onBack = () => {
        nextPage(currentPage - 1)
    }

    const onNext = () => {
        nextPage(currentPage + 1)
    }

    return (
        <div className={classNames(cls.Pagination, {}, [className])}>
            <Button
                onClick={onBack}
                size={ButtonSize.XL}
                square={true}
                className={cls.arrowLeft}
                theme={ButtonTheme.CLEAR}

            >
                <Icon Svg={ArrowLeft} className={cls.icon}/>
            </Button>
            {pages.map(page => (
                <PaginationItem
                    key={page}
                    page={page}
                    className={cls.paginationBtn}
                    nextPage={nextPage}
                    currentPage={currentPage}
                />
            ))}
            <Button
                onClick={onNext}
                size={ButtonSize.XL}
                square={true}
                className={cls.arrowRight}
                theme={ButtonTheme.CLEAR}
                disabled={currentPage === totalPages}
            >
                <Icon Svg={ArrowRight} className={cls.icon}/>
            </Button>
        </div>
    );
});
