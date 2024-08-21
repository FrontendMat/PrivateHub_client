import {Suspense} from "react";
import cls from './AuthPage.module.scss';
import {Loader} from "shared/ui/Loader/Loader";
import {VStack} from "shared/ui/Stack";
import {AuthPanel} from "widgets/AuthPanel";
import {LangSwitcher} from "features/LangSwitcher";

const AuthPage = () => {
    return (
        <VStack
            max
            fullScreen
            align={'center'}
            justify={'center'}
        >
            <Suspense fallback={<Loader/>}>
                <LangSwitcher className={cls.switcher}/>
                <AuthPanel/>
            </Suspense>
        </VStack>
    );
};

export default AuthPage;