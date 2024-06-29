import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PaginationItem} from './PaginationItem';

export default {
    title: 'shared/PaginationItem',
    component: PaginationItem,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PaginationItem>;

const Template: ComponentStory<typeof PaginationItem> = (args) => <PaginationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
