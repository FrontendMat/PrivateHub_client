import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './FinanceGraph.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useMemo, useState} from "react";
import {Card} from "shared/ui/Card";
import {Finance} from "../../model/types/finance";
import {HStack, VStack} from "shared/ui/Stack";
import {ChartDataPanel, colorPalette, mockPieData, PieChart} from "shared/ui/Charts";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import ArrowRightIcon from "shared/assets/icons/arrow-right.svg";
import ArrowLeftIcon from "shared/assets/icons/arrow-left.svg";

interface FinanceGraphProps {
    className?: string;
    data?: Finance[];
    isLoading?: boolean;
}

export const FinanceGraph = memo((props: FinanceGraphProps) => {
    const {
        className,
        isLoading,
        data
    } = props;
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const toggleWidth = () => {
        setCollapsed(prev => !prev)
    }

    const mods: Mods = {
        [cls.full_w]: collapsed
    }

    let chartData;
    if (data && data.length > 0) {
        chartData = data
    } else {
        chartData = mockPieData;
    }

    const formatedData = useMemo(() => (
        chartData?.map((e, i) => (
            {
                id: e.name,
                label: e.name,
                value: e.amount,
                color: colorPalette[i]
            }
        ))
    ), [chartData])

    return (
        <HStack justify={'center'} align={'center'} gap={'20'} className={classNames('', {}, [className])}>
            <Card
                padding={'20'}
                border={'full'}
                className={classNames(cls.FinanceGraph, {}, [className])}
            >
                <VStack
                    max
                    justify={'center'}
                    align={'center'}
                    maxHeight
                >
                    <PieChart
                        isLoading={isLoading}
                        data={formatedData}
                    />
                </VStack>
            </Card>
            <Card
                padding={'10'}
                className={classNames(cls.panelCard, mods, [className])}
            >
                <Button
                    theme={ButtonTheme.CLEAR}
                    square
                    onClick={toggleWidth}
                    className={cls.toggleBtn}
                >
                    {collapsed
                        ? <Icon className={cls.icon} Svg={ArrowRightIcon} size={IconSize.S} hover={'primary'} color={'gray'} pointer/>
                        : <Icon className={cls.icon} Svg={ArrowLeftIcon} size={IconSize.S} hover={'primary'} color={'gray'} pointer/>
                    }
                </Button>
                <ChartDataPanel
                    isLoading={isLoading}
                    className={cls.panel}
                    data={formatedData}
                />
            </Card>
        </HStack>
    );
});
