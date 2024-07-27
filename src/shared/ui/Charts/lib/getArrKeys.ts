import {BarChartData} from "../types/сhart";

export const getArrKeys = (array: BarChartData[], mainTitle: string): string[] => {
    const keys = new Set<string>();
    array.forEach(item => {
        Object.keys(item).forEach(key => {
            if (key !== mainTitle) {
                keys.add(key);
            }
        });
    });
    return Array.from(keys);
};

export const getTotalCategoryValue = (array: BarChartData[] = [], mainTitle: string ) => {
    return array?.reduce((acc: any, item) => {
        for (const key in item) {
            if (key !== mainTitle) {
                acc[key] = (acc[key] || 0) + item[key];
            }
        }
        return acc;
    }, {});
}