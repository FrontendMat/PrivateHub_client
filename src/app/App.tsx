import {classNames} from 'shared/lib/classNames/classNames'
import {useTheme} from 'app/providers/ThemeProvider'
import {AppRouter} from 'app/providers/router'
import {Suspense, useEffect} from 'react'
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getUserAuthData,
    getUserInited,
    checkIsUserAuth
} from "entities/User";
import {Sidebar} from "widgets/Sidebar";
import {Header} from "widgets/Header";

const App = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const isAuth = useSelector(getUserAuthData);

    useEffect(() => {
        dispatch(checkIsUserAuth())
    }, [dispatch]);

    if (!isAuth) {
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
                    <Sidebar/>
                    {inited && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
}

export default App;
