import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface BlockSwitcherNavProps {
    id: number;
    currentId: number;
    className?: string;
    text: string;
    switchBlock: (id: number) => void;
}

export const BlockSwitcherNav = memo((props: BlockSwitcherNavProps) => {
    const {
        className,
        text,
        id,
        currentId,
        switchBlock
    } = props;
    const {t} = useTranslation();
    const isActive = currentId === id;
    
    const onClick = useCallback(() => (
        switchBlock(id)
    ), [switchBlock, id])

    return (
        <Button
            onClick={onClick}
            theme={isActive ? ButtonTheme.BACKGROUND : ButtonTheme.BACKGROUND_INVERTED}
        >
            {text}
        </Button>
    );
});
