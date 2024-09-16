import {HeaderNavItem} from "widgets/Header/model/types";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export const HeaderNavItems: HeaderNavItem[] = [
    {
        path: RoutePath.home,
        text: 'Home'
    },
    {
        path: RoutePath.incomes,
        text: 'Incomes'
    },
    {
        path: RoutePath.expenses,
        text: 'Expenses'
    },
    {
        path: RoutePath.statistic,
        text: 'Statistic'
    },
]