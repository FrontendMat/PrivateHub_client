import {ComponentStory, ComponentMeta} from '@storybook/react';

import {EditTaskModal} from './EditTaskModal';

export default {
    title: 'shared/EditTaskModal',
    component: EditTaskModal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof EditTaskModal>;

const Template: ComponentStory<typeof EditTaskModal> = (args) => <EditTaskModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
