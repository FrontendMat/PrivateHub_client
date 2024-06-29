import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskList} from './TaskList';

export default {
    title: 'shared/TaskList',
    component: TaskList,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => <TaskList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
