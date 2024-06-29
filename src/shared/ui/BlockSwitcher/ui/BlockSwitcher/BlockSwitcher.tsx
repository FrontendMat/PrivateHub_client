import {classNames} from "shared/lib/classNames/classNames";
import cls from './BlockSwitcher.module.scss';
import {memo, ReactNode, useCallback, useState} from "react";
import {BlockSwitcherNav} from "../BlockSwitcherNav/BlockSwitcherNav";
import {BlockSwitcherData} from "../BlockSwitcherData/BlockSwitcherData";
import {HStack, VStack} from "shared/ui/Stack";
import {Card} from "shared/ui/Card";

interface BlockSwitcherProps {
    className?: string;
    tabsNav: string[];
    tabsItems: ReactNode[];

}

export const BlockSwitcher = memo((props: BlockSwitcherProps) => {
    const {
        className,
        tabsItems,
        tabsNav
    } = props;

    const [isActive, setIsActive] = useState(1);

    const switchBlock = useCallback((id: number) => {
        setIsActive(id)
    }, [])

    return (
        <VStack max gap={'20'} className={classNames(cls.BlockSwitcher, {}, [className])}>
            <Card max padding={'20'}>
                <HStack
                    align={'center'}
                    gap={'16'}
                >
                    {tabsNav.map((e, i) => (
                        <BlockSwitcherNav
                            key={i}
                            id={i + 1}
                            currentId={isActive}
                            text={e}
                            switchBlock={switchBlock}
                        />
                    ))}
                </HStack>
            </Card>
            {tabsItems.map((e, i) => (
                <BlockSwitcherData
                    key={i}
                    id={i + 1}
                    currentId={isActive}
                >
                    {e}
                </BlockSwitcherData>
            ))}
        </VStack>
    );
});
