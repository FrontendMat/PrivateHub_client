import {ComponentStory, ComponentMeta} from '@storybook/react';

import LoginPage from './LoginPage';

export default {
    title: 'shared/LoginPage',
    component: LoginPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage/>;

export const Normal = Template.bind({});
Normal.args = {};
