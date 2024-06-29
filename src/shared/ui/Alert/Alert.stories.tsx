import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Alert} from './Alert';

export default {
    title: 'shared/Alert',
    component: Alert,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
