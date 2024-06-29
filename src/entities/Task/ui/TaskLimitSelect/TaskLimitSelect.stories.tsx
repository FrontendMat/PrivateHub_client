import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskLimitSelect} from './TaskLimitSelect';

export default {
    title: 'shared/TaskLimitSelect',
    component: TaskLimitSelect,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskLimitSelect>;

const Template: ComponentStory<typeof TaskLimitSelect> = (args) => <TaskLimitSelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
