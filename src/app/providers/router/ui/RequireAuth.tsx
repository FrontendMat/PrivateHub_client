import {useLocation, Navigate} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";

export function RequireAuth({children}: {children: JSX.Element}) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth || auth && !auth.isActivated) {
        return <Navigate to={RoutePath.auth} state={{from: location}} replace/>;
    }

    return children;
}