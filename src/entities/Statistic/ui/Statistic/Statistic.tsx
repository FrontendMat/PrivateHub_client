import {classNames} from "shared/lib/classNames/classNames";
import {memo} from "react";
import {
    BarChartData,
} from "shared/ui/Charts";
import {TextColors} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {StatisticGraph} from "../StatisticGraph/StatisticGraph";
import {Card} from "shared/ui/Card";
import {PageError} from "widgets/PageError/PageError";

interface StatisticProps {
    className?: string;
    data?: BarChartData[];
    totalValue?: number;
    mainTitle: string;
    secondaryTitle: string;
    keyTitle: string;
    isLoading?: boolean;
    title: string;
    color: TextColors
    error?: string;
}

export const Statistic = memo((props: StatisticProps) => {
    const {
        className,
        data,
        keyTitle,
        mainTitle,
        secondaryTitle,
        totalValue,
        title,
        color,
        isLoading,
        error
    } = props;

    let content;
    if (isLoading) {
        content = (
            <Card theme={'inverted_bg'} padding={'20'} width={'max'}>
                <Skeleton height={487} width={'100%'} border={'12px'}/>
            </Card>
        )
    } else if (error) {
        content = (
            <div>error</div>
        )
    } else {
        content = (
            <StatisticGraph 
                data={data}
                totalValue={totalValue}
                mainTitle={mainTitle} 
                secondaryTitle={secondaryTitle} 
                keyTitle={keyTitle} 
                title={title} 
                color={color}
            />
        )
    }
    
    return (
        <>
            {content}
        </>
    );
});
