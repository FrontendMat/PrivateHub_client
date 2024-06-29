export type FinanceType = 'incomes' | 'expenses';

export interface Finance {
    _id?: string;
    name?: string;
    type?: FinanceType;
    amount?: number;
}

export interface FinanceResponse {
    totalValue?: number;
    data?: Finance[];
}