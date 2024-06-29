import {ComponentStory, ComponentMeta} from '@storybook/react';

import {AddTaskModal} from './AddTaskModal';

export default {
    title: 'shared/AddTaskModal',
    component: AddTaskModal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof AddTaskModal>;

const Template: ComponentStory<typeof AddTaskModal> = (args) => <AddTaskModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
