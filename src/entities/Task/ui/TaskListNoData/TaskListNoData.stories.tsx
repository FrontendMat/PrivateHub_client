import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskListNoData} from './TaskListNoData';

export default {
    title: 'shared/TaskListNoData',
    component: TaskListNoData,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskListNoData>;

const Template: ComponentStory<typeof TaskListNoData> = (args) => <TaskListNoData {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
