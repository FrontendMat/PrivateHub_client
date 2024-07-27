import {User} from "entities/User";

export type FinanceType = 'Incomes' | 'Expenses';

export interface Finance {
    _id?: string;
    name?: string;
    type?: FinanceType;
    amount?: number;
    isRegular?: boolean;
}

export interface Transaction {
    _id?: string;
    type?: FinanceType;
    amount?: number;
    category?: string;
    description?: string;
}

export interface FinanceSchema {
    _id?: string;
    user?: User;
    data?: Finance[];
    financeType?: FinanceType;
    totalValue?: number;
    isLoading?: boolean;
    error?: string;
}