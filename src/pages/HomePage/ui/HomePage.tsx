import {memo} from "react";
import {Page} from "shared/ui/Page/ui/Page";
import {FinanceResult} from "features/getFinanceResult";


const HomePage = memo(() => {
    return (
        <Page>
            <FinanceResult/>
        </Page>
    );
});

export default memo(HomePage);