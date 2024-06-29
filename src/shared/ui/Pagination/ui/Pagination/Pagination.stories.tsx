import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Pagination} from './Pagination';

export default {
    title: 'shared/Pagination',
    component: Pagination,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
