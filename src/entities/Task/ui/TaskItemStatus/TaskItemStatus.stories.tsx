import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskItemStatus} from './TaskItemStatus';

export default {
    title: 'shared/TaskItemStatus',
    component: TaskItemStatus,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskItemStatus>;

const Template: ComponentStory<typeof TaskItemStatus> = (args) => <TaskItemStatus {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
