import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskListSkeleton} from './TaskListSkeleton';

export default {
    title: 'shared/TaskListSkeleton',
    component: TaskListSkeleton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskListSkeleton>;

const Template: ComponentStory<typeof TaskListSkeleton> = (args) => <TaskListSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
