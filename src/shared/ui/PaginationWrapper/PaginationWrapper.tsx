import {classNames} from "shared/lib/classNames/classNames";
import cls from './PaginationWrapper.module.scss';
import {memo, MutableRefObject, ReactNode, useRef} from "react";
import {useInfiniteScroll} from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PaginationWrapperProps {
    className?: string;
    children?: ReactNode;
    onScrollEnd?: () => void;
}

export const PaginationWrapper = memo((props: PaginationWrapperProps) => {
    const {
        className,
        children,
        onScrollEnd
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    })

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.PaginationWrapper, {}, [className])}
        >
            {children}
            <div ref={triggerRef}/>
        </section>
    );
});
