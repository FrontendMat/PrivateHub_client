
export interface FinanceResult {
    incomes?: number;
    expenses?: number;
    summary?: number;
    mark?: string
}

export interface FinanceResultSchema {
    data?: FinanceResult;
    isLoading?: boolean;
    error?: string
}