import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {SidebarItemType} from "../types/sidebar";
import TasksIcon from 'shared/assets/icons/task.svg';
import FinanceIcon from 'shared/assets/icons/finance.svg';
import BankIcon from 'shared/assets/icons/bank.svg';
import DashboardIcon from 'shared/assets/icons/dashboard.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import {getUserAuthData} from "entities/User";
import {createSelector} from "@reduxjs/toolkit";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'Dashboard',
                Icon: DashboardIcon,
                authOnly: true,
            },
            {
                path: RoutePath.finance,
                text: 'Finance',
                Icon: FinanceIcon,
                authOnly: true,
            },
            {
                path: RoutePath.bank,
                text: 'My Bank',
                Icon: BankIcon,
                authOnly: true,
            },
            {
                path: RoutePath.tasks,
                text: 'Tasks',
                Icon: TasksIcon,
                authOnly: true,
            },
            {
                path: RoutePath.calendar,
                text: 'Calendar',
                Icon: CalendarIcon,
                authOnly: true,
            },
        ];

        return sidebarItemsList;
    },
);