import { ResponsiveBar } from '@nivo/bar';
import {memo} from "react";
import {CustomTooltip} from "../CustomTooltip/CustomTooltip";
import {getArrKeys} from "../../lib/getArrKeys";
import {BarChartData} from "../../types/сhart";
import {colorPalette, mockBarData} from "../../lib/items";

export interface BarChartProps {
    data?: BarChartData[],
    keyTitle: string,
    mainTitle: string,
    secondaryTitle: string,
}

export const BarChart =  memo((props: BarChartProps) => {
    const {
        data = mockBarData,
        mainTitle,
        keyTitle,
        secondaryTitle
    } = props;
    const keys = getArrKeys(data, keyTitle);

    return (
        <ResponsiveBar
            data={data}
            keys={keys}
            indexBy={keyTitle}
            margin={{ top: 10, right: 20, bottom: 60, left: 80 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={keys?.map((_, i) => colorPalette[i % colorPalette.length])}
            borderColor={{
                from: 'red',
                modifiers: [
                    [
                        'opacity',
                        1
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: `${mainTitle}`,
                legendPosition: 'middle',
                legendOffset: 45,
                truncateTickAt: 70
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: `${secondaryTitle}`,
                legendPosition: 'middle',
                legendOffset: -60,
                truncateTickAt: 0
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            theme={{
                axis: {
                    ticks: {
                        text: {
                            fill: '#A39999FF',
                        },
                    },
                    legend: {
                        text: {
                            fill: '#A39999FF',
                            fontWeight: 'bold'
                        }
                    },
                },
                grid: {
                    line: {
                        stroke: '#A39999FF',
                        strokeWidth: 0.3
                    }
                },
            }}
            role="application"
            ariaLabel="Nivo bar chart demo"
            tooltip={({ id, value, color }) => (
                <CustomTooltip
                    id={id}
                    value={value}
                    color={color}
                />
            )}
        />
    )
})