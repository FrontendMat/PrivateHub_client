import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {Navigate, useLocation} from "react-router-dom";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export function UnAuth({children}: {children: JSX.Element}) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (auth && location.pathname === RoutePath.auth && auth.isActivated) {
        return <Navigate to={RoutePath.home} state={{from: location}} replace/>;
    }

    return children;
}