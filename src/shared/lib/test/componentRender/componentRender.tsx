import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>
}

export function componentRender (component: ReactNode, options: componentRenderOptions = {}) {
    const {
        route = '/',
        initialState
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                {component}
            </StoreProvider>
        </MemoryRouter>
    )
}