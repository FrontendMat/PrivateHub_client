import {ComponentStory, ComponentMeta} from '@storybook/react';

import {CheckBox} from './CheckBox';

export default {
    title: 'shared/CheckBox',
    component: CheckBox,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
