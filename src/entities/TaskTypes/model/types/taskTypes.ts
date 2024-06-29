export enum TaskTypes {
    LAND = 'Land',
    PRELAND = 'Preland',
    WP = 'WP',
    ANOTHER = 'Another'
}

export interface TaskType {
    _id?: string,
    name?: string,
}

export interface TaskTypeSchema {
    isLoading?: boolean,
    error?: string,
    data?: TaskType[]
}