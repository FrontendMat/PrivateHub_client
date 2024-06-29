import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskItem} from './TaskItem';

export default {
    title: 'shared/TaskItem',
    component: TaskItem,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskItem>;

const Template: ComponentStory<typeof TaskItem> = (args) => <TaskItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
