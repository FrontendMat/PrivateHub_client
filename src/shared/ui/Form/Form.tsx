import {classNames} from "shared/lib/classNames/classNames";
import {FormEvent, memo, ReactNode, useCallback} from "react";

interface FormProps {
    className?: string,
    children?: ReactNode,
}

export const Form = memo((props: FormProps) => {
    const {
        className,
        children
    } = props;

    const handleFormSubmit = useCallback((e: FormEvent) => {
        e.preventDefault()
    }, [])

    return (
        <form
            onSubmit={handleFormSubmit}
            className={classNames('', {}, [className])}
        >
            {children}
        </form>
    );
});
