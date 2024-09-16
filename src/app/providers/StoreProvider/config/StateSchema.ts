import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import { CombinedState } from 'redux';
import {AxiosInstance} from "axios";
import {UserSchema} from "entities/User";
import {FinanceSchema} from "entities/Finance";
import {LoginSchema} from "features/loginByUserEmail";
import {FinanceResultSchema} from "features/getFinanceResult";
import {RegistrationSchema} from "features/registerByUserEmail";
import {FinanceStatisticSchema} from "features/getFinanceStatistic";
import {AddFinanceCategorySchema} from "features/addNewFinanceCategory";
import {AddNewFinanceTransactionSchema} from "features/addNewFinanceTransaction";
import {UpdateDateSchema} from "features/changeUpdateDate/model/types/types";

export interface StateSchema {
    user: UserSchema,

    //Async Reducers
    loginForm?: LoginSchema,
    registrationForm?: RegistrationSchema,
    finance?: FinanceSchema,
    addFinanceCategory?: AddFinanceCategorySchema,
    addNewFinanceTransaction?: AddNewFinanceTransactionSchema,
    financeStatistic?: FinanceStatisticSchema,
    financeResult?: FinanceResultSchema;
    updateFinanceDate?: UpdateDateSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}