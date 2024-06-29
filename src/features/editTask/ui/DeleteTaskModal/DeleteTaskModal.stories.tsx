import {ComponentStory, ComponentMeta} from '@storybook/react';

import {DeleteTaskModal} from './DeleteTaskModal';

export default {
    title: 'shared/DeleteTaskModal',
    component: DeleteTaskModal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof DeleteTaskModal>;

const Template: ComponentStory<typeof DeleteTaskModal> = (args) => <DeleteTaskModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
