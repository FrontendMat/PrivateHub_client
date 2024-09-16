import {memo} from "react";
import {Page} from "shared/ui/Page/ui/Page";
import {FinancePanel} from "widgets/FinancePanel";

const IncomesPage = () => {
    
    return (
        <Page>
            <FinancePanel financeType={'Incomes'}/>
        </Page>
    );
};

export default memo(IncomesPage);