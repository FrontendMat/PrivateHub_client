import {classNames} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/router'
import {Suspense, useEffect} from 'react'
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getUserAuthData,
    getUserInited,
    checkIsUserAuth
} from "entities/User";
import {Header} from "widgets/Header";
import {useTheme} from "shared/lib/hooks/useTheme/useTheme";

const App = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const isAuth = useSelector(getUserAuthData);
    const isNewUser = isAuth && !isAuth.isActivated;

    useEffect(() => {
        const result = dispatch(checkIsUserAuth());
    }, [dispatch]);

    if (!isAuth || isNewUser) {
        return (
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback=''>
                    {inited && <AppRouter/>}
                </Suspense>
            </div>
        )
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Header/>
                <div className='content-page'>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
}

export default App;
