import {Suspense} from "react";
import {Loader} from "shared/ui/Loader/Loader";
import {VStack} from "shared/ui/Stack";
import {AuthPanel} from "widgets/AuthPanel";

const AuthPage = () => {
    return (
        <VStack
            max
            fullScreen
            align={'center'}
            justify={'center'}
        >
            <Suspense fallback={<Loader/>}>
                <AuthPanel/>
            </Suspense>
        </VStack>
    );
};

export default AuthPage;