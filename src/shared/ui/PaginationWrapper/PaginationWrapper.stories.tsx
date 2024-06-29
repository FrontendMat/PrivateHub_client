import {ComponentStory, ComponentMeta} from '@storybook/react';

import {PaginationWrapper} from './PaginationWrapper';

export default {
    title: 'shared/PaginationWrapper',
    component: PaginationWrapper,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof PaginationWrapper>;

const Template: ComponentStory<typeof PaginationWrapper> = (args) => <PaginationWrapper {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
