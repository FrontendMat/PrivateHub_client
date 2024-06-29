import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskListHeader} from './TaskListHeader';

export default {
    title: 'shared/TaskListHeader',
    component: TaskListHeader,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskListHeader>;

const Template: ComponentStory<typeof TaskListHeader> = (args) => <TaskListHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
