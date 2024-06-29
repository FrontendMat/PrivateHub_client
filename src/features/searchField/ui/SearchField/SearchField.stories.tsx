import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SearchField} from './SearchField';

export default {
    title: 'shared/SearchField',
    component: SearchField,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => <SearchField {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
