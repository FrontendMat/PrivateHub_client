import {Finance} from "entities/Finance";

export interface AddFinanceCategorySchema {
    isLoading?: boolean,
    error?: string,
    data?: Finance,
}