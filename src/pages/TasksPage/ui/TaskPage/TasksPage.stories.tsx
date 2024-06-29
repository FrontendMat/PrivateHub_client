import {ComponentStory, ComponentMeta} from '@storybook/react';

import TasksPage from './TasksPage';

export default {
    title: 'shared/TasksPage',
    component: TasksPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TasksPage>;

const Template: ComponentStory<typeof TasksPage> = () => <TasksPage />;

export const Normal = Template.bind({});
Normal.args = {};
