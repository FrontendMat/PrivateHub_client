import {useContext} from "react";
import {SIDEBAR_COLLAPSED_KEY} from "shared/consts/localstorage";
import {SidebarContext} from "shared/lib/context";

export interface useCollapsedResult {
    collapsed: boolean;
    toggleCollapsed: () => void;
}

export function useCollapsed (): useCollapsedResult {
    const {collapsed, setCollapsed} = useContext(SidebarContext)

    const toggleCollapsed = () => {
        setCollapsed?.(!collapsed)
    }

    localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(collapsed));

    return {
        collapsed: collapsed || false,
        toggleCollapsed
    }
}