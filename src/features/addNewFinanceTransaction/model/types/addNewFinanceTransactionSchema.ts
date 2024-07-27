import {Finance} from "entities/Finance";
import {Transaction} from "entities/Finance/model/types/finance";

export interface AddNewFinanceTransactionSchema {
    isLoading?: boolean,
    error?: string,
    data?: Transaction,
}