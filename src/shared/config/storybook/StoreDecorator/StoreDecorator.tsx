import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import React from "react";

const defaultAsyncReducers: ReducersList = {

}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryFn: () => React.ReactNode) => (
    <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryFn/>
    </StoreProvider>
);


