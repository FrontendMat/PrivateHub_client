import {ResponsiveCalendar} from "@nivo/calendar";

interface ChartCalendarProps {
    data: [],
    // keys: []
}

const ChartCalendar = ( props:ChartCalendarProps ) => (
    <ResponsiveCalendar
        data={props.data}
        from="2024-04-01"
        to="2024-04-30"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
)

export default ChartCalendar;