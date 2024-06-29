import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SidebarNav} from './SidebarNav';

export default {
    title: 'shared/SidebarNav',
    component: SidebarNav,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof SidebarNav>;

const Template: ComponentStory<typeof SidebarNav> = (args) => <SidebarNav {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
