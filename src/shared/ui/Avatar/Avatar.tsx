import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

export type AvatarSize = 'small' | 'medium' | 'large' | 'full';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: AvatarSize;
    alt?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
    small: cls.small,
    medium: cls.medium,
    large: cls.large,
    full: cls.full
}

export const Avatar = (props: AvatarProps) => {
    const { className,
        src,
        size= 'medium',
        alt,
    } = props;

    const additional = [
        className,
        sizeClasses[size]
    ];

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.Avatar, {}, additional)}
        />
    );
};

