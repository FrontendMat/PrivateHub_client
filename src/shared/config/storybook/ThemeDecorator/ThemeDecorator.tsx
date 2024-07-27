import {ThemeProvider} from "app/providers/ThemeProvider";
import {Theme} from "shared/lib/context/ThemeContext/ThemeContext";

export const ThemeDecorator = (theme: Theme) => (StoryFn: () => React.ReactNode) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryFn/>
        </div>
    </ThemeProvider>
);
