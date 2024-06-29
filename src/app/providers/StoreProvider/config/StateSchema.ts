import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import { CombinedState } from 'redux';
import {AxiosInstance} from "axios";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/authByUsername";
import {TasksSchema} from "pages/TasksPage";
import {AddTaskFormSchema} from "features/addTask";
import {EditTaskFormSchema} from "features/editTask";
import {IncomesSchema} from "features/getAndUpdateIncomes";
import {AddFinanceCategorySchema} from "features/addNewFinanceCategory";

export interface StateSchema {
    user: UserSchema,

    //Async Reducers
    loginForm?: LoginSchema,
    tasks?: TasksSchema,
    addTaskForm?: AddTaskFormSchema,
    editTaskForm?: EditTaskFormSchema,
    incomesSchema?: IncomesSchema,
    addFinanceCategorySchema?: AddFinanceCategorySchema,
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