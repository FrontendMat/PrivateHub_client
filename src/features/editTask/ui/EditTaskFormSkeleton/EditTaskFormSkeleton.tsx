import {classNames} from "shared/lib/classNames/classNames";
import cls from './EditTaskFormSkeleton.module.scss';
import {memo} from "react";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

interface EditTaskFormSkeletonProps {
    className?: string
}

export const EditTaskFormSkeleton = memo((props: EditTaskFormSkeletonProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Skeleton className={cls.taskHeaderSkeleton} width={'100%'} height={60}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={30}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={30}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={50}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={30}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={100}/>
        </div>
    );
});
