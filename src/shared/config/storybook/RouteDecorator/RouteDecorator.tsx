import {BrowserRouter} from "react-router-dom";

export const RouteDecorator = (StoryFn: () => React.ReactNode) => (
    <BrowserRouter>
        <StoryFn/>
    </BrowserRouter>
);