import React, {memo, Suspense, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PageLoader} from 'widgets/PageLoader/ui/PageLoader';
import {AppRoutesProps, routeConfig} from "shared/config/routeConfig/routeConfig";
import {RequireAuth} from "app/providers/router/ui/RequireAuth";
import {UnAuth} from "app/providers/router/ui/UnAuth";
import {useSelector} from "react-redux";
import {getUserError} from "entities/User";
import {Alert} from "shared/ui/Alert/Alert";

const AppRouter = () => {
    // const error = useSelector(getUserError);
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>
        )
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly
                    ? <RequireAuth>
                        {element}
                    </RequireAuth>
                    : <UnAuth>
                        {element}
                    </UnAuth>
                }
            />
        )
    }, [])

    return (
        <>
            {/*{error && <Alert text={error} color={'error'}/>}*/}
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </>
    )
}

export default memo(AppRouter);
