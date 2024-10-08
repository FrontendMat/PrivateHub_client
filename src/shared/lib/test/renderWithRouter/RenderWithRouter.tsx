import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";

export interface renderWithRouterOptions {
    route: string;
}

export function renderWithRouter (component: ReactNode, options: renderWithRouterOptions) {
    const {
        route
    } = options;

    return render(
        <MemoryRouter initialEntries={[]}>
            {component}
        </MemoryRouter>
    )
}