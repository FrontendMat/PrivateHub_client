import {classNames} from "shared/lib/classNames/classNames";
import cls from './TaskListSkeleton.module.scss';
import {memo} from "react";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

interface TaskListSkeletonProps {
    className?: string
}

export const TaskListSkeleton = memo((props: TaskListSkeletonProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Skeleton className={cls.taskHeaderSkeleton} width={'100%'} height={60} border={'8px 8px 0 0'}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={50}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={50}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={50}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={50}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={50}/>
            <Skeleton className={cls.taskItemSkeleton} width={'100%'} height={50}/>
        </div>
    );
});
