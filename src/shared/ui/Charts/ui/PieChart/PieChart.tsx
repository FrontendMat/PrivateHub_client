import {ResponsivePie} from '@nivo/pie'
import {memo} from "react";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {CustomTooltip} from "../CustomTooltip/CustomTooltip";
import {PieChartData} from "../../types/сhart";

export interface PieChartProps {
    data: PieChartData[];
    isLoading?: boolean;
}

export const PieChart =  memo((props: PieChartProps) => {
    const {
        data,
        isLoading
    } = props;

    if (isLoading) {
        return (
            <Skeleton border={'50%'} height={220} width={220}/>
        )
    }

    return (
        <ResponsivePie
            data={data}
            margin={{top: 60, right: 60, bottom: 60, left: 60}}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{from: "color", modifiers: [["darker", 0.2]]}}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#A39999FF"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{from: "color"}}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{from: "color", modifiers: [["darker", 2]]}}
            colors={{ datum: 'data.color' }}
            tooltip={(datum) => (
                <CustomTooltip
                    id={datum.datum.id}
                    value={datum.datum.value}
                    color={datum.datum.color}
                />
            )}
        />
    )
})