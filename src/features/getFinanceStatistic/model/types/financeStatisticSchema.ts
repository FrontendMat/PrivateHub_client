import {BarChartData} from "shared/ui/Charts";

export interface FinanceStatisticSchema {
    incomes?: BarChartData[];
    expenses?: BarChartData[];
    sum?: BarChartData[];
    incomesValue?: number;
    expensesValue?: number;
    result?: number;
    isLoading?: boolean;
    error?: string;
}

export interface FinanceStatisticResponse {
    data: FinanceStatisticSchema;
    result: number;
}