import {ComponentStory, ComponentMeta} from '@storybook/react';

import {HeaderLogo} from './HeaderLogo';

export default {
    title: 'shared/HeaderLogo',
    component: HeaderLogo,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof HeaderLogo>;

const Template: ComponentStory<typeof HeaderLogo> = (args) => <HeaderLogo {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
