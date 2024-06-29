import {ComponentStory, ComponentMeta} from '@storybook/react';

import AddTaskForm from './AddTaskForm';

export default {
    title: 'shared/AddTaskForm',
    component: AddTaskForm,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof AddTaskForm>;

const Template: ComponentStory<typeof AddTaskForm> = (args) => <AddTaskForm {...args}/>;

export const Normal = Template.bind({});
Normal.args = {};
