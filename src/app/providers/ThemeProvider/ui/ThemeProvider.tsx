import React, {type FC, type ReactNode, useMemo, useState} from 'react'
import {LOCAL_STORAGE_THEME_KEY} from "shared/consts/localstorage";
import {Theme, ThemeContext} from "shared/lib/context/ThemeContext/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    initialTheme?: Theme,
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        initialTheme,
        children
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
