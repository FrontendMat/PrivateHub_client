import {ComponentStory, ComponentMeta} from '@storybook/react';

import {TaskLevelSelect} from './TaskLevelSelect';

export default {
    title: 'shared/TaskLevelSelect',
    component: TaskLevelSelect,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof TaskLevelSelect>;

const Template: ComponentStory<typeof TaskLevelSelect> = (args) => <TaskLevelSelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
