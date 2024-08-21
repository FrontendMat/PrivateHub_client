import {lazy} from "react";

export const FinancePageAsync = lazy(
    async () => await import('./FinancePage')
)