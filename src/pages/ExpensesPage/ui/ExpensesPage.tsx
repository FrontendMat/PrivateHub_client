import {memo} from "react";
import {Page} from "shared/ui/Page/ui/Page";
import {FinancePanel} from "widgets/FinancePanel";

const ExpensesPage = memo(() => {
    
    return (
        <Page>
            <FinancePanel
                financeType={'Expenses'}
            />
        </Page>
    );
});

export default memo(ExpensesPage);