import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskPageSort} from './TaskPageSort';

export default {
    title: 'shared/TaskPageSort',
    component: TaskPageSort,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskPageSort>;

const Template: ComponentStory<typeof TaskPageSort> = (args) => <TaskPageSort {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
