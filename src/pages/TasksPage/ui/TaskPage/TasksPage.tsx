import {memo} from "react";
import {Page} from "shared/ui/Page/ui/Page";
import {PageInDev} from "widgets/PageInDev/PageInDev";

interface TaskPageProps {
    className?: string
}

const TasksPage = memo((props: TaskPageProps) => {
    const {
        className,
    } = props;
    
    return (
        <Page>
            <PageInDev/>
        </Page>
    );
});

export default memo(TasksPage);