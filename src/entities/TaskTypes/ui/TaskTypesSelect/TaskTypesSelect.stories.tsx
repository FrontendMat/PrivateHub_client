import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskTypesSelect} from './TaskTypesSelect';

export default {
    title: 'shared/TaskTypesSelect',
    component: TaskTypesSelect,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskTypesSelect>;

const Template: ComponentStory<typeof TaskTypesSelect> = (args) => <TaskTypesSelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
