import {EntityState} from "@reduxjs/toolkit";
import {Task} from "entities/Task";

export interface TasksSchema extends EntityState<Task>{
    isLoading?: boolean,
    error?: string,

    //pagination
    page: number,
    totalPages: number,
    limit: number,
    hasMore: boolean,

    //filters && search
    search: string,
    sort: string,
    filter?: TaskFilters,
}

export interface TasksResponse {
    page: number,
    totalPages: number,
    tasks: Task[]
}

export interface TaskFilters {
    user?: string,
    office?: string,
    type?: string,
    level?: string,
    status?: string
}