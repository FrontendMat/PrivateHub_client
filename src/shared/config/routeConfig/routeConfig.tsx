import { RouteProps } from 'react-router-dom'
import {MainPage} from "pages/MainPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {LoginPage} from "pages/LoginPage";
import {TasksPage} from "pages/TasksPage";
import {ProfilePage} from "pages/ProfilePage";
import {SettingsPage} from "pages/SettingsPage";
import {FinancePage} from "pages/FinancePage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    LOGIN = 'login',
    MAIN = 'main',
    TASKS = 'tasks',
    PROFILE = 'profile',
    SETTINGS = 'settings',
    FINANCE = 'finance',

    //LAST ROUTE
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.TASKS]: '/tasks',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.FINANCE]: '/finance',

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage/>
    },

    //AUTH ONLY ROUTES
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
        authOnly: true
    },
    [AppRoutes.TASKS]: {
        path: RoutePath.tasks,
        element: <TasksPage/>,
        authOnly: true
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>,
        authOnly: true
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage/>,
        authOnly: true
    },
    [AppRoutes.FINANCE]: {
        path: RoutePath.finance,
        element: <FinancePage/>,
        authOnly: true
    },

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
