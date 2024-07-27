import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './StatisticGraph.module.scss';
import {useTranslation} from "react-i18next";
import {memo, useState} from "react";
import {Card} from "shared/ui/Card";
import {HStack, VStack} from "shared/ui/Stack";
import {Text, TextColors} from "shared/ui/Text/Text";
import {
    BarChart,
    BarChartData,
    ChartDataPanel,
    colorPalette,
    getTotalCategoryValue,
    mockBarData
} from "shared/ui/Charts";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Icon, IconSize} from "shared/ui/Icon/Icon";
import ArrowRightIcon from "shared/assets/icons/arrow-right.svg";
import ArrowLeftIcon from "shared/assets/icons/arrow-left.svg";
import {useCollapsed} from "shared/lib/hooks/useCollapsed/useCollapsed";

interface StatisticGraphPanelProps {
    className?: string,
    data?: BarChartData[];
    totalValue?: number;
    mainTitle: string;
    secondaryTitle: string;
    keyTitle: string;
    title: string;
    color: TextColors;
}

export const StatisticGraph = memo((props: StatisticGraphPanelProps) => {
    const {
        className,
        data,
        keyTitle,
        mainTitle,
        secondaryTitle,
        totalValue,
        title,
        color,
    } = props;
    const {t} = useTranslation();
    const {collapsed} = useCollapsed();
    const [panelCollapsed, setPanelCollapsed] = useState(false);

    const toggleWidth = () => {
        setPanelCollapsed(prev => !prev)
    }

    const mods: Mods = {
        [cls.full_w]: panelCollapsed,
        [cls.collapsed]: collapsed
    }

    let chartData;
    if (data && data.length > 0) {
        chartData = data
    } else {
        chartData = mockBarData;
    }

    const formatedData = getTotalCategoryValue(chartData, keyTitle);
    const formattedResult = Object.entries(formatedData).map(([key, value], index) => ({
        id: key,
        label: key,
        value: value as number,
        color: colorPalette[index % colorPalette.length]
    }));

    return (
        <HStack max gap={'20'} className={classNames('', mods, [className])}>
            <Card max className={classNames('', {}, [className])}>
                <VStack gap={'20'} max maxHeight>
                    <HStack gap={'10'} align={'center'}>
                        <Text
                            text={title}
                            theme={'gray'}
                            bold
                            size={'size_l'}
                            align={'left'}
                        />
                        <Text
                            text={String(totalValue)}
                            theme={color}
                            bold
                            size={'size_l'}
                            align={'left'}
                        />
                    </HStack>
                    <div className={cls.chart}>
                        <BarChart
                            mainTitle={mainTitle}
                            data={chartData}
                            secondaryTitle={secondaryTitle}
                            keyTitle={keyTitle}
                        />
                    </div>
                </VStack>
            </Card>
            <Card
                padding={'10'}
                className={classNames(cls.panelCard, {}, [className])}
            >
                <Button
                    theme={ButtonTheme.CLEAR}
                    square
                    onClick={toggleWidth}
                    className={cls.toggleBtn}
                >
                    {panelCollapsed
                        ? <Icon className={cls.icon} Svg={ArrowRightIcon} size={IconSize.S} hover={'primary'} color={'gray'} pointer/>
                        : <Icon className={cls.icon} Svg={ArrowLeftIcon} size={IconSize.S} hover={'primary'} color={'gray'} pointer/>
                    }
                </Button>
                <ChartDataPanel
                    className={cls.panel}
                    data={formattedResult}
                    barChart
                />
            </Card>
        </HStack>

    );
});
