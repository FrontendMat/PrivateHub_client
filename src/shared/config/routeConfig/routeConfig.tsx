import { RouteProps } from 'react-router-dom'
import {MainPage} from "pages/MainPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {LoginPage} from "pages/AuthPage";
import {TasksPage} from "pages/TasksPage";
import {ProfilePage} from "pages/ProfilePage";
import {SettingsPage} from "pages/SettingsPage";
import {FinancePage} from "pages/FinancePage";
import {CalendarPage} from "pages/CalendarPage";
import {BankPage} from "pages/BankPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    //Authorization
    AUTH = 'auth',

    //Panel
    MAIN = 'main',
    TASKS = 'tasks',
    PROFILE = 'profile',
    SETTINGS = 'settings',
    CALENDAR = 'calendar',
    BANK = 'bank',
    FINANCE = 'finance',

    //LAST ROUTE
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.TASKS]: '/tasks',
    [AppRoutes.PROFILE]: '/profile/', //name + id
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.CALENDAR]: '/calendar',
    [AppRoutes.BANK]: '/bank',
    [AppRoutes.FINANCE]: '/finance',

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
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
        path: `${RoutePath.profile}:name/:id`,
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
    [AppRoutes.CALENDAR]: {
        path: RoutePath.calendar,
        element: <CalendarPage/>,
        authOnly: true
    },
    [AppRoutes.BANK]: {
        path: RoutePath.bank,
        element: <BankPage/>,
        authOnly: true
    },

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
