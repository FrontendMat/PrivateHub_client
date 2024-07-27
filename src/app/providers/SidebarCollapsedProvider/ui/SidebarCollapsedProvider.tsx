import {useTranslation} from "react-i18next";
import {memo, ReactNode, useMemo, useState} from "react";
import {SidebarContext} from 'shared/lib/context';
import {SIDEBAR_COLLAPSED_KEY} from "shared/consts/localstorage";

const defaultSidebarCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED_KEY) || 'false';

interface SidebarCollapsedProviderProps {
    initialState?: boolean;
    children: ReactNode;
}

const SidebarCollapsedProvider = (props: SidebarCollapsedProviderProps) => {
    const {
        children,
        initialState,
    } = props;
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(initialState || defaultSidebarCollapsed === 'true');

    const defaultProps = useMemo(() => ({
        collapsed,
        setCollapsed
    }), [collapsed])

    return (
        <SidebarContext.Provider value={defaultProps}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarCollapsedProvider;
