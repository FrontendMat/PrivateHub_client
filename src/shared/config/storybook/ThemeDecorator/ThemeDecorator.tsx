import {Theme, ThemeProvider} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryFn: () => React.ReactNode) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryFn/>
        </div>
    </ThemeProvider>
);
