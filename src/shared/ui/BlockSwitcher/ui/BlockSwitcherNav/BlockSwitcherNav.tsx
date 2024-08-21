import {useTranslation} from "react-i18next";
import React, {memo, ReactNode, useCallback} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import {HStack} from "shared/ui/Stack";
import {blockSwitcherNav} from "shared/types/blockSwitcher";

interface BlockSwitcherNavProps {
    id: number;
    currentId: number;
    className?: string;
    item: blockSwitcherNav
    switchBlock: (id: number) => void;
}

export const BlockSwitcherNav = memo((props: BlockSwitcherNavProps) => {
    const {
        className,
        item,
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
            <HStack gap={'10'} align={'center'}>
                {item.icon &&
                    <Icon
                        Svg={item.icon}
                        size={IconSize.XS}
                        color={isActive ? 'secondary' : 'gray'}
                    />
                }
                {item.text}
            </HStack>
        </Button>
    );
});
