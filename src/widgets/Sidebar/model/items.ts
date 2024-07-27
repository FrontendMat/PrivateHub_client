import {RoutePath} from "shared/config/routeConfig/routeConfig";
import SettingsIcon from 'shared/assets/icons/settings.svg';
import TasksIcon from 'shared/assets/icons/task.svg';
import FinanceIcon from 'shared/assets/icons/finance.svg';
import DashboardIcon from 'shared/assets/icons/dashboard.svg';
// import ProfileIcon from 'shared/assets/icons/profile.svg';
import ProfileIcon from 'shared/assets/icons/user.svg';

export interface SidebarItemsType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    privateRoute?: boolean;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemsType[]= [
    {
        path: RoutePath.main,
        text: 'Dashboard',
        Icon: DashboardIcon,
        authOnly: true,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.tasks,
        text: 'Tasks',
        Icon: TasksIcon,
        authOnly: true,
    },
    {
        path: RoutePath.finance,
        text: 'Finance',
        Icon: FinanceIcon,
        authOnly: true,
    },
    {
        path: RoutePath.settings,
        text: 'Settings',
        Icon: SettingsIcon,
        authOnly: true,
    },
]