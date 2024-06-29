import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskListPagination} from './TaskListPagination';

export default {
    title: 'shared/TaskListPagination',
    component: TaskListPagination,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskListPagination>;

const Template: ComponentStory<typeof TaskListPagination> = (args) => <TaskListPagination {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
