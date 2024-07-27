import {memo} from "react";
import {Page} from "shared/ui/Page";
import {FinanceResult} from "features/getFinanceResult";
import {VStack} from "shared/ui/Stack";

const MainPage = memo(() => {

    return (
        <Page>
            <VStack
                gap={'20'}
                align={'center'}
                max
                justify={'center'}
            >
                <FinanceResult/>
            </VStack>
        </Page>
    );
});

export default MainPage;
