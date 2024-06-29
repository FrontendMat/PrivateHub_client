import {ComponentStory, ComponentMeta} from '@storybook/react';

import {EditTaskFormHeader} from './EditTaskFormHeader';

export default {
    title: 'shared/EditTaskFormHeader',
    component: EditTaskFormHeader,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof EditTaskFormHeader>;

const Template: ComponentStory<typeof EditTaskFormHeader> = (args) => <EditTaskFormHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
