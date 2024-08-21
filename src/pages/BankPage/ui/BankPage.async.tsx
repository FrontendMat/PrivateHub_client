import {lazy} from "react";

export const BankPageAsync = lazy(
    async () => await import('./BankPage')
)