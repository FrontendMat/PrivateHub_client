import {createContext} from "react";

export interface SidebarContextProps {
    collapsed?: boolean
    setCollapsed?: (collapsed: boolean) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({})