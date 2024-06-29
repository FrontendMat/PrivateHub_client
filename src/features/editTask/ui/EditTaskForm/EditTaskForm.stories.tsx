import {ComponentStory, ComponentMeta} from '@storybook/react';

import EditTaskForm from './EditTaskForm';

export default {
    title: 'shared/EditTaskForm',
    component: EditTaskForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof EditTaskForm>;

const Template: ComponentStory<typeof EditTaskForm> = (args) => <EditTaskForm  {...args}/>;

export const Normal = Template.bind({});
Normal.args = {};
