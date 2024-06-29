import {ComponentStory, ComponentMeta} from '@storybook/react';

import {EditTaskFormSkeleton} from './EditTaskFormSkeleton';

export default {
    title: 'shared/EditTaskFormSkeleton',
    component: EditTaskFormSkeleton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof EditTaskFormSkeleton>;

const Template: ComponentStory<typeof EditTaskFormSkeleton> = (args) => <EditTaskFormSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
