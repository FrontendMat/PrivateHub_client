import {ComponentStory, ComponentMeta} from '@storybook/react';

import AuthPage from './AuthPage';

export default {
    title: 'shared/AuthPage',
    component: AuthPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof AuthPage>;

const Template: ComponentStory<typeof AuthPage> = () => <AuthPage/>;

export const Normal = Template.bind({});
Normal.args = {};
