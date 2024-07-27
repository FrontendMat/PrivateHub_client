import {memo} from "react";
import {Page} from "shared/ui/Page/ui/Page";

interface TaskPageProps {
    className?: string
}

const TasksPage = memo((props: TaskPageProps) => {
    const {
        className,
    } = props;
    
    return (
        <Page>
            Task Page
        </Page>
    );
});

export default memo(TasksPage);