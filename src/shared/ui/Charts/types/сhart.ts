export interface BarChartData {
    date: string;
    [category: string]: number | string;
}

export interface PieChartData {
    id?: string;
    label?: string;
    value?: number;
    color?: string;
}

export interface ChartPanelData {
    id?: string;
    label?: string;
    value?: number;
    color?: string;
}