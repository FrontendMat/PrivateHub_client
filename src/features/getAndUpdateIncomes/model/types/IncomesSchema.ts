import {User} from "entities/User";
import {Finance} from "entities/Finance";

export interface IncomesSchema {
    _id?: string;
    user?: User;
    data?: Finance[];
    totalValue?: number;
    isLoading?: boolean;
    error?: string;
}