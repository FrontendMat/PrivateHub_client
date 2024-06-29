import cls from './LoginPage.module.scss';
import {LoginForm} from "features/authByUsername";
import {Suspense} from "react";
import {Loader} from "shared/ui/Loader/Loader";
import {Page} from "shared/ui/Page/ui/Page";

const LoginPage = () => {
    return (
        <section className={cls.LoginPage}>
            <Suspense fallback={<Loader/>}>
                <LoginForm/>
            </Suspense>
        </section>
    );
};

export default LoginPage;