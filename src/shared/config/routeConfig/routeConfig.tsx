import {RouteProps} from 'react-router-dom'
import {NotFoundPage} from "pages/NotFoundPage";
import {SettingsPage} from "pages/SettingsPage";
import {HomePage} from "pages/HomePage";
import {AuthPage} from "pages/AuthPage";
import {ExpensesPage} from "pages/ExpensesPage";
import {IncomesPage} from "pages/IncomesPage";
import {StatisticPage} from "pages/StatisticPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    //Public
    HOME = 'home',
    AUTH = 'auth',

    //Panel
    SETTINGS = 'settings',
    INCOMES = 'incomes',
    EXPENSES = 'expenses',
    STATISTIC = 'statistic',

    //LAST ROUTE
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.AUTH]: '/auth',

    //PRIVATE
    [AppRoutes.INCOMES]: '/incomes',
    [AppRoutes.EXPENSES]: '/expenses',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.STATISTIC]: '/statistic',

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage/>
    },

    //AUTH ONLY ROUTES
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage/>,
        authOnly: true
    },
    [AppRoutes.INCOMES]: {
        path: RoutePath.incomes,
        element: <IncomesPage/>,
        authOnly: true
    },
    [AppRoutes.EXPENSES]: {
        path: RoutePath.expenses,
        element: <ExpensesPage/>,
        authOnly: true
    },
    [AppRoutes.STATISTIC]: {
        path: RoutePath.statistic,
        element: <StatisticPage/>,
        authOnly: true
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage/>,
        authOnly: true
    },

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
