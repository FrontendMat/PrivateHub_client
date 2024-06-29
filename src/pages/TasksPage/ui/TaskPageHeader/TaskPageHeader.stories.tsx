import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskPageHeader} from './TaskPageHeader';

export default {
    title: 'shared/TaskPageHeader',
    component: TaskPageHeader,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskPageHeader>;

const Template: ComponentStory<typeof TaskPageHeader> = (args) => <TaskPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
