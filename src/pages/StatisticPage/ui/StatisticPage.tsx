import {memo} from "react";
import {Page} from "shared/ui/Page/ui/Page";
import {PageInDev} from "widgets/PageInDev/PageInDev";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";
import {FinanceResult} from "features/getFinanceResult";
import {FinanceStatistic} from "features/getFinanceStatistic";

interface StatisticPageProps {
    className?: string
}

const StatisticPage = memo((props: StatisticPageProps) => {
    const {
        className,
    } = props;
    const isAuth = useSelector(getUserAuthData);
    
    return (
        <Page>
            <FinanceStatistic/>
        </Page>
    );
});

export default memo(StatisticPage);