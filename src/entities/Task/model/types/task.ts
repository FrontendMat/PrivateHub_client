import {User} from "entities/User";
import {TaskTypes} from "entities/TaskTypes";
import {TaskLevel} from "entities/TaskLevel";

export interface ManageTask {
    _id?: string,
    title?: string,
    type?: TaskTypes,
    office?: string,
    description?: string,
    level?: TaskLevel,
    isDone?: boolean,
    user?: string
}

export interface Task {
    _id: string,
    date: string,
    title: string,
    type: TaskTypes,
    description: string,
    level: TaskLevel,
    user: User,
    isDone: boolean
}