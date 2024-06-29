import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskPageFilter} from './TaskPageFilter';

export default {
    title: 'shared/TaskPageFilter',
    component: TaskPageFilter,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskPageFilter>;

const Template: ComponentStory<typeof TaskPageFilter> = (args) => <TaskPageFilter {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
