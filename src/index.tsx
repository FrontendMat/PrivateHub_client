import ReactDOM from 'react-dom/client';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {StoreProvider} from "app/providers/StoreProvider";
import 'app/styles/index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);
